import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useReducer,
} from "react";
import { getDatabase, ref, get, set, push, remove } from "firebase/database";
import firebaseApp from "../firebase";

const db = getDatabase(firebaseApp);
const CitiesContext = createContext();

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return { ...state, isLoading: true };
        case "cities/loaded":
            return { ...state, isLoading: false, cities: action.payload };
        case "city/created":
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload],
                currentCity: action.payload,
            };
        case "city/deleted":
            return {
                ...state,
                isLoading: false,
                cities: state.cities.filter(
                    (city) => city.id !== action.payload
                ),
            };
        case "currentCity/loaded":
            return { ...state, isLoading: false, currentCity: action.payload };
        case "rejected":
            return { ...state, isLoading: false, error: action.payload };
        default:
            throw new Error("Unknown action type");
    }
}

function CitiesProvider({ children }) {
    const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        async function fetchCities() {
            dispatch({ type: "loading" });
            try {
                const citiesRef = ref(db, "cities");
                const snapshot = await get(citiesRef);
                const data = snapshot.exists() ? snapshot.val() : [];
                const citiesArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                dispatch({ type: "cities/loaded", payload: citiesArray });
            } catch (err) {
                dispatch({
                    type: "rejected",
                    payload: "There was an error fetching the data",
                });
            }
        }
        fetchCities();
    }, []);
    const getCity = useCallback(async function getCity(id) {
        dispatch({ type: "loading" });
        try {
            const cityRef = ref(db, `cities/${id}`);
            const snapshot = await get(cityRef);
            if (snapshot.exists()) {
                dispatch({
                    type: "currentCity/loaded",
                    payload: snapshot.val(),
                });
            } else {
                throw new Error("City not found");
            }
        } catch (err) {
            dispatch({
                type: "rejected",
                payload: "There was an error fetching the data",
            });
        }
    }, []);
    async function createCity(newCityData) {
        dispatch({ type: "loading" });
        try {
            const citiesRef = ref(db, "cities");
            newCityData.date = new Date(newCityData.date).toISOString();
            const newCityRef = push(citiesRef);
            newCityData.id = newCityRef.key;
            await set(newCityRef, newCityData);
            const createdCity = { id: newCityRef.key, ...newCityData };
            dispatch({ type: "city/created", payload: createdCity });
        } catch (err) {
            dispatch({
                type: "rejected",
                payload: "There was an error creating the city",
            });
        }
    }
    async function deleteCity(id) {
        dispatch({ type: "loading" });
        try {
            const cityRef = ref(db, `cities/${id}`);
            await remove(cityRef);
            dispatch({ type: "city/deleted", payload: id });
        } catch (err) {
            dispatch({
                type: "rejected",
                payload: "There was an error deleting the city",
            });
        }
    }
    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                getCity,
                createCity,
                deleteCity,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error("useCities was used outside the CitiesProvider");
    return context;
}

export { CitiesProvider, useCities };

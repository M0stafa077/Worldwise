import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/authenticationContext";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Homepage = lazy(() => import("./pages/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

export default function App() {
    return (
        <AuthProvider>
            <CitiesProvider>
                <BrowserRouter basename="Worldwise">
                    <Suspense fallback={<SpinnerFullPage />}>
                        <Routes>
                            <Route index element={<Homepage />} />
                            <Route path="app" element={<AppLayout />}>
                                <Route
                                    index
                                    element={<Navigate replace to="cities" />}
                                />
                                <Route path="cities" element={<CityList />} />
                                <Route path="cities/:id" element={<City />} />
                                <Route
                                    path="countries"
                                    element={<CountryList />}
                                />
                                <Route path="form" element={<Form />} />
                            </Route>
                            <Route path="/product" element={<Product />} />
                            <Route path="/pricing" element={<Pricing />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </CitiesProvider>
        </AuthProvider>
    );
}

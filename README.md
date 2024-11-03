# Worldwise 🌎

**Worldwise** is a web application built with React.js that allows users to save and manage places they've visited. By selecting locations on a map, users can create a personalized list of cities and places they've explored.

## Features

-   **Interactive Map Selection**: Users can add a place by clicking directly on the map, making it easy to select specific locations without manually inputting coordinates or city names.

-   **Personalized Place Management**: Once a place is added, users can view, edit, and remove entries from their list of visited places, ensuring a dynamic and customizable experience.

-   **Data Persistence with Firebase**: The app uses Firebase Realtime Database to store information on the places added by users, ensuring that all saved locations are securely stored and easily accessible from anywhere.

-   **JSONBin Integration**: JSONBin is used as an additional storage service, enabling structured and efficient data retrieval for the front-end application.

-   **City Information and Unique IDs**: Each saved place includes a unique `id` in the `cities` array within the Firebase Realtime Database, allowing easy identification and retrieval of individual city data.

## Technologies Used

-   **React.js**: The core library for building the user interface.
-   **Firebase Realtime Database**: Used to store user data in real-time.
-   **JSONBin**: External JSON storage service for added data structure and reliability.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/worldwise.git
    cd worldwise
    ```

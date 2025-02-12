import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import movieItemReducer from "./moviesItemSlice"; // Додай імпорт

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieItem: movieItemReducer, // Додай редюсер сюди
    },
});

export default store;

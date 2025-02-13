import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import movieItemReducer from "./moviesItemSlice";
import actorsReducer from "./actorsSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieItem: movieItemReducer,
        actors: actorsReducer,
    },
});

export default store;
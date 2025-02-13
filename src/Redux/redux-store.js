import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Features/Movies/moviesSlice";
import movieItemReducer from "./Features/Movies/moviesItemSlice";
import actorsReducer from "./Features/Movies/actorsSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieItem: movieItemReducer,
        actors: actorsReducer,
    },
});

export default store;
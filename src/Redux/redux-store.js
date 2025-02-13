import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Features/Movies/moviesSlice";
import movieItemReducer from "./Features/Movies/moviesItemSlice";
import actorsReducer from "./Features/Movies/actorsSlice";
import tvShowsReducer from "./Features/TvShows/tvShowsSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieItem: movieItemReducer,
        actors: actorsReducer,
        tvShows: tvShowsReducer
    },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Features/Movies/moviesSlice";
import movieItemReducer from "./Features/Movies/moviesItemSlice";
import actorsReducer from "./Features/Movies/actorsSlice";
import tvShowsReducer from "./Features/TvShows/tvShowsSlice";
import tvShowsItemReducer from "./Features/TvShows/tvShowsItemSlice";
import seriesCastReducer from "./Features/TvShows/seriesCastSlice";
import scrollReducer from "./scrollSlice";
import peopleReducer from "./Features/People/peopleSlice"

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieItem: movieItemReducer,
        actors: actorsReducer,
        tvShows: tvShowsReducer,
        tvShowsItem: tvShowsItemReducer,
        seriesCast: seriesCastReducer,
        scroll: scrollReducer,
        people: peopleReducer
    },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Features/Movies/moviesSlice";
import movieItemReducer from "./Features/Movies/moviesItemSlice";
import actorsReducer from "./Features/Actors/actorsSlice";
import tvShowsReducer from "./Features/TvShows/tvShowsSlice";
import tvShowsItemReducer from "./Features/TvShows/tvShowsItemSlice";
import scrollReducer from "./scrollSlice";
import peopleReducer from "./Features/People/peopleSlice";
import trailerMovieReducer from "./Features/Movies/trailerMovieSlice"

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieItem: movieItemReducer,
        actors: actorsReducer,
        tvShows: tvShowsReducer,
        tvShowsItem: tvShowsItemReducer,
        scroll: scrollReducer,
        people: peopleReducer,
        trailerModal: trailerMovieReducer
    },
});

export default store;
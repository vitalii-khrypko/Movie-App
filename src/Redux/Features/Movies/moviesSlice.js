import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async ({ category, page }) => {
        const response = await fetch(`${BASE_URL}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`);
        const data = await response.json();
        return { movies: data.results, page };
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState: { movies: [], status: "idle", error: null, category: "now_playing", page: 1 },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            state.movies = []; // Clear movies when changing categories
            state.page = 1; // Start from the first page.
        },
        loadMore: (state) => {
            state.page += 1; // Increase page number
        },
        resetMovies: (state) => {
            state.movies = [];
            state.status = "idle";
            state.error = null;
            state.page = 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "succeeded";

                const uniqueMovie = action.payload.movies.filter(
                    (newMovie) => !state.movies.some((existingMovie) => existingMovie.id === newMovie.id)
                );

                if (action.payload.page === 1) {
                    state.movies = uniqueMovie;
                } else {
                    state.movies = [...state.movies, ...uniqueMovie];
                }
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setCategory, loadMore, resetMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

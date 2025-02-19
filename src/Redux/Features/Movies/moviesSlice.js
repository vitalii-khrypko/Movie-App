import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (category = "now_playing") => {
        const response = await fetch(`${BASE_URL}/${category}?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        return data.results;
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState: { movies: [], status: "idle", error: null, category: "now_playing" },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setCategory } = moviesSlice.actions;
export default moviesSlice.reducer;

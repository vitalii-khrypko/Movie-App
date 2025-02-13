import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchMovieById = createAsyncThunk("movieItem/fetchMovieById", async (id) => {
    const response = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
});

export const fetchMovieCredits = createAsyncThunk("movieItem/fetchMovieCredits", async (id) => {
    const response = await fetch(`${BASE_URL}/${id}/credits?api_key=${API_KEY}`);
    const data = await response.json();
    return data.cast.slice(0, 10); // Беремо 10 головних акторів
});

const movieItemSlice = createSlice({
    name: "movieItem",
    initialState: {
        movie: null,
        cast: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.movie = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchMovieCredits.fulfilled, (state, action) => {
                state.cast = action.payload;
            });
    }
});

export default movieItemSlice.reducer;

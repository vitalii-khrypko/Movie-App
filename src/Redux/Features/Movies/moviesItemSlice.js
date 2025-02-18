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

export const fetchMovieTrailer = createAsyncThunk("movieItem/fetchMovieTrailer", async (id) => {
    const response = await fetch(`${BASE_URL}/${id}/videos?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    const trailers = data.results.filter(video => video.type === "Trailer");
    return trailers;
});


const movieItemSlice = createSlice({
    name: "movieItem",
    initialState: {
        movie: null,
        cast: [],
        trailer: null,
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
            })
            .addCase(fetchMovieTrailer.fulfilled, (state, action) => {
                state.trailer = action.payload;
            });
    }
});

export default movieItemSlice.reducer;

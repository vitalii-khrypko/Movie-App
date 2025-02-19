import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/tv";

export const fetchTvShowById = createAsyncThunk("tvShowsItem/fetchTvShowById", async (id) => {
    const response = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
});

export const fetchTvShowCredits = createAsyncThunk("tvShowsItem/fetchTvShowCredits", async (id) => {
    const response = await fetch(`${BASE_URL}/${id}/credits?api_key=${API_KEY}`);
    const data = await response.json();
    return data.cast.slice(0, 10);
});

export const fetchTvShowTrailer = createAsyncThunk("tvShowsItem/fetchTvShowTrailer", async (id) => {
    const response = await fetch(`${BASE_URL}/${id}/videos?api_key=${API_KEY}&language=en-US`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const trailers = data.results.filter(video => video.type === "Trailer");
    return trailers;
});

const tvShowsItemSlice = createSlice({
    name: "tvShowsItem",
    initialState: {
        tvShow: null,
        cast: [],
        trailer: null,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTvShowById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTvShowById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.tvShow = action.payload;
            })
            .addCase(fetchTvShowById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchTvShowCredits.fulfilled, (state, action) => {
                state.cast = action.payload;
            })
            .addCase(fetchTvShowTrailer.fulfilled, (state, action) => {
                state.trailer = action.payload;
            });
    }
});

export default tvShowsItemSlice.reducer;

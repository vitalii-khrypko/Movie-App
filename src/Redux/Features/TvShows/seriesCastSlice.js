import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/person";

export const fetchSeriesActorById = createAsyncThunk(
    "seriesCast/fetchSeriesActorById",
    async (actorId) => {
        const response = await fetch(`${BASE_URL}/${actorId}?api_key=${API_KEY}&append_to_response=tv_credits`);
        if (!response.ok) throw new Error("Failed to fetch actor data");
        const data = await response.json();
        return data;
    }
);

const seriesCastSlice = createSlice({
    name: "seriesCast",
    initialState: {
        actor: null,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSeriesActorById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSeriesActorById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.actor = action.payload;
            })
            .addCase(fetchSeriesActorById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default seriesCastSlice.reducer;
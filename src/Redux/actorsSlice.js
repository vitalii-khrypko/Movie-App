import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/person";

export const fetchActorById = createAsyncThunk(
    "actors/fetchActorById",
    async (actorId) => {
        const response = await fetch(`${BASE_URL}/${actorId}?api_key=${API_KEY}&append_to_response=movie_credits`);
        if (!response.ok) throw new Error("Failed to fetch actor data");
        const data = await response.json();
        return data;
    }
);

const actorsSlice = createSlice({
    name: "actors",
    initialState: {
        actor: null,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActorById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchActorById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.actor = action.payload;
            })
            .addCase(fetchActorById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default actorsSlice.reducer;
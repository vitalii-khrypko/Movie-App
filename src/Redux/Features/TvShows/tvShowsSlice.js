import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/tv";

export const fetchTvShows = createAsyncThunk(
    "tvShows/fetchTvShows",
    async (category = "popular") => {
        const response = await fetch(`${BASE_URL}/${category}?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        return data.results;
    }
);

const tvShowsSlice = createSlice({
    name: "tvShows",
    initialState: { tvShows: [], status: "idle", error: null, category: "popular" },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTvShows.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTvShows.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.tvShows = action.payload;
            })
            .addCase(fetchTvShows.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setCategory } = tvShowsSlice.actions;
export default tvShowsSlice.reducer;

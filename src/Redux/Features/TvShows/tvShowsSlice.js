import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/tv";

export const fetchTvShows = createAsyncThunk(
    "tvShows/fetchTvShows",
    async ({ category, page }) => { // destructure object
        const response = await fetch(`${BASE_URL}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`);
        const data = await response.json();
        return { tvShows: data.results, page };
    }
);

const tvShowsSlice = createSlice({
    name: "tvShows",
    initialState: { tvShows: [], status: "idle", error: null, category: "popular", page: 1 },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            state.tvShows = [];
            state.page = 1;
        },
        loadMore: (state) => {
            state.page += 1;
        },
        resetTvShows: (state) => {
            state.tvShows = [];
            state.status = "idle";
            state.error = null;
            state.page = 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTvShows.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTvShows.fulfilled, (state, action) => {
                state.status = "succeeded";

                const uniqueShows = action.payload.tvShows.filter(
                    (newShow) => !state.tvShows.some((existingShow) => existingShow.id === newShow.id)
                );

                if (action.payload.page === 1) {
                    state.tvShows = uniqueShows;
                } else {
                    state.tvShows = [...state.tvShows, ...uniqueShows];
                }
            })
            .addCase(fetchTvShows.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setCategory, loadMore, resetTvShows } = tvShowsSlice.actions;
export default tvShowsSlice.reducer;

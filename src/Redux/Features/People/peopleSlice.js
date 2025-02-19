import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/person/popular";

export const fetchPeople = createAsyncThunk(
    "people/fetchPeople",
    async () => {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        return data.results;
    }
);

const peopleSlice = createSlice({
    name: "people",
    initialState: { people: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPeople.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPeople.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.people = action.payload;
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default peopleSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "466a3191920711785d3d0265531db629";
const BASE_URL = "https://api.themoviedb.org/3/person/popular";

export const fetchPeople = createAsyncThunk(
    "people/fetchPeople",
    async ({ category, page }) => {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page}`);
        const data = await response.json();
        return { people: data.results, page };
    }
);

const peopleSlice = createSlice({
    name: "people",
    initialState: { people: [], status: "idle", error: null, page: 1 },
    reducers: {
        loadMore: (state) => {
            state.page += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPeople.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPeople.fulfilled, (state, action) => {
                state.status = "succeeded";
                if (action.payload.page === 1) {
                    state.people = action.payload.people;
                } else {
                    state.people = [...state.people, ...action.payload.people];
                }
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { loadMore } = peopleSlice.actions;
export default peopleSlice.reducer;
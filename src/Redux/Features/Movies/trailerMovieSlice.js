import { createSlice } from "@reduxjs/toolkit";

const trailerMovieSlice = createSlice({
    name: "trailerModal",
    initialState: {
        isOpen: false,
    },
    reducers: {
        openTrailerModal: (state) => {
            state.isOpen = true;
        },
        closeTrailerModal: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openTrailerModal, closeTrailerModal } = trailerMovieSlice.actions;
export default trailerMovieSlice.reducer;

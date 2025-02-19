import { createSlice } from "@reduxjs/toolkit";

const trailerModalSlice = createSlice({
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

export const { openTrailerModal, closeTrailerModal } = trailerModalSlice.actions;
export default trailerModalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
    name: "scroll",
    initialState: { section: null },
    reducers: {
        setSection: (state, action) => {
            state.section = action.payload;
        },
    },
});

export const { setSection } = scrollSlice.actions;
export default scrollSlice.reducer;

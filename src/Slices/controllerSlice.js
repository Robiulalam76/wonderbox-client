import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openProfileDrawer: false,
};

export const controllerSlice = createSlice({
    name: "controllerSlice",
    initialState,
    reducers: {
        setOpenProfileDrawer: (state, action) => {
            state.openProfileDrawer = action.payload;
        },
    },
});

export const {
    setOpenProfileDrawer,
} = controllerSlice.actions;
export default controllerSlice.reducer;

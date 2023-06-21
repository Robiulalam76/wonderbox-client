import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openProfileDrawer: false,
  openDashboardDrawer: false,
  openWishlistDrawer: false,
  openAddCartDrawer: false,
  addCartProducts: [],
  wishlistProducts: [],
  selectedAddress: null,
};

export const controllerSlice = createSlice({
  name: "controllerSlice",
  initialState,
  reducers: {
    setOpenProfileDrawer: (state, action) => {
      state.openProfileDrawer = action.payload;
    },
    setOpenDashboardDrawer: (state, action) => {
      state.openDashboardDrawer = action.payload;
    },
    setOpenWishlistDrawer: (state, action) => {
      state.openWishlistDrawer = action.payload;
    },
    setOpenAddCartDrawer: (state, action) => {
      state.openAddCartDrawer = action.payload;
    },
    setAddCartProducts: (state, action) => {
      state.addCartProducts = action.payload;
    },
    setWishlistProducts: (state, action) => {
      state.wishlistProducts = action.payload;
    },
    setSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
  },
});

export const {
  setOpenProfileDrawer,
  setOpenDashboardDrawer,
  setOpenWishlistDrawer,
  setOpenAddCartDrawer,
  setAddCartProducts,
  setWishlistProducts,
  setSelectedAddress,
} = controllerSlice.actions;
export default controllerSlice.reducer;

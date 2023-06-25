import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  buyProducts: [],
  cards: [],
  totalPrice: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setBuyProducts: (state, action) => {
      state.buyProducts = action.payload;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { setImage, setBuyProducts, setCards, setTotalPrice } =
  productSlice.actions;
export default productSlice.reducer;

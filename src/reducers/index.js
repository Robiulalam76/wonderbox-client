import { combineReducers } from "@reduxjs/toolkit";
import controllerSlice from "../Slices/controllerSlice";

const rootReducer = combineReducers({
  controllerSlice: controllerSlice,
});

export default rootReducer;

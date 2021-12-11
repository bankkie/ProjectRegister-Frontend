import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/reducers";

export default configureStore({
  reducer: {
    users: userReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../components/templates/contacts/ContactSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export default store;

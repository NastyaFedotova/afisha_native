import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./eventSlice";
import { ticketReducer } from "./ticketSlice";
import { userReducer } from "./userSlice";

export const store = configureStore({
  reducer: { event: eventReducer, ticket: ticketReducer, user: userReducer },
});

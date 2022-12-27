import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticket: [],
};

export const ticketSlice = createSlice({
  name: "TICKET",
  initialState,
  reducers: {
    setTicket: (state, { payload }) => {
      state.ticket = payload;
    },
    removeTicket: (state, { payload }) => {
      state.ticket =
        state.ticket?.filter((item) => item?.id !== payload?.id) ?? [];
    },
  },
});

export const ticketReducer = ticketSlice.reducer;

export const { setTicket, removeTicket } = ticketSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventList: [],
  event:{}
};

export const eventSlice = createSlice({
  name: "EVENT",
  initialState,
  reducers: {
    setEventList: (state, { payload }) => {
      state.eventList = payload;
    },
    setEvent: (state, { payload }) => {
      state.event = payload;
    },
    removeEvent: (state, { payload }) => {
      state.eventList =
        state.eventList?.filter(
          (event) => event?.id !== payload?.event
        ) ?? [];
    }
  },
});

export const eventReducer = eventSlice.reducer;

export const { setEventList, setEvent, removeEvent } = eventSlice.actions;

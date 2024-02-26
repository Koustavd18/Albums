import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slice/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from "./thunk/fetchUser";
export * from "./thunk/addUser";
export * from "./thunk/removeUser";

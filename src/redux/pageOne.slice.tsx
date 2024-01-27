import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

type UserObj = {
  firstName: string;
  email: string;
  mobileNumber: number;
  date: string;
  gender: string;
};

interface PageOneInitialState {
  users: UserObj[];
}

const initialState: PageOneInitialState = {
  users: [],
};

export const pageOneSlice = createSlice({
  name: "pageone",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserObj>) => {
      state.users=[...state.users,action.payload];
    },
    addData: (state, action: PayloadAction<{ index: number; user: UserObj }>) => {
      const { index, user } = action.payload;
      state.users = state.users.map((existingUser, i) => (i === index ? user : existingUser));
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      const indexToDelete = action.payload;
      state.users = state.users.filter((user, index) => index !== indexToDelete);
    },
  },
});

export const { addUser,addData,deleteUser } = pageOneSlice.actions;
export default pageOneSlice.reducer;
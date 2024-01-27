import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const pageTwoSlice = createSlice({
  name: "pagetwo",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserObj>) => {
      state.users=[...state.users,action.payload];
    },
    addData: (state, action: PayloadAction<{ index: number; user: UserObj }>) => {
      const { index, user } = action.payload;
      state.users = state.users.map((existingUser, i) => (i === index ? user : existingUser));
    },
  },
});

export const { addUser,addData } = pageTwoSlice.actions;
export default pageTwoSlice.reducer;
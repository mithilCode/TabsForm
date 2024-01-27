import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userObj = {
  firstName: string;
  email: string;
  mobileNumber: number;
  gender: string;
  dob: string;
};
interface IssueInitialState {
  userData: userObj;
}
const initialState: IssueInitialState = {
  userData: {
    firstName: "",
    email: "",
    mobileNumber: Number(),
    gender: "",
    dob: "",
  },
};

export const secondUserSlice = createSlice({
  name: "seconduser",
  initialState,
  reducers: {
    addSecondUser: (state, action: PayloadAction<userObj>) => {
      state.userData = { ...action.payload };
    },
  },
});

export const { addSecondUser } = secondUserSlice.actions;
export default secondUserSlice.reducer;

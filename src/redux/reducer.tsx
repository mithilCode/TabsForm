import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userObj = {
  firstName: string;
  email: string;
  mobileNumber: number;
  gender: string;
};
interface IssueInitialState {
  userData: userObj;
}
const initialState: IssueInitialState = {
  userData: { firstName: "", email: "", mobileNumber: Number(), gender: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<userObj>) => {
      state.userData = { ...action.payload };
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

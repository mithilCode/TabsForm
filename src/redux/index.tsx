import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import SecondUser from "./secondUser";
import pageOne from "./pageOne.slice";
import pageTwo from "./pageTwo.slice";
export const store = configureStore({
  reducer: {
    user: Reducer,
    seconduser: SecondUser,
    pageone: pageOne,
    pagetwo: pageTwo,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

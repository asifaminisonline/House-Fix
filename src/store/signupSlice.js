// signupSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  user: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    signupSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
    },
    signupFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const signup = (userData) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    // Perform API call or any asynchronous operation to sign up the user
    // Once the user is signed up, dispatch signupSuccess action with user data
    dispatch(signupSuccess(userData));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};

export const { signupRequest, signupSuccess, signupFailure } =
  signupSlice.actions;
export default signupSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setUser, userLogout } from "./userSlice";
import { checkAuthToken } from "../lib/checkAuthToken";
import Axios from "../lib/Axios";

export const authLogout = createAsyncThunk(
  "auth/authLogout",
  async (_, thunkAPI) => {
    localStorage.removeItem("jwtToken");
    thunkAPI.dispatch(userLogout());
  }
);

export const authCheck = createAsyncThunk(
  "auth/authCheck",
  async (_, thunkAPI) => {
    try {
      checkAuthToken();
      const response = await Axios.post("/users/authtoken");

      //thunkAPI to set user
      thunkAPI.dispatch(setUser(response.data));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    authSuccess: (state) => {
      state.isAuth = true;
    },
    authFailure: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogout.fulfilled, (state) => {
        state.isAuth = false;
      })
      .addCase(authCheck.fulfilled, (state) => {
        state.isAuth = true;
      })
      .addCase(authCheck.rejected, (state, action) => {
        state.isAuth = false;
        console.log(action.payload);
      });
  },
});

export const { authSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;

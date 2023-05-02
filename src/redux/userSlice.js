import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../lib/Axios";
import { authSuccess } from "./authSlice";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userData, thunkAPI) => {
    try {
      let response = await Axios.post("/users/login", userData);
      //remember me button checked
      //isRemember && localStorage.setItem("jwtToken", response.data.token);

      //set token in local storage
      localStorage.setItem("jwtToken", response.data.token);

      //dispatch authSlice- authSuccess
      thunkAPI.dispatch(authSuccess());
      return {
        user: response.data.userObj,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    let response = await Axios.post("/users/register", userData);
    return {
      user: response.data.userObj,
    };
  }
);

export const orderIMG = createAsyncThunk("user/orderIMG", async (userOrder) => {
  let response = await Axios.post("/users/order-images", userOrder);
  console.log(response.data.userObj.orders);
  return {
    orders: response.data.userObj.orders,
  };
});

const initialState = {
  username: "",
  name: "",
  email: "",
  password: "",
  status: null,
  message: "",
  orders: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLogout: (state) => {
      return initialState;
    },
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.username = action.payload.user.username;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.status = "fulfilled";
        state.message = "";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.payload.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {})
      .addCase(orderIMG.fulfilled, (state, action) => {
        console.log(action.payload.orders);
        state.orders = action.payload.orders
      });
  },
});

export const { userLogout, setUser } = userSlice.actions;

export default userSlice.reducer;

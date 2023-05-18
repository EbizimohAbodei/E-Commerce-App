import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios, { AxiosError } from "axios";
import { User } from "../../types/User";
import { toast } from "react-toastify";

interface Token {
  access_token: string;
  refresh_token: string;
}

interface UserDetails {
  isLoggedin: boolean;
  user: User;
  users: User[];
}
const initialState: UserDetails = {
  isLoggedin: false,
  user: { name: "", avatar: "", email: "", password: "", role: "" },
  users: [],
};

export const createUser = createAsyncThunk("createUser", async (data: User) => {
  try {
    const result = await axios.post<User>(
      "https://api.escuelajs.co/api/v1/users",
      data
    );
    if (result.status === 201) {
      toast.success("signup successfull");
    }

    return result.data; // returned result would be inside action.payload
  } catch (e) {
    const error = e as AxiosError;
    if (error.request) {
      console.log("error in request: ", error.request);
    } else {
      console.log(error.response?.data);
    }
  }
});

export const userAuth = createAsyncThunk("userAuth", async (data: any) => {
  try {
    const result = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      data
    );
    return result.data; // returned result would be inside action.payload
  } catch (e) {
    const error = e as AxiosError;
    if (error.request) {
      console.log("error in request: ", error.request);
    } else {
      console.log(error.response?.data);
    }
  }
});

export const getUser = createAsyncThunk("getUser", async () => {
  const token = localStorage.getItem("tokens") as string;
  try {
    const result = await axios.get<User>(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token).access_token}`,
        },
      }
    );
    if (result.status === 201) {
      toast.success("signup successfull");
    }

    return result.data; // returned result would be inside action.payload
  } catch (e) {
    const error = e as AxiosError;
    if (error.request) {
      console.log("error in request: ", error.request);
    } else {
      console.log(error.response?.data);
    }
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(createUser.fulfilled, (state, action) => {
        if (action.payload) {
        }
      })
      .addCase(userAuth.fulfilled, (state, action) => {
        if (action.payload) {
          toast.success("login success");
          state.isLoggedin = true;
          localStorage.setItem("tokens", JSON.stringify(action.payload));
        }
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload as any;
      });
  },
});

const userReducers = userSlice.reducer;
export default userReducers;

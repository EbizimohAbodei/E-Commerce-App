import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../types/Products";
import axios, { AxiosError } from "axios";
import { User } from "../../types/User";


const initialState: User|any = {}


export const createUser = createAsyncThunk("createUser", async (data:User) => {
  try {
    const result = await axios.post<User>(
        "https://api.escuelajs.co/api/v1/users",
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


export const userAuth = createAsyncThunk("userAuth", async (data) => {
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

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(createUser.fulfilled, (state, action) => {
             if (action.payload) {
                return action?.payload;
             }
        }).addCase(userAuth.fulfilled, (state, action) => {
          if (action.payload) {
            return action.payload
          }
        })
    }
})

const userReducers = userSlice.reducer
export default userReducers
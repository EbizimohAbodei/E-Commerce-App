import {PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Product } from "../../types/Products";
import axios, {AxiosError} from "axios";




export const fetchAllProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const result = await axios.get<Product[]>(
      "https://api.escuelajs.co/api/v1/products"
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


export const fetchSingleProduct = createAsyncThunk('getSingleProduct', async (id:string) => {
  try {
     const result = await axios.get<Product>(
       "https://api.escuelajs.co/api/v1/products/"+id
     );

     return [result.data];
  } catch (e) {
    const error = e as AxiosError;
    if (error.request) {
      console.log("error in request: ", error.request);
    } else {
      console.log(error.response?.data);
    }
  }
})
const initialState: Product[] = [];

/* createSlice() returns 1 object {
    reducer, action, ...
} */
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  


    }, // list of methods to modify the state
    extraReducers: (build) => {
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {
          if (action.payload) {
         
              
             return action.payload
         }
        }).addCase(fetchSingleProduct.fulfilled, (state, action) => {
          if (action.payload) {
         return action.payload 
       }
     } ) 
  }
});

//productReducer: current state
const productsReducer = productsSlice.reducer;
// export const {} =  productsSlice.actions
export default productsReducer;

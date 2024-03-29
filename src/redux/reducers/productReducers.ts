import { createSlice, createAsyncThunk, Reducer } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

import { Product, Filter } from "../../types/Products";

export const fetchAllProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const result = await axios.get<Product[]>(
      "https://api.escuelajs.co/api/v1/products"
    );

    return result.data; // returned result would be inside action.payload
  } catch (e) {
    const error = e as AxiosError | any;
    if (error.request) {
      toast.error(error.response?.data?.message);
      console.log("error in request: ", error.request);
    } else {
      console.log(error.response?.data);
    }
  }
});

export const fetchProductsByTitle = createAsyncThunk(
  "fetchProductByTitle",
  async (title: string) => {
    try {
      const result = await axios.get<Product[]>(
        "https://api.escuelajs.co/api/v1/products/?title=" + title
      );

      return result.data; // returned result would be inside action.payload
    } catch (e) {
      const error = e as AxiosError | any;
      if (error.request) {
        toast.error(error.response?.data?.message);
        console.log("error in request: ", error.request);
      } else {
        console.log(error.response?.data);
      }
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (id: string) => {
    try {
      const result = await axios.get<Product>(
        "https://api.escuelajs.co/api/v1/products/" + id
      );

      return result.data;
    } catch (e) {
      console.log(e);

      const error = e as AxiosError | any;
      if (error.request) {
        toast.error(error.response?.data?.message);
        console.log("error in request: ", error.request);
      } else {
        console.log(error.response?.data);
      }
    }
  }
);

export const fetchProductByCategory = createAsyncThunk(
  "getProductByCategory",
  async (id: string) => {
    try {
      const result = await axios.get<Product[]>(
        "https://api.escuelajs.co/api/v1/products/?categoryId=" + id
      );

      return result.data;
    } catch (e) {
      console.log(e);
      const error = e as AxiosError | any;
      if (error.request) {
        toast.error(error.response?.data?.message);
        console.log("error in request: ", error.request);
      } else {
        console.log(error.response?.data);
      }
    }
  }
);

export const fetchProductByJointFilter = createAsyncThunk(
  "getProductByJointFilter",
  async (data: Filter) => {
    try {
      const result = await axios.get<Product[]>(
        `https://api.escuelajs.co/api/v1/products/?categoryId=${data.categoryId}&price_min=${data.price_min}&price_max=${data.price_max}&title=${data.title}`
      );
      return result.data;
    } catch (e) {
      console.log(e);

      const error = e as AxiosError | any;
      if (error.request) {
        toast.error(error.response?.data?.message);
        console.log("error in request: ", error.request);
      } else {
        console.log(error.response?.data);
      }
    }
  }
);

export const createNewProduct = createAsyncThunk(
  "createNewProduct",
  async (data: Product) => {
    try {
      const result = await axios.post<Product>(
        "https://api.escuelajs.co/api/v1/products",
        data
      );
      return result.data; // returned result would be inside action.payload
    } catch (e) {
      const error = e as AxiosError | any;
      if (error.request) {
        toast.error(error.response?.data?.message);
        console.log("error in request: ", error.response);
      } else {
        console.log(error.response?.data);
      }
    }
  }
);

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (data: any) => {
    try {
      const result = await axios.put(
        `https://api.escuelajs.co/api/v1/products/${data.id}`,
        data
      );
      return result.data; // returned result would be inside action.payload
    } catch (e) {
      const error = e as AxiosError | any;
      if (error.request) {
        toast.error(error.response?.data?.message);
        console.log("error in request: ", error.request);
      } else {
        console.log(error.response?.data);
      }
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (id: string) => {
    try {
      const result = await axios.delete(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      console.log("res", result);
      return result.data; // returned result would be inside action.payload
    } catch (e) {
      const error = e as AxiosError | any;
      if (error.request) {
        toast.error(error.response?.data?.message);
        // console.log("error in request: ", error.request);
      } else {
        console.log(error.response?.data);
      }
    }
  }
);

interface Products {
  products: Product[];
  product: Product | null;
}

const initialState: Products = {
  product: {
    id: 0,
    category: { id: 0, name: "", image: "" },
    description: "",
    images: [],
    price: 0,
    title: "",
  },
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProductsByCategory: (state) => {
      const sorted = [...state.products].sort(
        (a, b) => a.category.id - b.category.id
      );

      state.products = sorted;
    },

    sortProductsByPrice: (state) => {
      const sorted = [...state.products].sort((a, b) => a.price - b.price);

      state.products = sorted;
    },

    filterProduct: (state, action) => {
      const foundItems = state.products.filter((p) =>
        p.title.toLowerCase().includes(action.payload)
      );
      if (foundItems.length > 0) {
        state.products = foundItems;
      } else {
      }
    },

    emptyProducts: (state) => {
      state.products = [];
    },
  },
  extraReducers: (build) => {
    build
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload.sort((a, b) => a.price - b.price);
          return;
        }
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        if (action.payload) {
          state.product = action.payload;
        }
      })

      .addCase(createNewProduct.fulfilled, (state, action) => {
        if (action.payload) {
          toast.success("product created successfully");
          state.products.push(action.payload);
        }
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        if (action.payload) {
          toast.success("product updated");

          const foundIndex = state.products.findIndex(
            (p) => p.id === action.payload.id
          );

          state.products[foundIndex] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        if (action.payload) {
          toast.success("product deleted");
          window.location.href = "/admin";
        }
      })
      .addCase(fetchProductByCategory.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
          return;
        }
      })
      .addCase(fetchProductByJointFilter.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
        }
      })
      .addCase(fetchProductsByTitle.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
        }
      });
  },
});

//productReducer: current state
const productsReducer = productsSlice.reducer as Reducer<Products>;
export const {
  sortProductsByCategory,
  sortProductsByPrice,
  filterProduct,
  emptyProducts,
} = productsSlice.actions;
export default productsReducer;

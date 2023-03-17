import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  data: [],
}

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products")

  return data
})

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

export default productSlice.reducer

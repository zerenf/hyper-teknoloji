import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const { data } = await axios.get("https://fakestoreapi.com/products")
	console.log("data:", data)
	return data
})

const initialState = {
	products: [],
	status: "idle",
	error: null,
}

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = "loading"
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.products = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.error.message
			})
	},
})

export default productSlice.reducer

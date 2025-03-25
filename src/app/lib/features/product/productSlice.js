import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const { data } = await axios.post(
		"https://api.hyperteknoloji.com.tr/Products/List",
		{},
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
				Accept: "application/json",
			},
		}
	)
	const limitedData = data.data.slice(0, 20)

	return limitedData
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

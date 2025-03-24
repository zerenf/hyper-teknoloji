import { createSlice } from "@reduxjs/toolkit"

const getCartFromStorage = () => {
	if (typeof window !== "undefined") {
		const storedCart = localStorage.getItem("cart")
		return storedCart ? JSON.parse(storedCart) : []
	}
	return []
}

const initialState = {
	cartItemsList: getCartFromStorage(),
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCard: (state, action) => {
			if (!state.cartItemsList.includes(action.payload)) {
				state.cartItemsList.push(action.payload)
				localStorage.setItem("cart", JSON.stringify(state.cartItemsList))
			}
		},
		removeItemFromCart: (state, action) => {
			state.cartItemsList = state.cartItemsList.filter((id) => id !== action.payload)
			localStorage.setItem("cart", JSON.stringify(state.cartItemsList))
		},
	},
})

export const { addItemToCard, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer

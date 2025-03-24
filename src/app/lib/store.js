import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./features/product/productSlice"
import favoriteReducer from "./features/favorites/favoriteSlice"
import cartItemReducer from "./features/cart/cartSlice"

export const store = configureStore({
	reducer: {
		products: productReducer,
		favorites: favoriteReducer,
		cart: cartItemReducer,
	},
})

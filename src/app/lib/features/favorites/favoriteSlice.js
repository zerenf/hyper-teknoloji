import { createSlice } from "@reduxjs/toolkit"

const getFavoritesFromStorage = () => {
	if (typeof window !== "undefined") {
		const storedFavorites = localStorage.getItem("favorites")
		return storedFavorites ? JSON.parse(storedFavorites) : []
	}
	return []
}

const initialState = {
	favoriteItemsList: getFavoritesFromStorage(),
}

const favoriteSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addToFavoriteList: (state, action) => {
			if (!state.favoriteItemsList.includes(action.payload)) {
				state.favoriteItemsList.push(action.payload)
				localStorage.setItem("favorites", JSON.stringify(state.favoriteItemsList))
			}
		},
		removeFromFavoriteList: (state, action) => {
			state.favoriteItemsList = state.favoriteItemsList.filter((id) => id !== action.payload)
			localStorage.setItem("favorites", JSON.stringify(state.favoriteItemsList))
		},
	},
})

export const { addToFavoriteList, removeFromFavoriteList } = favoriteSlice.actions
export default favoriteSlice.reducer

import Image from "next/image"
import React from "react"
import image from "../../../assets/images/1.jpg"
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa6"
import { FaCheckCircle } from "react-icons/fa"

import { useDispatch, useSelector } from "react-redux"
import { addToFavoriteList, removeFromFavoriteList } from "@/app/lib/features/favorites/favoriteSlice"
import { addItemToCard, removeItemFromCart } from "@/app/lib/features/cart/cartSlice"

const Card = ({ product }) => {
	const dispatch = useDispatch()

	const favoriteItemsList = useSelector((state) => state.favorites.favoriteItemsList)
	const cartItemsList = useSelector((state) => state.cart.cartItemsList)

	const isFavorite = favoriteItemsList.includes(product.productID)
	const isInCart = cartItemsList.includes(product.productID)

	const toggleFavorite = (id) => {
		if (favoriteItemsList.includes(id)) {
			dispatch(removeFromFavoriteList(id))
		} else {
			dispatch(addToFavoriteList(id))
		}
	}

	const toggleCart = (id) => {
		if (cartItemsList.includes(id)) {
			dispatch(removeItemFromCart(id))
		} else {
			dispatch(addItemToCard(id))
		}
	}

	return (
		<div className="w-[300px] h-[360px] customShadow rounded-lg overflow-hidden relative m-5">
			<div className="w-[300px] h-[180px] relative overflow-hidden">
				<Image src={product.productData.productMainImage} fill className="object-cover" alt={`product.productName`} />
				<div className="absolute right-1 top-1">
					<p className="text-[11px] px-2 py-1 bg-blue-700 text-white inline-block rounded-2xl">İndirim</p>
				</div>
			</div>
			<div className="m-3">
				<div className="flex justify-between">
					<div>{product.productName}</div>
					<div className="font-bold">{product.marketPrice}$</div>
				</div>
				<div className="flex">
					{[...Array(5)].map((_, i) => (
						<FaStar key={i} className="text-yellow-500" />
					))}
				</div>
				<div className="my-2">
					<p className="text-[14px] line-clamp-3">{product.productData.productInfo}</p>
				</div>
			</div>
			<div className="w-full flex justify-center items-center absolute bottom-2">
				<div
					className={`w-3/5  ${
						isInCart ? "bg-blue-900" : "bg-blue-950"
					} hover:bg-blue-900 px-2 py-1 rounded-sm text-white text-center cursor-pointer mr-3 flex justify-center items-center`}
					onClick={() => toggleCart(product.productID)}
				>
					{isInCart ? (
						<>
							Sepete Eklendi <FaCheckCircle className="ml-2" />
						</>
					) : (
						"Sepete Ekle"
					)}
				</div>
				<div className="cursor-pointer" onClick={() => toggleFavorite(product.productID)}>
					{isFavorite ? <FaHeart size={24} fill="red" /> : <FaRegHeart size={24} />}
				</div>
			</div>
		</div>
	)
}

export default Card

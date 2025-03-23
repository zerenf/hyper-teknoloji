"use client"

import { fetchProducts } from "./lib/features/product/productSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from "./components/Card/Card"

export default function Home() {
	const dispatch = useDispatch()
	const { products, status, error } = useSelector((state) => state.products)

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchProducts())
		}
	}, [status, dispatch])

	if (status === "loading") return <p>Yükleniyor</p>
	if (status === "failed") return <p>{error}</p>

	if (products) {
		console.log("data:", products)
	}

	return (
		<>
			<div className="w-screen p-10">
				<div className="flex justify-center items-center flex-wrap gap-10">
					{products && products.map((product) => <Card product={product} key={product.id} />)}
				</div>
			</div>
		</>
	)
}

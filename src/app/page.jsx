"use client"

import { fetchProducts } from "./lib/features/product/productSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from "./components/Card/Card"
import Loading from "./loading"

export default function Home() {
	const dispatch = useDispatch()
	const { products, status, error } = useSelector((state) => state.products)

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchProducts())
		}
	}, [status, dispatch])

	if (status === "loading") return <Loading />
	if (status === "failed") return <p>{error}</p>

	return (
		<>
			<div className="w-screen p-3 sm:p-10 ">
				<div className="flex justify-center items-center flex-wrap">
					{products && products.map((product) => <Card product={product} key={product.productID} />)}
				</div>
			</div>
		</>
	)
}

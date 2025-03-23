import Image from "next/image"
import React from "react"
import image from "../../../assets/images/1.jpg"
import { FaStar } from "react-icons/fa6"

const Card = ({ product }) => {
	return (
		<div className="w-[300px] h-[360px] border rounded-lg overflow-hidden relative">
			<div className="w-[300px] h-[180px] relative overflow-hidden">
				<Image src={product.image} fill className="object-cover " alt={product.name} />
				<div className="absolute right-1 top-1">
					<p className="text-[11px] px-2 py-1 bg-blue-700 text-white inline-block rounded-2xl">İndirim</p>
				</div>
			</div>
			<div className="m-3">
				<div className="flex justify-between">
					<div>{product.name}</div>
					<div>{product.price}$</div>
				</div>
				<div className="flex">
					{[...Array(5)].map((_, i) => (
						<FaStar key={i} className="text-yellow-500" />
					))}
				</div>
				<div className="my-2">
					<p className="text-[14px] line-clamp-3">{product.description}</p>
				</div>
			</div>
			<div className="w-full flex justify-center items-center absolute bottom-2">
				<div className="w-3/5 bg-blue-950 hover:bg-blue-900 px-2 py-1 rounded-sm text-white text-center cursor-pointer ">Sepete Ekle</div>
			</div>
		</div>
	)
}

export default Card

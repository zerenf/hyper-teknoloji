"use client"

import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import logo from "../../../assets/images/hyper-logo.webp"
import Image from "next/image"
import { FaHeart } from "react-icons/fa6"
import Link from "next/link"
import { useSelector } from "react-redux"

const Navbar = () => {
	const cartItemsList = useSelector((state) => state.cart.cartItemsList)
	const favoriteItemsList = useSelector((state) => state.favorites.favoriteItemsList)

	return (
		<>
			<div className="w-screen h-[90px] bg-blue-950 flex justify-center items-center sticky top-0 z-10">
				<nav className="w-[95%] h-[85%] bg-slate-200 px-4 rounded-lg flex justify-between items-center">
					<div>
						<Link href={"/"}>
							<Image src={logo} width={100} className="object-cover" alt="logo" />
						</Link>
					</div>
					<div className=" cursor-pointer flex item-center gap-x-3">
						<Link href={"/favorite-list"}>
							<div className="relative">
								<FaHeart size={28} fill="red" />
								<div className="w-5 h-5 bg-blue-900 rounded-full flex justify-center items-center text-white font-bold absolute -top-2 -left-3">
									<span>{favoriteItemsList?.length}</span>
								</div>
							</div>
						</Link>
						<Link href={"/cart"}>
							<div className="relative">
								<FaShoppingCart size={30} color="#162456 " />
								<div className="w-5 h-5 bg-red-500 rounded-full flex justify-center items-center text-white font-bold absolute -top-2 -right-3">
									{cartItemsList?.length}
								</div>
							</div>
						</Link>
					</div>
				</nav>
			</div>
		</>
	)
}

export default Navbar

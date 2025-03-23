import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import logo from "../../../assets/images/hyper-logo.webp"
import Image from "next/image"

const Navbar = () => {
	return (
		<>
			<div className="w-screen h-[90px] bg-blue-950 flex justify-center items-center sticky top-0 z-10">
				<nav className="w-[95%] h-[85%] bg-slate-200 px-4 rounded-lg flex justify-between items-center">
					<div>
						<Image src={logo} width={100} className="object-cover " alt="logo" />
					</div>
					<div className="inline-block cursor-pointer">
						<FaShoppingCart size={30} color="#162456 " />
					</div>
				</nav>
			</div>
		</>
	)
}

export default Navbar

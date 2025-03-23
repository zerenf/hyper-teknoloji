import Navbar from "./components/Navbar/Navbar"
import "./globals.css"
import StoreProvider from "./StoreProvider"

export const metadata = {
	title: "Hyper Teknoloji",
	description: "Hyper Teknoloji Case",
}

export default function RootLayout({ children }) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className={` vsc-initialized`}>
					<Navbar />
					{children}
				</body>
			</html>
		</StoreProvider>
	)
}

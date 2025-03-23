import "./globals.css"

export const metadata = {
	title: "Hyper Teknoloji",
	description: "Hyper Teknoloji Case",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={` vsc-initialized`}>{children}</body>
		</html>
	)
}

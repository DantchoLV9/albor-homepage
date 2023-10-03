import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Homepage | Albor",
	description: "The online canvas where pixels and passions colide.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${nunitoSans.className} min-h-screen flex flex-col`}>
				<ThemeProvider>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}

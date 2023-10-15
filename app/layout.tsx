import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
	title: "CoverMe - Your job application companion",
	description:
		"CoverMe helps you apply to jobs by aggregating job listings and providing you with a simple way to apply to them.",
	twitter: {
		card: "summary_large_image",
		title: "CoverMe - Your job application companion",
		description:
			"Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
		creator: "@steventey",
	},
	metadataBase: new URL("https://cover-me-sigma.vercel.app/"),
	themeColor: "#FFF",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cx(sfPro.variable, inter.variable)}>
				<div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
				<Suspense fallback="...">
					<Nav />
				</Suspense>
				<main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
					{children}
				</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}

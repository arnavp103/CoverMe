import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import AuthProvider from "@/lib/Providers/AuthProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
	title: "CoverMe - Your Job Application Companion",
	description:
		"CoverMe helps you apply to jobs by aggregating job listings and providing you with a simple way to apply to them.",
	twitter: {
		card: "summary_large_image",
		title: "CoverMe - Your Job Application Companion",
		description:
			"CoverMe helps you apply to jobs by aggregating job listings and providing you with a simple way to apply to them.",
		creator: "@arnavp103",
	},
	metadataBase: new URL("https://cover-me-sigma.vercel.app/"),
	themeColor: "#FFF",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	return (
		<html lang="en">
			<AuthProvider session={session}>
				<body className={cx(sfPro.variable, inter.variable)}>
					<div>{children}</div>
					<Analytics />
				</body>
			</AuthProvider>
		</html>
	);
}

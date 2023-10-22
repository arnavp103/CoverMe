import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export default async function SiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
			<Suspense fallback="...">
				<Nav />
			</Suspense>
			<main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
				{children}
			</main>
			<Footer />
		</>
	);
}

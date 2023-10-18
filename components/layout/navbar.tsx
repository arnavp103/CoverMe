"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { Button } from "@/components/Button";

export default function NavBar({ session }: { session: Session | null }) {
	const { SignInModal, setShowSignInModal } = useSignInModal();
	const scrolled = useScroll(50);

	return (
		<>
			<SignInModal />
			<div
				className={`fixed top-0 flex w-full justify-center ${
					scrolled
						? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
						: "bg-white/0"
				} z-30 transition-all`}
			>
				<div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
					<Link
						href="/"
						className="flex items-center font-display text-2xl"
					>
						<Image
							src="/CoverMe.png"
							alt="CoverMe logo"
							width="30"
							height="30"
							className="mr-2 rounded-sm"
						></Image>
						<p>CoverMe</p>
					</Link>
					<div>
						{session ? (
							<div className="flex h-full w-full items-center justify-between space-x-4">
								<Button asChild variant="ghost">
									<Link href="/jobs">Jobs 💼</Link>
								</Button>
								<UserDropdown session={session} />
							</div>
						) : (
							<Button
								variant="ghost"
								className="border-blue-500"
								onClick={() => setShowSignInModal(true)}
							>
								Sign In
							</Button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

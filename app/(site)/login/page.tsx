"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { LoadingDots, Google } from "@/components/shared/icons";

export default function Login() {
	const { status } = useSession();
	const router = useRouter();
	const pathname = usePathname();
	useEffect(() => {
		if (status === "authenticated") {
			// const url = `${pathname}`;
			// console.log(url);
			router.push("/jobs");
			router.refresh();
			return;
		}
	}, [status]);
	const [signInClicked, setSignInClicked] = useState(false);

	return (
		<div className="z-10 w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
			<div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
				<a href="https://cover-me-sigma.vercel.app/">
					<Image
						src="/logo.png"
						alt="Logo"
						className="h-10 w-10 rounded-full"
						width={20}
						height={20}
					/>
				</a>
				<h3 className="font-display text-2xl font-bold">Sign In</h3>
				<p>Welcome back to the job hunt.</p>
			</div>

			<div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
				<button
					disabled={signInClicked}
					className={`${
						signInClicked
							? "cursor-not-allowed border-gray-200 bg-gray-100"
							: "border border-gray-200 bg-white text-black hover:bg-gray-50"
					} flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
					onClick={() => {
						setSignInClicked(true);
						signIn("google");
					}}
				>
					{signInClicked ? (
						<LoadingDots color="#808080" />
					) : (
						<>
							<Google className="h-5 w-5" />
							<p>Sign In with Google</p>
						</>
					)}
				</button>
			</div>
		</div>
	);
}

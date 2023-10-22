"use client";

import { useSignInModal } from "@/components/layout/sign-in-modal";
import { useEffect } from "react";

export default function Login() {
	const { SignInModal, setShowSignInModal } = useSignInModal();
	useEffect(() => {
		setShowSignInModal(true);
	}, []);

	return (
		<div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-indigo-100 to-zinc-300"></div>
	);
}

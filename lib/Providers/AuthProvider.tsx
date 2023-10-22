"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
// define a type for component props
interface AuthProviderProps {
	children?: React.ReactNode;
	session: Session | null;
}

const AuthProvider = ({ children, session }: AuthProviderProps) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;

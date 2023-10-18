"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import Popover from "@/components/shared/popover";
import Image from "next/image";
import { Session } from "next-auth";
import { Button } from "@/components/Button";

export default function UserDropdown({ session }: { session: Session }) {
	const { email, image } = session?.user || {};
	const [openPopover, setOpenPopover] = useState(false);

	if (!email) return null;

	return (
		<div className="relative inline-block text-left">
			<Popover
				content={
					<div className="w-full rounded-md bg-white p-2 sm:w-56">
						<div className="p-2">
							{session?.user?.name && (
								<p className="truncate text-sm font-medium text-gray-900">
									{session?.user?.name}
								</p>
							)}
							<p className="truncate text-sm text-gray-500">
								{session?.user?.email}
							</p>
						</div>

						<Button
							variant="outline"
							onClick={() => signOut()}
							className="w-full"
						>
							<LogOut className="h-4 w-4" />
							<p className="text-sm">Logout</p>
						</Button>
					</div>
				}
				align="end"
				openPopover={openPopover}
				setOpenPopover={setOpenPopover}
			>
				<button
					onClick={() => setOpenPopover(!openPopover)}
					className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
				>
					<Image
						alt={email}
						src={
							image ||
							`https://avatars.dicebear.com/api/micah/${email}.svg`
						}
						width={40}
						height={40}
					/>
				</button>
			</Popover>
		</div>
	);
}

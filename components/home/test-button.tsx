"use client";
import axios from "axios";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function TestButton() {
	const echoTest = async () => {
		const resp = await axios.get(`./api/echo`);
		console.log(resp);
	};

	return (
		<Link href="./jobs">
			<button
				className="text- group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-7 py-4 text-white transition-colors hover:bg-white hover:text-black"
				onClick={echoTest}
			>
				<FileText />
				<p>Find a job for you</p>
			</button>
		</Link>
	);
}

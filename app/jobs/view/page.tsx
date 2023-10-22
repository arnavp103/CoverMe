"use client";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const JobDetails = () => {
	const searchParams = useSearchParams();

	const title = searchParams.get("title") || "No title provided.";
	const company = searchParams.get("company") || "No company provided.";
	const location = searchParams.get("location") || "No location provided.";
	const link = searchParams.get("link") || "No link provided.";
	const description =
		searchParams.get("description") || "No description provided.";

	return (
		<div className="z-10">
			<div className="ml-auto mr-auto w-2/3 bg-white px-16 shadow-xl drop-shadow-lg">
				<header className="px-8 py-6">
					<span className="text-3xl font-bold">{company}</span>
					<span className="text-xl">
						( View more Job Positions from {company} )
					</span>
				</header>
				<main className="flex min-h-screen flex-col items-start justify-start ">
					<div className="">
						<h1 className="text-2xl">
							<span className="font-bold">{title}</span>
						</h1>
					</div>
					<p className="">
						<span className="">{description}</span>
					</p>
					<div className="">
						<span className="font-bold">{location}</span>
					</div>
					<div className="inline-flex gap-2">
						<LinkIcon className="text-orange-400" />
						<Link href={link} className="text-orange-400">
							View Page
						</Link>
					</div>
					<div className="text-2xl">
						<span className="font-bold">{description}</span>
					</div>
				</main>
			</div>
		</div>
	);
};

export default JobDetails;

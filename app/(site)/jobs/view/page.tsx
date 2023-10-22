"use client";
import { Button } from "@/components/Button";
import { CoverLetterTypesDropdown } from "@/components/apply/CoverLetterTypesDropdown";
import {
	ArrowUpRightIcon,
	ChevronLeft,
	ExternalLinkIcon,
	Link as LinkIcon,
	Navigation2,
	PlusIcon,
} from "lucide-react";
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
			<div className="ml-auto mr-auto w-full bg-white px-4  py-4 shadow-xl drop-shadow-lg md:w-2/3 md:px-16 md:py-16">
				<header className="">
					<Link
						href="/jobs"
						className="inline-flex items-center gap-2 text-gray-500"
					>
						<ChevronLeft className="h-4 w-4" />
						Return to Job Listings
					</Link>
					<br className="mb-6" />
					<h1 className="text-3xl font-bold">{company}</h1>
					<Link href="#" className="inline-flex items-center gap-2">
						<LinkIcon className="h-4 w-4" />
						View more Job Positions from {company}
					</Link>
					<hr className="my-2" />
				</header>
				<main className="flex flex-col items-start justify-start gap-4">
					<h1 className="text-2xl">
						<span className="font-bold">{title}</span>
					</h1>
					<p className="h-full">
						{description}{" "}
						<Link href={link}>
							<span className="text-orange-400">Read More</span>
						</Link>
					</p>

					<div className="ml-auto inline-flex justify-center">
						<Navigation2 />
						<span className="font-bold">{location}</span>
					</div>

					<br className="my-16" />
					<section className="ml-auto mr-auto gap-2">
						<Link href={link} className="mr-4">
							<Button
								variant={"ghost"}
								className="inline-flex gap-2 px-8 py-6 text-black"
							>
								<ExternalLinkIcon />
								View External Page
							</Button>
						</Link>
						<CoverLetterTypesDropdown
							ButtonObject={
								<Button className="inline-flex gap-2 bg-gradient-to-r from-orange-400 to-orange-500 px-16 py-6 text-white shadow-lg drop-shadow-lg transition-all hover:drop-shadow-none">
									<PlusIcon />
									Generate Cover Letter
								</Button>
							}
						/>
					</section>
				</main>
			</div>
		</div>
	);
};

export default JobDetails;

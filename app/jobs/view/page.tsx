"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const JobDetails = () => {
	const searchParams = useSearchParams();

	const title = searchParams.get("title") || "[TITLE]";
	const company = searchParams.get("company") || "[COMPANY]";
	const location = searchParams.get("location") || "[LOCATION]";
	const link = searchParams.get("location") || "[LOCATION]";
	const description = searchParams.get("description") || "[DESCRIPTION]";

	return (
		<div className="z-10 flex min-h-screen w-full flex-col items-center justify-center">
			<h1 className="text-2xl">
				About <span className="font-bold">{title}</span>
			</h1>
			<h1 className="text-2xl">
				<span className="font-bold">{description}</span>
			</h1>
			<div className="text-2xl">
				<span className="font-bold">{company}</span>
			</div>
			<div className="text-2xl">
				<span className="font-bold">{location}</span>
			</div>
			<div className="text-2xl">
				<span className="font-bold">{link}</span>
			</div>
			<div className="text-2xl">
				<span className="font-bold">{description}</span>
			</div>
		</div>
	);
};

export default JobDetails;

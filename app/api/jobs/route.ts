import { NextRequest, NextResponse } from "next/server";
import type { JobDetails } from "@/app/(site)/jobs/page";
import axios from "axios";

interface AdzunaJobListing {
	id: string;
	created: string;
	latitude: number;
	longitude: number;
	salary_is_predicted: string;
	description: string;
	redirect_url: string;
	__CLASS__: string;
	category: {
		label: string;
		tag: string;
		__CLASS__: string;
	};
	adref: string;
	company: { display_name: string; __CLASS__: string };
	title: string;
	location: {
		area: Array<string>;
		display_name: string;
		__CLASS__: string;
	};
}

export async function GET(req: NextRequest) {
	const pageNumParam =
		(req.nextUrl.searchParams.get("page") as string) || "1";
	const countryParam =
		(req.nextUrl.searchParams.get("country") as string) || "ca";

	const APP_ID = process.env.ADZUNA_APP_ID;
	const APP_KEY = process.env.ADZUNA_APP_KEY;

	const url = `https://api.adzuna.com/v1/api/jobs/${countryParam}/search/${pageNumParam}?app_id=${APP_ID}&app_key=${APP_KEY}`;
	const response: Array<AdzunaJobListing> = await axios
		.get(url)
		.then((response) => response.data.results)
		.catch((e) => {
			console.error(e);
			return [];
		});

	const formattedResults: Array<JobDetails> = response.map(
		({
			id,
			title,
			company,
			location,
			redirect_url,
			description,
			category,
			created,
		}) => ({
			id,
			title,
			category,
			description,
			created,
			company: company.display_name,
			location: location.display_name,
			link: redirect_url,
		}),
	);

	return NextResponse.json(formattedResults);
}

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { CategorySchema } from "@/app/jobs/page";

export async function GET(req: NextRequest) {
	const countryParam =
		(req.nextUrl.searchParams.get("country") as string) || "ca";

	const APP_ID = process.env.ADZUNA_APP_ID;
	const APP_KEY = process.env.ADZUNA_APP_KEY;

	const url = `https://api.adzuna.com/v1/api/jobs/${countryParam}/categories?app_id=${APP_ID}&app_key=${APP_KEY}`;

	const response: Array<CategorySchema> = await axios
		.get(url)
		.then((response) => response.data.results)
		.catch((e) => {
			console.error(e);
			return [];
		});

	return NextResponse.json(response);
}

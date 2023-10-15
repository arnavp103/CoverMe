import { NextRequest } from "next/server";

// get the things we need from the user for what jobs we should be searching for
export interface JobSearch {}

export async function POST(req: NextRequest) {
	const body: JobSearch = await req.json();
}

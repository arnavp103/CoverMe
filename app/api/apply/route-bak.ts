import type { JobDetails } from "@/app/jobs/page";
import { NextResponse, NextRequest } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

interface Job {
	title: string;
	description: string;
}

export async function POST(req: NextRequest) {
	const body: Job = await req.json();

	if (body.title === undefined) {
		return NextResponse.json({
			code: 400,
			message: "Invalid request body. Missing 'body' param.",
		});
	}
	if (body.description === undefined) {
		return NextResponse.json({
			code: 400,
			message: "Invalid request body. Missing 'description' param.",
		});
	}

	// console.log("body:", body);
	const chatCompletion = await openai.chat.completions
		.create({
			messages: [
				{
					role: "user",
					content: `You are a professional cover letter writer. Write a neat two 
		body paragraph cover letter for someone applying for a ${body.title} job. Don't generate a heading for this letter.
		The job description is:
		${body.description}`,
				},
			],
			model: "gpt-3.5-turbo",
		})
		.catch((e) => {
			console.error(e);
			return {
				choices: [
					{ message: { content: "ERROR GENERATING RESPONSE." } },
				],
			};
		});
	const message = chatCompletion.choices[0].message.content;
	return NextResponse.json(message);
}

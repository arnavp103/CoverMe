import { useSession } from "next-auth/react";
import { OpenAIStream, StreamingTextResponse } from "ai";

import { NextResponse, NextRequest } from "next/server";
import OpenAI from "openai";

import { generateMessage } from "./MessageController";

export interface JobApplication {
	title: string;
	description: string;
	experience?: string;
	exp?: string;
}

export const runtime = "edge";

export async function POST(req: NextRequest) {
	const body: JobApplication = await req.json();

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
	console.log("body.................\n\n", body);
	const response = await generateMessage(body);
	// .catch((e) => {
	// 	console.error(e);
	// 	return {
	// 		choices: [
	// 			{ message: { content: "ERROR GENERATING RESPONSE." } },
	// 		],
	// 	};
	// });

	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response);
	// Respond with the stream
	return new StreamingTextResponse(stream);

	// const message = chatCompletion.choices[0].message.content;
	// return NextResponse.json(message);
}

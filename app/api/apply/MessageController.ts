import { Stream } from "openai/streaming";
import { JobApplication } from "./route";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

const prompts = [
	(
		title: string,
		description: string,
	) => `You are a professional cover letter writer. Write a neat two
	body paragraph cover letter for someone applying for a ${title} job. Don't generate a heading for this letter.
	The job description is:
	${description}`,
	(
		title: string,
		description: string,
	) => `You are a professional cover letter writer. Write an enthusiastic two body paragraph, hook introduction, cover letter for someone applying for a ${title} job. Don't generate a heading for this letter.
	The job description is:
	${description}`,
	(
		title: string,
		description: string,
		experience: string,
	) => `You are a professional cover letter writer. Write a neat two
	body paragraph cover letter for someone applying for a ${title} job. Don't generate a heading for this letter.
	The job description is:
	${description}
	They have ${experience} experience.`,
	(
		title: string,
		description: string,
		experience: string,
	) => `You are a professional cover letter writer. Write a two body paragraph STARR formatted cover letter for someone applying for a ${title} job. Don't generate a heading for this letter.
	The job description is:
	${description}
	They have ${experience} experience.`,
	(
		title: string,
		description: string,
		experience: string,
	) => `You are a professional cover letter writer. Write an enthusiastic two body paragraph, hook introduction, cover letter for someone applying for a ${title} job. Don't generate a heading for this letter.
	The job description is:
	${description}
	They have ${experience} experience.`,
];

export async function generateMessage(
	application: JobApplication,
): Promise<Stream<OpenAI.Chat.Completions.ChatCompletionChunk>> {
	let arglen = 0;
	let promptIndex = 0;
	let applen = application.experience ? 3 : 2;
	while (arglen != applen) {
		promptIndex = Math.floor(Math.random() * (prompts.length - 1));
		arglen = prompts[promptIndex].length;
	}
	const prompt = prompts[promptIndex](
		application.title,
		application.description,
		application.experience!,
	);

	const response = await openai.chat.completions.create({
		stream: true,
		messages: [
			{
				role: "user",
				content: prompt,
			},
		],
		model: "gpt-3.5-turbo",
	});
	return response;
}

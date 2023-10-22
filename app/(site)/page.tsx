import { DEPLOY_URL } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import TestButton from "@/components/home/test-button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/Card";
export default async function Home() {
	return (
		<>
			<div className="z-10 w-full max-w-xl px-5 xl:px-0">
				<div className="flex min-h-[90vh] flex-col items-center justify-center">
					<h1
						className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
						style={{
							animationDelay: "0.15s",
							animationFillMode: "forwards",
						}}
					>
						Covering your Cover Letters
					</h1>
					<p
						className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
						style={{
							animationDelay: "0.25s",
							animationFillMode: "forwards",
						}}
					>
						An all-in-one job aggregator and AI-powered cover letter
						generator
					</p>
					<div
						className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
						style={{
							animationDelay: "0.3s",
							animationFillMode: "forwards",
						}}
					>
						<TestButton />
					</div>
				</div>
			</div>
			<div className="grid-cols z-10 my-10 grid h-full w-full max-w-screen-xl animate-fade-up gap-5 px-5 text-black md:grid-cols-3 xl:px-0">
				{[
					{
						title: "Personalized",
						description:
							"Tailored just for you, our web app offers a personalized experience that adapts to your preferences and needs. From customizable settings to curated content, we prioritize making your interaction unique and enjoyable.",
						image: "https://images.unsplash.com/photo-1562093772-c36f2d77edc3?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
						alt: "Man",
					},
					{
						title: "Advanced AI",
						description:
							"Harnessing cutting-edge artificial intelligence, our web app goes beyond the ordinary. Benefit from intelligent algorithms that learn and evolve, providing you with smart recommendations, predictive insights, and a seamless, intuitive user experience that stays ahead of the curve.",
						image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9wZW5haXxlbnwwfHwwfHx8MA%3D%3D",
						alt: "AI",
					},
					{
						title: "Concise.",
						description:
							"Say goodbye to information overload. Our web app values your time, delivering content and features with precision. Experience a clutter-free interface designed for efficiency, ensuring that every interaction is straightforward and every piece of information is presented in a clear and concise manner, allowing you to focus on what matters most.",
						image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVufGVufDB8fDB8fHww",
						alt: "Pen",
					},
				].map(({ title, description, image, alt }) => (
					<Card
						key={title + alt}
						className="relative w-full drop-shadow-lg"
					>
						<CardHeader className="relative z-20">
							<CardTitle
								className="w-full font-bold uppercase tracking-wide text-white"
								style={{ textShadow: "2px 2px #000000" }}
							>
								{title}
							</CardTitle>
						</CardHeader>
						<CardContent className="relative z-20 h-3/4 bg-black/40 py-4 text-justify text-white">
							{description}
						</CardContent>
						<CardFooter className="relative flex-wrap md:flex"></CardFooter>
						<img
							className="absolute top-0 h-full w-full rounded-xl object-cover opacity-80 "
							width={500}
							height={500}
							alt={alt}
							src={image}
						/>
					</Card>
				))}
			</div>
		</>
	);
}

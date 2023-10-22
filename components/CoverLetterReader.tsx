"use client";
import React, { useEffect, useState } from "react";
import { useChat, Message } from "ai/react";
import CoverLetterSkeletonLoader from "@/components/CoverLetterSkeletonLoader";
import useLocalStorage from "@/lib/hooks/use-local-storage";

interface CoverLetterReaderProps {
	title: string;
	description: string;
	isReady: boolean;
	// company: string;
}

const CoverLetterReader = ({
	title,
	description,
	isReady,
}: CoverLetterReaderProps) => {
	const [experience, setExperience] = useState("");

	const useChatObj = useChat({
		api: "/api/apply",
		body: {
			title,
			description,
			experience,
		},
	});

	const { messages, append } = useChatObj;

	useEffect(() => {
		let exp = "";
		if (typeof window !== "undefined" && window.localStorage) {
			exp = window.localStorage.getItem("workData") || "";
			setExperience(exp);
		}
		if (!isReady) return;
		const dummyMessage: Message = { id: "69", role: "user", content: "" };
		append(dummyMessage, {
			options: { body: { title, description, exp } },
		});
	}, [isReady]);

	if (!isReady) return <>{<CoverLetterSkeletonLoader />}</>;

	return (
		<>
			<p className="h-full w-full whitespace-pre-wrap">
				{/* {messages[0].content} */}
				{messages.map((m) => m.content)}
			</p>
		</>
	);
};

export default CoverLetterReader;

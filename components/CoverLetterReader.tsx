import React, { useEffect, useState } from "react";
import { useChat, Message } from "ai/react";
import CoverLetterSkeletonLoader from "@/components/CoverLetterSkeletonLoader";

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
	const useChatObj = useChat({
		api: "/api/apply",
		body: {
			title,
			description,
		},
	});

	const { messages, append, reload } = useChatObj;

	useEffect(() => {
		if (!isReady) return;
		const dummyMessage: Message = { id: "69", role: "user", content: "" };
		append(dummyMessage, { options: { body: { title, description } } });
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

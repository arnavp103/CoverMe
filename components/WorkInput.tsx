"use client";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Textarea } from "./TextArea";

export default function WorkInput() {
	const [work, setWork] = useState("");

	useEffect(() => {
		const workData = localStorage.getItem("workData") || "";
		console.log("workData", workData);
		setWork(JSON.parse(workData));
	}, []);

	function writeToLocalStorage() {
		console.log("running");
		console.log("work", work);
		localStorage.setItem("workData", JSON.stringify(work));
		setWork("");
	}
	return (
		<>
			<Textarea
				className="mb-4 h-full min-h-[20rem] w-full rounded-lg border-2 border-gray-500 text-lg"
				onChange={(e) => setWork(e.target.value)}
				value={work}
			/>
			<Button onClick={writeToLocalStorage}>Submit</Button>
		</>
	);
}

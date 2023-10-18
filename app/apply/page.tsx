"use client";
import CoverLetterSkeletonLoader from "@/components/CoverLetterSkeletonLoader";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
	const searchParams = useSearchParams();
	const [companyName, setCompanyName] = useState("[COMPANY_NAME]");
	const [positionName, setPositionName] = useState("[POSITION_NAME]");
	const [content, setContent] = useState(null);

	useEffect(() => {
		// setContent(
		// 	"[Your Name]\n[Your Address]\n[City, State, ZIP Code]\n[Email Address]\n[Phone Number]\n[Today's Date]\n\n[Recipient's Name]\n[Recipient's Job Title]\n[Company Name]\n[Company Address]\n[City, State, ZIP Code]\n\nDear [Recipient's Name],\n\nI am excited to apply for the Commander position at Gamers United. As an avid gamer with a passion for leadership and strategy, I believe I possess the skills and experience necessary to excel in this role.\n\nHaving played Among Us extensively, I am well-versed in the intricacies of the game and understand the unique challenges commanders face. I have successfully led teams of 5-10 players, effectively coordinating and strategizing to ensure the safety of my crewmates and the ship. By utilizing my strategic thinking and quick decision-making abilities, I have consistently achieved positive outcomes and fostered a cooperative and enjoyable gaming experience for all team members.\n\nIn addition to my gaming expertise, I bring a strong foundation in leadership, communication, delegation, and Excel proficiency. Throughout my professional career, I have honed my leadership skills by managing teams in challenging environments. I actively listen to team members, ensure open lines of communication, and motivate individuals to work collaboratively towards a common goal. Moreover, my experience in delegating tasks and responsibilities, combined with my excellent organizational skills, enables me to efficiently allocate resources and optimize team productivity.\n\nBy engaging with Gamers United, I am confident that I will not only find a welcoming community but also a platform to showcase my skills as a commander. I am excited about the opportunity to contribute to the success of the organization and help build a strong team of dedicated players.\n\nThank you for considering my application. I am eager to discuss my qualifications further and demonstrate how my skills align with the requirements of the Commander role. I have attached my resume for your review and look forward to the possibility of an interview.\n\nSincerely,\n\n[Your Name]",
		// );

		const company = searchParams.get("company") || "COMPANY_NAME";
		const description = searchParams.get("description") || "DESCRIPTION";
		const title = searchParams.get("title") || "POSITION_NAME";

		setCompanyName(company);
		setPositionName(title);
		// return;
		axios
			.post(
				"/api/apply",
				{
					title,
					description,
				},
				{ timeout: 60000 },
			)
			.then((res) => {
				setContent(res.data);
			});
	}, []);
	return (
		<div className="z-10 flex min-h-screen w-full flex-col items-center justify-center py-2">
			<h1 className="font-2xl font-semibold">
				{!content && "Generating"} Your Cover Letter for
			</h1>
			<h1 className="text-2xl">{companyName}</h1>
			<h3>{positionName}</h3>
			<br className="mb-4" />
			<div className="h-full w-1/2 bg-white px-8 py-20 shadow-lg drop-shadow-lg">
				<p style={{ whiteSpace: "pre-line" }}>{content}</p>
				{!content && <CoverLetterSkeletonLoader />}
			</div>
		</div>
	);
}

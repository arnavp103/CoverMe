import Card from "@/components/home/card";
import axios from "axios";

export interface JobDetails {
	id: string;
	title: string;
	company: string;
	location: string;
	link: string;
}

export default async function Page() {
	const details: JobDetails[] = await axios
		.get(`./api/jobs`)
		.then((res) => res.data);
	return (
		<div className="flex h-full w-full flex-col items-center justify-center text-black">
			Available jobs in your area:
		</div>
	);
}

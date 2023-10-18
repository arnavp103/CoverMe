import { Input } from "@/components/Input";
import JobListingFeed from "@/components/JobListingFeed";
import { SearchIcon } from "lucide-react";

export interface JobDetails {
	id: string;
	title: string;
	company: string;
	location: string;
	link: string;
	category: { label: string; tag: string };
	created: string;
	description: string;
}

export default async function Page() {
	return (
		<div className="z-10 flex h-full w-full flex-col items-center justify-center text-black">
			<p className="text-2xl font-bold capitalize">
				Available jobs in your area
			</p>
			<br className="mb-4" />
			<div className="overflow-clips relative flex w-2/3 items-center gap-2 rounded-lg md:w-1/3">
				<SearchIcon className="absolute h-full w-12 rounded-l-lg bg-black px-3 text-white" />
				<Input
					type="text"
					placeholder="SEARCH"
					className="flex-1 pl-16"
				/>
			</div>
			<br className="mb-4" />

			<div className="flex w-2/3 flex-col flex-wrap items-center justify-center gap-2 md:w-1/2">
				<JobListingFeed />
			</div>
		</div>
	);
}

"use client";
import { Button } from "@/components/Button";
import { Combobox, ComboboxItem } from "@/components/Combobox";
import { Input } from "@/components/Input";
import JobListingFeed from "@/components/JobListingFeed";
import { cn } from "@/lib/utils";
import axios from "axios";
import { ChevronDown, ChevronLeft, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

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

//
export interface CategorySchema {
	tag: string;
	label: string;
}

export default function Page() {
	const [categories, setCategories] = useState<Array<ComboboxItem> | []>([]);
	const [filterExpanded, setFilterExpanded] = useState(false);

	useEffect(() => {
		axios.get("/api/jobs/categories").then((response) => {
			const data =
				response.status === 200
					? response.data
					: [
							{ tag: "code1", label: "THAT" },
							{ tag: "code2", label: "HERE" },
							{ tag: "code3-maybe", label: "WHEN" },
					  ];

			setCategories(
				data.map(({ tag, label }: CategorySchema) => ({
					label,
					value: tag,
				})),
			);
		});
	}, []);

	return (
		<div className="z-10 flex h-full w-full flex-col items-center justify-center text-black">
			<p className="text-2xl font-bold capitalize">
				Available jobs in your area
			</p>
			<br className="mb-4" />
			<div className="relative flex w-2/3 flex-col items-center gap-2 md:w-1/3">
				<div className="overflow-clips relative flex w-full items-center gap-2 rounded-lg">
					<SearchIcon className="absolute h-full w-12 rounded-l-lg bg-black px-3 text-white" />
					<Input
						type="text"
						placeholder="SEARCH"
						className="flex-1 pl-16"
					/>
					<Button
						variant="ghost"
						onClick={() => setFilterExpanded(!filterExpanded)}
					>
						<ChevronDown // Chevron Down has clearer expanded graphic.
							className={cn(
								filterExpanded && "!rotate-0 !opacity-100",
								"rotate-90 opacity-50 transition-all",
							)}
						/>
					</Button>
				</div>
				<div
					className={cn(
						"max-h-[70vh] w-full overflow-clip rounded-b-md bg-slate-300/30 p-2 transition-all",
						!filterExpanded && "!max-h-0 !p-0",
					)}
				>
					<Combobox
						name="Category"
						items={categories}
						className="w-1/2"
						contentClassName="w-full"
					/>
					<p>BELOW NEED TO BE MADE.</p>

					<ul>
						<li>Full Time</li>
						<li>Part Time</li>
						<li>Contract</li>
						<li>Permanent</li>
					</ul>
					<p>Salary Min</p>
					<p>Salary Max</p>
					<p>Remove Advertisements X days old</p>
					<p>Where (Place names, postal codes, etc. may be used.)</p>
					<p>Distance (default: 5km)</p>
					<p>Keywords</p>
					<p>Keywords And (All must be found)</p>
					<p>
						Keywords Phrase (Must be found in description or title)
					</p>
					<p>Keywords Or</p>
					<p>Keywords Exclude</p>
					<br></br>
					<Button>Filter (NOT IMPLEMENTED)</Button>
				</div>
			</div>
			<br className="mb-4" />

			<div className="flex w-2/3 flex-col flex-wrap items-center justify-center gap-2">
				<JobListingFeed />
			</div>
		</div>
	);
}

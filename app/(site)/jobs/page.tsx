"use client";
import { Button } from "@/components/Button";
import { Combobox, ComboboxItem } from "@/components/Combobox";
import { Input } from "@/components/Input";
import JobListingFeed from "@/components/JobListingFeed";
import { cn } from "@/lib/utils";
import axios from "axios";
import { ChevronDown, ChevronLeft, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import PopOver from "@/components/shared/popover";
import PopoverButton from "@/components/shared/PopoverButton";

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
	const [openPopover, setOpenPopover] = useState(false);
	const [openSubPopover, setOpenSubPopover] = useState(false);
	const [filter, setFilter] = useState(0);
	const [filterValue, setFilterValue] = useState(null);

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
			<div className="relative flex w-full flex-col items-center gap-2 md:w-1/3">
				<div className="overflow-clips relative flex w-full flex-col items-center gap-2 rounded-lg md:flex-row">
					<div className="relative flex w-full px-2">
						<SearchIcon className="absolute h-full w-12 rounded-l-lg bg-black px-3 text-white" />
						<Input
							type="text"
							placeholder="SEARCH"
							className="pl-16"
						/>
					</div>
					<Button
						variant="ghost"
						onClick={() => setFilterExpanded(!filterExpanded)}
					>
						<p className="mr-2 md:hidden">Open Filters</p>
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
						"max-h-screen w-full overflow-clip rounded-b-md bg-slate-300/30 p-2 transition-all",
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

					<PopOver
						content={
							<div className="w-full rounded-md bg-white p-2 sm:w-40">
								<button
									onClick={() => setFilter(1)}
									className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
								>
									Position Type
								</button>
								<button
									onClick={() => setFilter(2)}
									className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
								>
									Salary
								</button>
								<button
									onClick={() => setFilter(3)}
									className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
								>
									Posted Date
								</button>
								<button
									onClick={() => setFilter(4)}
									className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
								>
									Location
								</button>
								<button
									onClick={() => setFilter(5)}
									className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
								>
									Distance
								</button>
							</div>
						}
						openPopover={openPopover}
						setOpenPopover={setOpenPopover}
					>
						<button
							onClick={() => setOpenPopover(!openPopover)}
							className="bg-slate flex w-36 items-center justify-between rounded-md border-gray-300 bg-slate-300/30 bg-white px-4 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
						>
							<p className="text-gray-600">Select filter</p>
							<ChevronDown
								className={`h-4 w-4 text-gray-600 transition-all ${
									openPopover ? "rotate-180" : ""
								}`}
							/>
						</button>
					</PopOver>

					<div className="mt-3 w-full">
						Value:
						<br></br>
						<PopOver
							content={
								<div className="w-full rounded-md bg-white p-2 sm:w-40">
									{/* <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
										Full Time
									</button> */}
									<PopoverButton
										text="Full Time"
										filterValue={filterValue}
										setFilterValue={setFilterValue}
									/>
									<button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
										Part Time
									</button>
									<button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
										Contract
									</button>
									<button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
										Permanent
									</button>
								</div>
							}
							openPopover={openSubPopover}
							setOpenPopover={setOpenSubPopover}
						>
							<button
								onClick={() =>
									setOpenSubPopover(!openSubPopover)
								}
								className="bg-slate flex w-36 items-center justify-between rounded-md border-gray-300 bg-slate-300/30 bg-white px-4 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
							>
								<p className="text-gray-600">Select filter</p>
								<ChevronDown
									className={`h-4 w-4 text-gray-600 transition-all ${
										openSubPopover ? "rotate-180" : ""
									}`}
								/>
							</button>
						</PopOver>
					</div>

					{/* 
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
					<p>Keywords Exclude</p> */}
					<br></br>
					<Button>Filter (NOT IMPLEMENTED)</Button>
				</div>
			</div>
			<br className="mb-4" />

			<div className="w-full flex-col flex-wrap items-center justify-center gap-2 md:w-2/3">
				<JobListingFeed />
			</div>
		</div>
	);
}

"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "./Skeleton";
import { JobDetails } from "@/app/jobs/page";
import { Button } from "@/components/Button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/Card";
import Link from "next/link";
import SkeletonLoader from "./SkeletonLoader";

const JobListingFeed = () => {
	const [posts, setPosts] = useState<JobDetails[]>([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const fetchPosts = async () => {
		try {
			const data = await axios.get("/api/jobs", {
				params: {
					page: page,
				},
			});
			const res: Array<JobDetails> = data.data;

			setPage((page) => page + 1);
			setPosts([...posts, ...res]);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const loader = (
		<div className="mt-4 flex w-full flex-col space-y-4">
			<SkeletonLoader />
			<SkeletonLoader />
			<SkeletonLoader />
			<SkeletonLoader />
		</div>
	);

	return (
		<InfiniteScroll
			dataLength={posts.length}
			next={fetchPosts}
			hasMore={hasMore}
			loader={loader}
			endMessage={
				<p className="my-12 text-center font-bold">
					Out of Job Listings...
				</p>
			}
			className="container flex h-full w-full flex-col items-center justify-center self-center"
		>
			<div className="flex w-full flex-col items-center space-y-4">
				{posts.map(
					({
						id,
						title,
						company,
						// location,
						link,
						category,
						description,
					}) => (
						<Card key={id} className="w-full bg-white">
							<CardHeader>
								<CardDescription className="text-lg">
									{company}
								</CardDescription>

								<CardTitle>{title}</CardTitle>

								<CardDescription>
									{category.label}
								</CardDescription>
								<CardDescription>{description}</CardDescription>
							</CardHeader>
							<CardContent></CardContent>
							<CardFooter className="relative flex-wrap md:flex">
								<Link href={link} className="text-gray-400">
									View Job Page
								</Link>

								<Link
									className="ml-auto"
									href={{
										pathname: "apply/",
										query: {
											title,
											description,
											company,
										},
									}}
								>
									<Button
										variant="secondary"
										className="w-32"
									>
										Apply
									</Button>
								</Link>
							</CardFooter>
						</Card>
					),
				)}
			</div>
		</InfiniteScroll>
	);
};

export default JobListingFeed;

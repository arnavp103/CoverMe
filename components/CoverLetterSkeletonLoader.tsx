import React from "react";
import { Skeleton } from "@/components/Skeleton";

const CoverLetterSkeletonLoader = () => {
	return (
		<div className="flex flex-col space-y-4 ">
			<Skeleton className="h-6 w-1/3 bg-gray-300" />
			<Skeleton className="h-24 w-full bg-gray-300" />
			<Skeleton className="h-64 w-full bg-gray-300" />
			<Skeleton className="h-64 w-full bg-gray-300" />
			<Skeleton className="h-24 w-full bg-gray-300" />
			<Skeleton className="h-6 w-1/3  bg-gray-300" />
		</div>
	);
};

export default CoverLetterSkeletonLoader;

import React from "react";
import { Skeleton } from "./Skeleton";

const SkeletonLoader = () => {
	return (
		<div className="flex h-36 w-full items-center space-x-4">
			{/* <div className="flex h-full w-2/3 flex-col gap-2">
				<Skeleton className="h-2/3 w-full bg-gray-300" />
				<Skeleton className="h-2/3 w-full bg-gray-300" />
			</div> */}
			<Skeleton className="h-full w-full rounded-xl bg-gray-300" />
		</div>
	);
};

export default SkeletonLoader;

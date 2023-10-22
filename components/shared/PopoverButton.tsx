import React, { Dispatch, SetStateAction } from "react";

interface ButtonProps {
	text: string;
	onClick: () => void;
}

export default function PopoverButton({
	text,
	filterValue,
	setFilterValue,
}: {
	text: string;
	filterValue: any;
	setFilterValue: Dispatch<SetStateAction<any>>;
}) {
	return (
		<button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
			{text}
		</button>
	);
}

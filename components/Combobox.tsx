"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./Button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "./Command";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

export interface ComboboxItem {
	value: string;
	label: string;
}

interface ComboboxProps {
	name: string;
	items: Array<ComboboxItem>;
	className?: string;
	contentClassName?: string;
}

export function Combobox({
	name,
	items,
	className,
	contentClassName,
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	if (items === undefined) items = [];
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className={cn("w-[200px] justify-between", className)}
				>
					{value
						? items.find((item) => item.value === value)?.label
						: `Select ${name}...`}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className={cn("w-[200px] p-0", contentClassName)}>
				<Command>
					<CommandInput placeholder={`Search ${name}...`} />
					<CommandEmpty>No {name} found.</CommandEmpty>
					<CommandGroup>
						{items.map((item) => (
							<CommandItem
								key={item.value}
								onSelect={(currentValue) => {
									setValue(
										currentValue === value
											? ""
											: item.value,
									);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										value === item.value
											? "opacity-100"
											: "opacity-0",
									)}
								/>
								{item.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

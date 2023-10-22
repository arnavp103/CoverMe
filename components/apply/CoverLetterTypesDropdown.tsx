"use client";

import * as React from "react";
import {
	DropdownMenuCheckboxItemProps,
	DropdownMenuGroup,
	DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/Button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/Dropdown";
import { CrownIcon } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface CoverLetterTypesDropdown {
	ButtonObject: React.ReactElement;
}

export function CoverLetterTypesDropdown({
	ButtonObject,
}: CoverLetterTypesDropdown) {
	const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
	const [showActivityBar, setShowActivityBar] =
		React.useState<Checked>(false);
	const [showPanel, setShowPanel] = React.useState<Checked>(false);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{ButtonObject}</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Free Tier</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<span>Style 1</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<span>Style 2</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<span>Style 3</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuLabel className="inline-flex gap-2">
					<CrownIcon className="w-4" /> Pro Tier
				</DropdownMenuLabel>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<span>Super Cool Style</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

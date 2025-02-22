"use client";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface AdaptiveTooltipProps {
	title: string;
	description: string;
	isCocnept?: boolean;
}
export const AdaptiveTooltip = ({
	title,
	description,
	isCocnept,
}: AdaptiveTooltipProps) => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	if (isMobile) {
		return (
			<Popover>
				<PopoverTrigger asChild>
					<button className={cn(isCocnept ? null : "text-blue-600")}>
						{title}
					</button>
				</PopoverTrigger>
				<PopoverContent className="max-w-sm p-2 text-sm">
					<p>{description}</p>
				</PopoverContent>
			</Popover>
		);
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<button className={cn(isCocnept ? null : "text-blue-600")}>
						{title}
					</button>
				</TooltipTrigger>
				<TooltipContent className="max-w-sm p-2 text-sm">
					<p>{description}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

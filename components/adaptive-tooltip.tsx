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

export const AdaptiveTooltip = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	if (isMobile) {
		return (
			<Popover>
				<PopoverTrigger asChild>
					<button className="text-blue-600">concepts</button>
				</PopoverTrigger>
				<PopoverContent className="max-w-sm p-2 text-sm">
					<p>
						These are example concepts created by us for illustrative purposes
						and are not official campaigns or partnerships with these brands.
						The ads marked with “(Concept ad)” in the slider above are
						conceptual examples.
					</p>
				</PopoverContent>
			</Popover>
		);
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<button className="text-blue-600">concepts</button>
				</TooltipTrigger>
				<TooltipContent className="max-w-sm p-2 text-sm">
					<p>
						These are example concepts created by us for illustrative purposes
						and are not official campaigns or partnerships with these brands.
						The ads marked with “(Concept ad)” in the slider above are
						conceptual examples.
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

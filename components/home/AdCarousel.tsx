import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { urlFor } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";
import Image from "next/image";

interface AdCarouselProps {
	ads: SanityDocument[];
}
export const AdCarousel = ({ ads }: AdCarouselProps) => {
	return (
		<div className="overflow-hidden px-4">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent className="-ml-4">
					{ads.map((ad, index) => {
						const adImageUrl = ad.image ? urlFor(ad.image).url() : null;
						return (
							<CarouselItem key={index} className="basis-auto pl-4">
								<Card className="border-0 shadow-none">
									<CardContent className="p-0">
										<div className="relative ">
											{adImageUrl && (
												<Image
													src={adImageUrl}
													alt={ad.title}
													width={320}
													height={400}
													className="h-[350px] w-full rounded-lg object-contain"
													priority={index === 0}
												/>
											)}
										</div>
									</CardContent>
									<CardFooter className="p-0 pt-2 pb-0">
										<div className="flex items-center gap-1 pt-2 text-muted-foreground text-sm">
											<span>{ad.title}</span>
											<span className="text-xs">·</span>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger asChild>
														<button>(Concept ad) </button>
													</TooltipTrigger>
													<TooltipContent className="max-w-sm">
														<p>
															This is a conceptual ad created for illustrative
															purposes only and is not an official campaign.
														</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>{" "}
										</div>
									</CardFooter>
								</Card>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex" />
				<CarouselNext className="hidden md:flex" />
			</Carousel>
		</div>
	);
};

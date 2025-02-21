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
		<div className="w-full overflow-hidden px-4">
			<Carousel
				opts={{
					align: "start",
					loop: true,
					slidesToScroll: 3,
				}}
				className="relative w-full"
			>
				<CarouselContent className="ml-0">
					{ads.map((ad, index) => {
						const adImageUrl = ad.image ? urlFor(ad.image).url() : null;
						return (
							<CarouselItem key={index} className="basis-auto pl-4">
								<Card className="border-0 shadow-none">
									<CardContent className="p-0">
										<div className="relative">
											{adImageUrl && (
												<Image
													src={adImageUrl}
													alt={ad.title}
													width={320}
													height={400}
													className="h-[350px] w-full rounded-[14px] border border-[#E7E7E7] object-contain"
													priority={index === 0}
												/>
											)}
										</div>
									</CardContent>
									<CardFooter className="p-0 pt-1 pb-0">
										<div className="flex items-center gap-1 pt-2 text-muted-foreground text-sm">
											<span className="text-[#3F3F3F]">{ad.title}</span>
											{ad.isConcept && (
												<TooltipProvider>
													<Tooltip>
														<TooltipTrigger asChild>
															<button className="text-[#C3C3C3]">
																(Concept ad)
															</button>
														</TooltipTrigger>
														<TooltipContent className="max-w-sm">
															<p>
																This is a conceptual ad created for illustrative
																purposes only and is not an official campaign.
															</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											)}
										</div>
									</CardFooter>
								</Card>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious className="-translate-y-1/2 absolute top-1/2 left-2 hidden md:flex" />
				<CarouselNext className="-translate-y-1/2 absolute top-1/2 right-2 hidden md:flex" />
			</Carousel>
		</div>
	);
};

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { client } from "@/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CarouselImage = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			const data = await client.fetch('*[_type == "carouselImage"]');
			setImages(data);
		};
		fetchImages();
	}, []);

	return (
		<Dialog>
			<DialogTrigger className="flex h-full w-full cursor-pointer [&_.carousel-controls]:pointer-events-none">
				<Carousel className="w-full">
					<CarouselContent>
						{[1, 2, 3].map((_, index) => (
							<CarouselItem key={index}>
								<div className="space-y-2">
									<div className="relative aspect-[16/9] overflow-hidden rounded-lg">
										<Image
											src={`/image.png`}
											alt="Uber ad concept"
											fill
											className="object-contain"
										/>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="carousel-controls" />
					<CarouselNext className="carousel-controls" />
				</Carousel>
			</DialogTrigger>

			<DialogContent className="bg-none sm:max-w-[80vw]">
				<Carousel className="w-full">
					<CarouselContent>
						{[1, 2, 3].map((_, index) => (
							<CarouselItem key={index}>
								<div className="space-y-4">
									<div className="flex h-[80vh] items-center justify-center">
										<div className="relative aspect-[3/2] w-full max-w-4xl overflow-hidden rounded-lg">
											<Image
												src={`/image.png`}
												alt="Uber ad concept"
												fill
												className="object-contain"
											/>
										</div>
									</div>
									<p className="text-sm">Uber (Concept ad)</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="left-4" />
					<CarouselNext className="right-4" />
				</Carousel>
			</DialogContent>
		</Dialog>
	);
};

export default CarouselImage;

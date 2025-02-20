import { AdCarousel } from "@/components/home/AdCarousel";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

// const POSTS_QUERY = `*[
//   _type == "post"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Page() {
	const POSTS_QUERY = `*[_type == "post"]{ _id, title, image }`;
	const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
	return (
		<div className="min-h-screen bg-white">
			<div className="py-8 pl-16">
				<header className="mb-10">
					<Link href="/">
						<Image src="/logo.svg" alt="Logo" width={60} height={60} />
					</Link>
				</header>

				<main className="space-y-8">
					<div className="max-w-3xl space-y-2">
						<p className="text-lg">
							We're{" "}
							<Link href="/" className="text-blue-600 hover:underline">
								AdvertisingAgency.com
							</Link>
							—crazy domain, right? We're that serious.
						</p>

						<p>
							People see hundreds, if not thousands, of ads per day—we create
							the few they remember.
						</p>

						<p>
							We partner with companies like yours to deliver high-performing
							static ad creatives, on autopilot.
						</p>

						<div className="flex items-center gap-2">
							<p>We've created ads for</p>
							<div className="flex gap-2">
								{["uber", "wordpress", "instagram", "medium", "draft"].map(
									(brand, i) => (
										<div key={i} className="h-6 w-6 rounded-full bg-gray-900" />
									),
								)}
							</div>
							<p>, and many many more.</p>
						</div>

						<div className="space-y-2">
							<p>Clients keep saying the same thing about our ads: "WOW!"</p>
							<p>
								We didn't reinvent the wheel—just the way you get your ad
								creatives.
							</p>
							<p>Simple and scalable—one subscription, endless ads.</p>
							<p>No meetings. No back-and-forth. Just ads that work.</p>
							<p>You focus on scaling. We handle the creatives.</p>
							<p>
								We've proven "if it sounds too good to be true, it probably is"
								wrong.
							</p>
							<p>
								Every day, you get 10 world-class, tailor-made ad creatives for
								your brand—100% yours.
							</p>
							<p>
								That's 3,650 ads per year. What do we charge? Way too
								little—$3,500 per month.
							</p>
							<p>Why pay per ad when you can get unlimited?</p>
							<p>Cancel or pause subscription anytime—no questions asked.</p>
							<p>You should try us out—most don't look back.</p>
							<p>
								Not loving it after a week? Get $1750 back—low risk, high
								reward.
							</p>
						</div>

						<p>
							Below you can find ads and{" "}
							{/* <Link href="#" className="text-blue-600 hover:underline">
                concepts
              </Link>{" "} */}
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<button className="text-blue-600">Concepts </button>
									</TooltipTrigger>
									<TooltipContent className="max-w-sm">
										<p>
											These are example concepts created by us for illustrative
											purposes and are not official campaigns or partnerships
											with these brands. The ads marked with “(Concept ad)” in
											the slider below are conceptual examples.
										</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>{" "}
							we've created for a couple of your favorite brands. Are you next?
						</p>

						<div className="flex items-center gap-4">
							<Button className="rounded-full bg-black text-white hover:bg-gray-800">
								<Link
									href="https://buy.stripe.com/4gw14pbvAgd03Nm14l"
									target="_blank"
									rel="norefferer"
								>
									Join Today
								</Link>
							</Button>
							<Button variant="outline" className="rounded-full">
								<Link
									href={"https://cal.com/advertisingagency/15min"}
									target="_blank"
									rel="norefferer"
								>
									Book a Call
								</Link>
							</Button>
							<span className="flex items-center gap-2 text-gray-600 text-sm">
								<span className="h-2 w-2 animate-blink rounded-full bg-yellow-400" />
								Only 3 spots available right now
							</span>
						</div>
					</div>
					<AdCarousel ads={posts} />
					<footer>
						<p className="text-start text-gray-600 text-sm">
							© 2024 AdvertisingAgency.com. All rights reserved.
						</p>
					</footer>
				</main>
			</div>
		</div>
	);
}

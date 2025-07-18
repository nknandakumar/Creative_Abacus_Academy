import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";

const galleryMedia = [
	{
		type: "image",
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752862179/Screenshot_2025-07-18_233543_toszuy.png",
		alt: "Students engaged in a lesson in Shivamogga",
		aiHint: "children classroom",
	},
	{
		type: "video",
		src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1752861301/v2_cvwzfl.mp4",
		alt: "Abacus class in action - video",
		poster: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752862180/Screenshot_2025-07-18_233117_m0uxrv.png",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752862176/ACA-class_vwdtjs.jpg",
		alt: "A smiling student with an abacus at Creative Abacus Academy",
		aiHint: "student smiling",
	},
	{
		type: "video",
		src: "https://res.cloudinary.com/dk1zdm8gz/video/upload/v1752861299/v1_x0qj8r.mp4",
		alt: "Student solving math with abacus - video",
		poster: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752862181/Screenshot_2025-07-18_233017_elnpnj.png",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752862183/Screenshot_2025-07-18_165413_jrzqfc.png",
		alt: "Close-up of an abacus tool used in our Shivamogga class",
		aiHint: "abacus tool",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752862542/images_nkqxxj.jpg",
		alt: "A group of happy students after an abacus class",
		aiHint: "students group",
	},
	{
		type: "image",
		src: "https://placehold.co/600x400.png",
		alt: "Classroom activity in progress at our abacus center",
		aiHint: "learning activity",
	},
	{
		type: "image",
		src: "https://placehold.co/600x400.png",
		alt: "An instructor helping a student in Shivamogga",
		aiHint: "teacher helping",
	},
];

export default function Gallery() {
	return (
		<section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<BlurFade delay={0.1} inView>
						<h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Our Gallery
						</h2>
					</BlurFade>
					<BlurFade delay={0.2} inView>
						<p className="mt-4 text-muted-foreground md:text-xl">
							Take a glimpse of our vibrant classrooms, student achievements,
							and engaging videos!
						</p>
					</BlurFade>
				</div>
				<div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8">
					{galleryMedia.map((media, index) => (
						<BlurFade key={index} delay={0.1 + index * 0.05} inView>
							<Card className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl">
								<CardContent className="p-0">
									{media.type === "image" ? (
										<Image
											src={media.src}
											alt={media.alt}
											width={600}
											height={400}
											className="aspect-video h-full w-full object-cover"
											data-ai-hint={media.aiHint}
											loading="lazy"
										/>
									) : (
										<video
											src={media.src}
											poster={media.poster}
											controls
											preload="none"
											className="aspect-video h-full w-full object-top bg-black"
											style={{ maxHeight: 400 }}
											aria-label={media.alt}
											tabIndex={0}
										>
											Sorry, your browser does not support embedded videos.
										</video>
									)}
								</CardContent>
							</Card>
						</BlurFade>
					))}
				</div>
				<div className="mt-12 text-center">
					<Button asChild>
						<Link href="#">View Full Gallery & Videos</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

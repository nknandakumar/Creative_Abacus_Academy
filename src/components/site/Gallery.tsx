"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";

const galleryMedia = [
	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094093/abacus-zone-vivekananda-nagar-mysore-abacus-classes-15a118r_fug9dd.avif",
		alt: "Gallery photo 8",
		aiHint: "gallery photo",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094069/1cac2018-eca3-43f0-a678-a6e0c23aa52e-1024x768_hcpuv3.jpg",
		alt: "Gallery photo 9",
		aiHint: "gallery photo",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094022/abacus-training-1503570393-3245447_amoplf.jpg",
		alt: "Gallery photo 10",
		aiHint: "gallery photo",
	},
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
		poster:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752862180/Screenshot_2025-07-18_233117_m0uxrv.png",
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
		poster:
			"https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752862181/Screenshot_2025-07-18_233017_elnpnj.png",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752862183/Screenshot_2025-07-18_165413_jrzqfc.png",
		alt: "Close-up of an abacus tool used in our Shivamogga class",
		aiHint: "abacus tool",
	},

	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094155/img7_ljvhye.jpg",
		alt: "Gallery photo 1",
		aiHint: "gallery photo",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094153/img3_amclwh.jpg",
		alt: "Gallery photo 2",
		aiHint: "gallery photo",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094153/img4_wyywvb.jpg",
		alt: "Gallery photo 3",
		aiHint: "gallery photo",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094153/img5_cqrdeb.jpg",
		alt: "Gallery photo 4",
		aiHint: "gallery photo",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094152/img2_lmpduz.jpg",
		alt: "Gallery photo 5",
		aiHint: "gallery photo",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094152/img6_xmuilk.jpg",
		alt: "Gallery photo 6",
		aiHint: "gallery photo",
	},
	{
		type: "image",
		src: "https://res.cloudinary.com/dyi29kdzv/image/upload/v1753094151/WhatsApp_Image_2025-07-21_at_10.46.42_e52269d8_zyyvuq.jpg",
		alt: "Gallery photo 7",
		aiHint: "gallery photo",
	},
];

export default function Gallery() {
	const [openMedia, setOpenMedia] = useState<null | (typeof galleryMedia)[0]>(
		null
	);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			setOpenMedia(null);
		}
	};

	// Split galleryMedia into 3 roughly equal groups
	const rowCount = 3;
	const itemsPerRow = Math.ceil(galleryMedia.length / rowCount);
	const row1 = galleryMedia.slice(0, itemsPerRow);
	const row2 = galleryMedia.slice(itemsPerRow, 2 * itemsPerRow);
	const row3 = galleryMedia.slice(2 * itemsPerRow);

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

				<div className="flex flex-col gap-8 mt-12">
					{/* First row: left */}
					<div className="relative w-full">
						<div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
						<div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
						<Marquee pauseOnHover className="[--duration:40s]">
							{row1.map((media, index) => (
								<div
									key={index}
									className="group/card relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer w-[240px] h-[200px] md:w-[340px] md:h-[260px] lg:w-[440px] lg:h-[300px] flex-shrink-0 mx-2"
									onClick={() => setOpenMedia(media)}
									tabIndex={0}
									role="button"
									aria-label={`Open ${media.type}`}
								>
									{media.type === "image" ? (
										<Image
											src={media.src}
											alt={media.alt}
											width={440}
											height={300}
											className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/card:scale-110"
											data-ai-hint={media.aiHint}
											loading="lazy"
										/>
									) : (
										<video
											src={media.src}
											poster={media.poster}
											controls
											preload="none"
											className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/card:scale-110 bg-black pointer-events-none"
											style={{ maxHeight: 300 }}
											aria-label={media.alt}
											tabIndex={-1}
										>
											Sorry, your browser does not support embedded videos.
										</video>
									)}
								</div>
							))}
						</Marquee>
					</div>

					{/* Second row: right (reverse) */}
					<div className="relative w-full">
						<div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
						<div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
						<Marquee reverse pauseOnHover className="[--duration:20s]">
							{row2.map((media, index) => (
								<div
									key={index}
									className="group/card relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer w-[240px] h-[200px] md:w-[340px] md:h-[260px] lg:w-[440px] lg:h-[300px] flex-shrink-0 mx-2"
									onClick={() => setOpenMedia(media)}
									tabIndex={0}
									role="button"
									aria-label={`Open ${media.type}`}
								>
									{media.type === "image" ? (
										<Image
											src={media.src}
											alt={media.alt}
											width={440}
											height={300}
											className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/card:scale-110"
											data-ai-hint={media.aiHint}
											loading="lazy"
										/>
									) : (
										<video
											src={media.src}
											poster={media.poster}
											controls
											preload="none"
											className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/card:scale-110 bg-black pointer-events-none"
											style={{ maxHeight: 300 }}
											aria-label={media.alt}
											tabIndex={-1}
										>
											Sorry, your browser does not support embedded videos.
										</video>
									)}
								</div>
							))}
						</Marquee>
					</div>

					{/* Third row: left */}
					<div className="relative w-full">
						<div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
						<div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
						<Marquee pauseOnHover className="[--duration:40s]">
							{row3.map((media, index) => (
								<div
									key={index}
									className="group/card relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer w-[240px] h-[200px] md:w-[340px] md:h-[260px] lg:w-[440px] lg:h-[300px] flex-shrink-0 mx-2"
									onClick={() => setOpenMedia(media)}
									tabIndex={0}
									role="button"
									aria-label={`Open ${media.type}`}
								>
									{media.type === "image" ? (
										<Image
											src={media.src}
											alt={media.alt}
											width={440}
											height={300}
											className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/card:scale-110"
											data-ai-hint={media.aiHint}
											loading="lazy"
										/>
									) : (
										<video
											src={media.src}
											poster={media.poster}
											controls
											preload="none"
											className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/card:scale-110 bg-black pointer-events-none"
											style={{ maxHeight: 300 }}
											aria-label={media.alt}
											tabIndex={-1}
										>
											Sorry, your browser does not support embedded videos.
										</video>
									)}
								</div>
							))}
						</Marquee>
					</div>
				</div>
			</div>

			{/* Custom Modal */}
			{openMedia && (
				<div
					className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
					onClick={handleOverlayClick}
				>
					<div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
						{openMedia.type === "image" ? (
							<Image
								src={openMedia.src}
								alt={openMedia.alt}
								width={1200}
								height={800}
								className="object-contain max-h-[80vh] w-auto h-auto select-none rounded-lg"
								data-ai-hint={openMedia.aiHint}
								loading="eager"
							/>
						) : (
							<video
								src={openMedia.src}
								poster={openMedia.poster}
								controls
								autoPlay
								className="object-contain max-h-[80vh] w-auto h-auto bg-black select-none rounded-lg"
								aria-label={openMedia.alt}
								tabIndex={0}
							>
								Sorry, your browser does not support embedded videos.
							</video>
						)}
						<button
							className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors text-2xl font-bold z-10"
							onClick={() => setOpenMedia(null)}
							aria-label="Close"
							type="button"
						>
							&#10005;
						</button>
					</div>
				</div>
			)}
		</section>
	);
}

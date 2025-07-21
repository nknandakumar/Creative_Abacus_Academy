"use client";
import { MapPin } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
//import {Badge} from "@/components/ui/badge"
import React, { useState } from "react";
import Image from "next/image";
export default function About() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<section
			id="about"
			className="w-full bg-[#FFF8ED] rounded-3xl py-12 md:py-24 lg:pb-24 border-b-4 border-t-4 border-[#1E5562] flex flex-col items-center"
		>
			<span className="bg-transparent rounded-full px-4 mb-10 border text-center text-black ">
				<BlurFade delay={0.1} inView>
					About
				</BlurFade>
			</span>

			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col space-y-8 md:space-y-10">
					{/* Heading */}
					<BlurFade delay={0.2} inView>
						<h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							About Creative Abacus Academy
						</h2>
					</BlurFade>

					{/* Paragraph */}
					<BlurFade delay={0.3} inView>
						<p className="max-w-7xl text-muted-foreground text-[#8C8882] font-headline font-thin md:text-xl">
							Creative Abacus Academy, established in 2021 by{" "}
							<span className="font-semibold">Founder Anthony Serao</span> and
							led by{" "}
							<span className="font-semibold">
								Headmaster Nirmala Sunitha Mendonca
							</span>
							, is recognized as the{" "}
							<strong>best abacus center in Shivamogga</strong>. Our
							ISO-certified curriculum has empowered{" "}
							<strong>100+ students</strong> through structured finger abacus
							and vedic maths programs and more.{" "}
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									setOpenModal(true);
								}}
								className="text-accent text-sm underline font-semibold cursor-pointer hover:text-[#1E5562] transition-colors"
							>
								Click here for more
							</a>
						</p>
					</BlurFade>

					{/* Branch Heading */}
					<BlurFade delay={0.4} inView>
						<div>
							<h3 className="text-2xl md:text-3xl font-headline font-bold">
								Our Branches in Shivamogga
							</h3>
						</div>
					</BlurFade>

					{/* Branches */}
					<div className="flex flex-col gap-6 md:flex-row md:gap-20">
						{/* Branch 1 */}
						<BlurFade delay={0.5} inView>
							<div className="space-y-1 p-5 border-l-4 border-2 border-[#1E5562] rounded-3xl ">
								<div className="flex items-center gap-2">
									<MapPin className="text-accent" />
									<h4 className="text-lg font-headline font-semibold">
										Gandhinagar Branch
									</h4>
								</div>
								<p className="text-muted-foreground  pl-8">
									2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream,
									Shimoga
								</p>
							</div>
						</BlurFade>

						{/* Branch 2 */}
						<BlurFade delay={0.6} inView>
							<div className="space-y-1 p-5 border-l-4 border-2 border-[#1E5562] rounded-3xl">
								<div className="flex items-center gap-2">
									<MapPin className="text-accent" />
									<h4 className="text-lg font-headline font-semibold">
										Sominakoppa Branch
									</h4>
								</div>
								<p className="text-muted-foreground pl-8">
									Devaraj Aras Badavane, Sominakoppa Shivamogga
								</p>
							</div>
						</BlurFade>
					</div>
				</div>
			</div>

			{/* Modal for more about */}
			{openModal && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 w-full h-full"
					onClick={(e) => {
						if (e.target === e.currentTarget) setOpenModal(false);
					}}
				>
					<div className="relative bg-[#FFF8ED] rounded-3xl border-4 border-[#1E5562] w-[90vw] max-w-3xl h-[90vh] max-h-[90vh] overflow-y-auto p-8 font-headline text-[#1E5562] shadow-xl flex flex-col items-center">
						<button
							onClick={() => setOpenModal(false)}
							className="absolute top-4 right-4 text-2xl font-bold text-[#1E5562] hover:text-accent focus:outline-none"
							aria-label="Close"
						>
							&#10005;
						</button>
						<div className="space-y-6 w-full mt-4">
							<p className="text-lg font-semibold text-center">
								Empowering Young Minds with Skill, Focus & Confidence
							</p>
							<div className="flex flex-col md:flex-row items-start gap-8 justify-start">
								<div className="flex flex-col items-center w-full md:w-1/2">
									<h3 className="font-bold text-xl flex items-center gap-2 mb-2">
										Our Founder
									</h3>
									<Image
										src="https://res.cloudinary.com/dyi29kdzv/image/upload/v1753105825/WhatsApp_Image_2025-07-19_at_20.46.11_164f889e_iju0i5.jpg"
										alt="Founder Anthony Serao"
										width={128}
										height={128}
										className=" h-[200] rounded-3xl object-cover border-2 border-[#1E5562] mb-2"
									/>
									<span className="font-bold text-center ">Anthony Serao </span>
									<p className="mb-2 text-center">
										<br />A passionate educator who laid the foundation of
										Creative Abacus Academy with a mission to develop children's
										mental math abilities, discipline, and concentration.
									</p>
								</div>
								<div className="flex flex-col items-center w-full md:w-1/2">
									<h3 className="font-bold text-xl flex items-center gap-2 mb-2 text-center md:text-left w-full">
										Chairperson & Headmaster
									</h3>
									<Image
										src="https://res.cloudinary.com/dyi29kdzv/image/upload/v1753109556/WhatsApp_Image_2025-07-21_at_08.19.04_540181ba_mpdxuk.jpg"
										alt="Chairperson Nirmala Sunitha Mendonca"
										width={128}
										height={128}
										className="rounded-3xl h-[200] object-cover border-2 border-[#1E5562] mb-2"
									/>
									<span className="font-bold">Nirmala Sunitha Mendonca</span>
									<p className="mb-2 text-center">
										<br />
										She leads with empathy, structure, and vision—ensuring
										quality education and personal care for every child.
									</p>
								</div>
							</div>
							<p className="text-base mt-4 border-t pt-4 text-center">
								At Creative Abacus Academy, we believe in more than just
								numbers.
								<br />
								We focus on nurturing confidence, creativity, and lifelong
								learning.
							</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

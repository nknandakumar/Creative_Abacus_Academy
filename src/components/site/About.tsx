import { MapPin } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
//import {Badge} from "@/components/ui/badge"
export default function About() {
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
							and vedic maths programs.
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
		</section>
	);
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, Zap, Languages, Sigma,Signature,BookType  } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee1";
import Trust from "../../../public/trust.svg";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import ShinyText from "../ui/ShinyText";

const marqueeItems = [
	{ label: "Abacus 0-8 Levels", icon: CheckCircle },
	{ label: "Vedic Maths", icon: Sigma },
	{ label: "Jolly Phonics", icon: BookType },
	{ label: "Handwriting Classes", icon: Signature },
	{ label: "Language Basics", icon: Languages },
]

const profilePic = [
	"https://images.unsplash.com/photo-1698268297105-02f0ec7a438b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
	"https://images.unsplash.com/photo-1578202174639-ed3d20e60c18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
	"https://images.unsplash.com/photo-1652953233042-35a88a3e3388?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
	"https://images.unsplash.com/photo-1566332167206-18be6a6c3b5a?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0",
];

export default function Hero() {
	return (
		<section
			id="home"
			className="w-full mt-10 md:mt-4 py-12 pt-14 bg-[#FFF8ED] md:py-24 lg:py-32"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center space-y-6 text-center">
					<BlurFade>
						<h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl !leading-tight">
							Welcome to{" "}
							<span className="text-accent">Creative Abacus Academy</span>
						</h1>
					</BlurFade>
					<BlurFade delay={0.25} inView>
						<p className="max-w-[700px] text-muted-foreground text-[#8C8882] md:text-xl">
							Best Abacus Classes in Shivamogga: Boost focus, speed, and
							confidence with fun, brain-powered math training for kids
						</p>
					</BlurFade>
					<BlurFade>
						<div className="border mt-2 rounded-full py-4 px-6 flex flex-col gap-6  ">
							<BlurFade className="-mt-7 font-headline bg-[#FFF8ED]">
								<p className=" ">
									{" "}
									Available both{" "}
									<span className="text-accent"> Online & Offline</span>
								</p>
							</BlurFade>
							<BlurFade delay={0.3} className="-mb-8" inView>
								<div className="w-full">
									<Button
										asChild
										className="bg-accent text-extrabold font-headline rounded-full px-8 hover:bg-accent/90"
									>
										<Link
											href="#contact"
											className="font-bold font-headline text-white"
										>
											Contact
										</Link>
									</Button>
								</div>
							</BlurFade>
						</div>
					</BlurFade>
				</div>

				<BlurFade delay={0.4} inView>
					<div className="mt-12 md:mt-16 py-8 md:py-4 flex justify-center">
						<Marquee className="[--duration:10s]">
							{marqueeItems.map(({ label, icon: Icon }, index) => (
								<span
									key={index}
									className="flex items-center gap-2 mx-6 border-r-2 border-l-2  border border-accent rounded-full px-4 py-2  italic text-black md:text-xl font-headline text-center whitespace-nowrap"
								>
									<Icon size={18} className="text-accent" />
									{label}
								</span>
							))}
						</Marquee>
					</div>
				</BlurFade>

				<div className="flex flex-col space-y-2 justify-center items-center mt-6 md:mt-14">
					<BlurFade delay={0.45} inView>
						<Image
							src={Trust}
							width={40}
							height={40}
							alt="Trust Symbol"
							className=" rounded-full"
						/>{" "}
					</BlurFade>
					<BlurFade delay={0.50} inView>
						<p className="max-w-[700px] font-headline text-black md:text-xl">
							Trusted by 100+ Parents
						</p>
					</BlurFade>
					<BlurFade delay={0.55}>
						<div className="flex -space-x-4">
							{profilePic.map((src, i) => (
								<div
									key={i}
									className="w-10 h-10 border-2 border-white rounded-full overflow-hidden"
								>
									<Image
										src={src}
										alt="Stacked avatar"
										width={50}
										height={50}
										className="rounded-full"
									/>
								</div>
							))}
						</div>
					</BlurFade>
				</div>
			</div>
		</section>
	);
}

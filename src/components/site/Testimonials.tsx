"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Carousel from "@/components/ui/carousel";
import { BlurFade } from "@/components/magicui/blur-fade";



export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="w-full  bg-secondary py-12 md:py-24 lg:py-32"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<BlurFade delay={0.1} inView>
						<h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							What Our Parents Say
						</h2>
					</BlurFade>
					<BlurFade delay={0.2} inView>
						<p className="mt-4 text-muted-foreground md:text-xl">
							Hear from families who have experienced the Creative Abacus
							Academy difference.
						</p>
					</BlurFade>
				</div>
				<div className="relative overflow-hidden w-full h-full py-20">
					<Carousel />
				</div>
			</div>
		</section>
	);
}

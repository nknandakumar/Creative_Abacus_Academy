"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Poppins, PT_Sans, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SpeedInsights } from '@vercel/speed-insights/next';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "900"],
	variable: "--font-poppins",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat",
});

const ptSans = PT_Sans({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-pt-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<head>
				<link rel="icon" type="image/webp" href="/logo.webp" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="utf-8" />
				<meta name="robots" content="index, follow" />
				<meta
					name="description"
					content="A professional learning center offering Abacus and other structured programs for holistic child development."
				/>
				<meta property="og:title" content="Creative Abacus Academy" />
				<meta
					property="og:description"
					content="A professional learning center offering Abacus and other structured programs for holistic child development."
				/>
				<meta
					property="og:url"
					content="https://www.creativeabacusacademy.com"
				/>
				<meta property="og:image" content="/logo.webp" />
				<meta property="og:site_name" content="Creative Abacus Academy" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Creative Abacus Academy" />
				<meta
					name="twitter:description"
					content="A professional learning center offering Abacus and other structured programs for holistic child development."
				/>
				<meta name="twitter:image" content="/logo.webp" />
				<meta name="twitter:site" content="@creativeabacusacademy" />
				<link
					rel="preload"
					href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
					as="style"
				/>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "Creative Abacus Academy",
						url: "https://www.creativeabacusacademy.com",
						logo: "https://www.creativeabacusacademy.com/logo.webp",
						contactPoint: [
							{
								"@type": "ContactPoint",
								telephone: "+91-9663444851",
								contactType: "customer service",
								areaServed: "IN",
								availableLanguage: "English",
							},
						],
					})}
				</script>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{
								"@type": "ListItem",
								position: 1,
								name: "Home",
								item: "https://www.creativeabacusacademy.com/",
							},
							{
								"@type": "ListItem",
								position: 2,
								name: "Courses",
								item: "https://www.creativeabacusacademy.com/courses",
							},
						],
					})}
				</script>
			</head>
			<body
				suppressHydrationWarning
				className={cn(
					"font-body antialiased",
					poppins.variable,
					ptSans.variable,
					montserrat.variable
				)}
			>
				<Link
					href="https://wa.me/919663444851"
					className="fixed bottom-8 right-8 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image src="/whatsapp.svg" alt="WhatsApp" width={30} height={30} />
				</Link>
				{children}
				<SpeedInsights />
				<Toaster />
			</body>
		</html>
	);
}

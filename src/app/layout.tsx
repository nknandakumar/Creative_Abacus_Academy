import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Poppins, PT_Sans, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Best Abacus Classes in Shivamogga | Creative Abacus Academy',
  description: 'ISO-Certified Abacus & Vedic Maths Training in Shivamogga for kids. We offer Levels 0–8, championship prep, and have trained over 100 students. Book a free trial!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
          href="https://wa.me/+919449801748"
          className="fixed bottom-8 right-8 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={30} height={30} />
        </Link>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { Marquee } from "@/components/magicui/marquee";
import { Item } from '@radix-ui/react-select';
import Trust from "../../../public/trust.svg"
import { BlurFade } from "@/components/magicui/blur-fade";
export default function Hero() {
  const marqueeItems = [
    "ISO Certified Program",
    "Abacus Levels 0–8",
    "Vedic Math Training",
    "Competitive Exam Preparation",
    "Enhanced Memory & Concentration",
    "Brain Development Techniques",
    "Certified Expert Trainers",
    "Fun & Engaging Curriculum",
    "Speed & Accuracy Enhancement",
    "National & State-Level Competition Coaching"
  ];

  const avatarSrc = 'https://pagedone.io/asset/uploads/1704275541.png';

  return (
    <section id="home" className="w-full mt-10 py-12 pt-14 bg-[#FFF8ED] md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">

          <BlurFade>
             <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl !leading-tight">
            Welcome to <span className='text-accent ' >Creative Abacus Academy</span>
          </h1>
          </BlurFade>
          <p className="max-w-[700px] text-muted-foreground text-[#8C8882] md:text-xl">
            Best Abacus Classes in Shivamogga: Boost focus, speed, and confidence with fun, brain-powered math training for kids
          </p>
          <div className="w-full ">
            <Button asChild className="bg-accent text-extrabold font-headline rounded-full px-8  hover:bg-accent/90">
              <Link href="#contact" className='font-bold font-headline text-white '  >Contact</Link>
            </Button>
          </div>

        </div>
        <div className="mt-12 md:mt-16 py-8 md:py-4 flex justify-center">
          <Marquee className="[--duration:10s]">
            {marqueeItems.map((item, index) => (
              <span key={index} className="mx-4 text-base font-bold text-black  whitespace-nowrap">
                {item}
              </span>
            ))}
          </Marquee>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center mt-12 md:mt-16 ">
          <Image src={Trust} width={40} height={40} alt='Trust Symbol' />
          <p className="max-w-[700px] font-headline text-black md:text-xl">Trusted by 100+ Parents</p>
          <div className="flex  -space-x-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 border-2 border-white rounded-full overflow-hidden">
                <Image
                  src={avatarSrc}
                  alt="Stacked rounded avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export default function Hero() {
 

  return (
    <section id="home" className="w-full mt-10 py-12 pt-14 bg-[#F8F8F8] md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
        
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl !leading-tight">
          Welcome to <span className='text-accent ' >Creative Abacus Academy</span> 
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Best Abacus Classes in Shivamogga: Boost focus, speed, and confidence with fun, brain-powered math training for kids
          </p>
          <div className="w-full ">
            <Button  asChild className="bg-[#3C83F6] text-extrabold font-headline rounded-full px-6  hover:bg-accent/90">
              <Link href="#contact" className='text-bold font-headline  '  >Contact</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-16 flex justify-center">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="3D Abacus Illustration"
            width={1200}
            height={500}
            className="w-full max-w-full h-auto object-contain rounded-3xl"
            data-ai-hint="abacus 3d illustration"
          />
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center md:px-6">
        <div className="flex items-center justify-center rounded-full border border-yellow-300 bg-yellow-50 px-4 py-1 text-sm font-medium text-yellow-800">
          <Star className="mr-2 h-4 w-4 fill-yellow-400 text-yellow-600" />
          ISO-Certified Excellence
        </div>
        <h1 className="mt-6 font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to <span className="text-orange-400">Creative Abacus Academy</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Best Abacus Classes in Shivamogga to Supercharge Young Minds
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="#contact">Book a Free Trial Class</Link>
          </Button>
        </div>
        <div className="mt-16 w-full max-w-4xl">
           <Image
            src="https://placehold.co/1000x600.png"
            alt="An abacus representing mental math education"
            width={1000}
            height={600}
            className="h-auto w-full rounded-lg object-contain shadow-2xl"
            data-ai-hint="abacus education"
            priority
          />
        </div>
      </div>
    </section>
  );
}

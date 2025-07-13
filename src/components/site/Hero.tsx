import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="w-full py-12 bg-secondary md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="outline" className="py-1 px-4 rounded-full border-primary/20 bg-primary/10">
            <Star className="w-4 h-4 mr-2 text-primary" />
            <span className="font-semibold text-primary">ISO-Certified Excellence</span>
          </Badge>
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
            Best Abacus Classes in Shivamogga & Beyond to <span className="text-primary">Supercharge Young Minds</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            ISO-Certified Abacus & Vedic Maths Training | Levels 0–8 | Championship Prep | 100+ Students Trained
          </p>
          <div className="w-full max-w-sm">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Book a Free Trial Class</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-16 flex justify-center">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="3D Abacus Illustration"
            width={1200}
            height={600}
            className="w-full max-w-[80%] h-auto object-contain rounded-3xl"
            data-ai-hint="abacus 3d illustration"
          />
        </div>
      </div>
    </section>
  );
}

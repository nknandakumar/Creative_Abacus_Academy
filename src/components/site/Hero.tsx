import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <Image
        src="https://placehold.co/1600x900.png"
        alt="Child's mind being supercharged with abacus training at Creative Abacus Academy"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="abacus education"
        priority
      />
      <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
        <div className="max-w-4xl space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Best Abacus Classes in Shivamogga & Beyond to Supercharge Young Minds
          </h1>
          <h2 className="text-xl font-medium text-primary md:text-2xl">
            ISO-Certified Abacus & Vedic Maths Training | Levels 0–8 | Championship Prep | 100+ Students Trained
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Unlock your child’s potential with finger abacus, mental calculation, and vedic maths at our two premier branches.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Book a Free Trial Class</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:9663444851">
                <Phone className="mr-2 h-5 w-5" />
                Call: 96634 44851
              </a>
            </Button>
          </div>
           <p className="text-sm text-muted-foreground">
             📍 **Gandhinagar Branch** & **Devraj Aras Badavane Branch, Shivamogga**
          </p>
        </div>
      </div>
    </section>
  );
}

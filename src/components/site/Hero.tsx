import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <Image
        src="https://placehold.co/1600x900.png"
        alt="A child learning with an abacus"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="child learning"
      />
      <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Unlock Your Child&apos;s Genius with Abacus
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Creative Abacus Academy offers a fun and engaging way to boost your child&apos;s math skills, concentration, and confidence.
          </p>
          <div>
            <Button size="lg" asChild>
              <a href="#courses">Explore Courses</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

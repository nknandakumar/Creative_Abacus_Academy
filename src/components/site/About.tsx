import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Creative Abacus Academy
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Founded with a passion for transforming how children learn mathematics, Creative Abacus Academy is dedicated to nurturing young minds. We believe that learning should be a joyful adventure. Our mission is to make math intuitive and fun, building a strong foundation for lifelong academic success.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our certified instructors use innovative, play-based methods to teach the ancient art of abacus calculation. We create a supportive and encouraging environment where every child can thrive, build confidence, and discover their true potential.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="overflow-hidden rounded-xl shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x450.png"
                  alt="Friendly instructor with a student"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                  data-ai-hint="teacher classroom"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

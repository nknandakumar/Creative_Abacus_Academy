'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Parent of a 7-year-old',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'woman portrait',
    text: 'My daughter\'s confidence in math has soared since she joined. The teachers are fantastic and make learning so much fun!',
  },
  {
    name: 'Michael B.',
    role: 'Parent of a 9-year-old',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'man portrait',
    text: 'I\'m amazed at how quickly my son picked up mental math. This program has significantly improved his concentration and academic performance.',
  },
  {
    name: 'Emily C.',
    role: 'Parent of two students',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'smiling woman',
    text: 'Both of my children attend the academy and love it. It\'s the best investment I\'ve made in their education. Highly recommended!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Parents Say
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Hear from families who have experienced the Creative Abacus Academy difference.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full shadow-lg">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <div>
                        <div className="mb-4 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground">&quot;{testimonial.text}&quot;</p>
                      </div>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

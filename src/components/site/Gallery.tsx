import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Students engaged in a lesson in Shivamogga', aiHint: 'children classroom' },
  { src: 'https://placehold.co/600x400.png', alt: 'A smiling student with an abacus at Creative Abacus Academy', aiHint: 'student smiling' },
  { src: 'https://placehold.co/600x400.png', alt: 'Close-up of an abacus tool used in our Shivamogga class', aiHint: 'abacus tool' },
  { src: 'https://placehold.co/600x400.png', alt: 'A group of happy students after an abacus class', aiHint: 'students group' },
  { src: 'https://placehold.co/600x400.png', alt: 'Classroom activity in progress at our abacus center', aiHint: 'learning activity' },
  { src: 'https://placehold.co/600x400.png', alt: 'An instructor helping a student in Shivamogga', aiHint: 'teacher helping' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Gallery
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Take a glimpse of our vibrant classrooms and student achievements!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="aspect-video h-full w-full object-cover"
                  data-ai-hint={image.aiHint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild>
                <Link href="#">View Full Gallery & Videos</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

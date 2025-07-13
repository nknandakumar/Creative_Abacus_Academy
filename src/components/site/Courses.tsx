import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const courses = [
  {
    title: 'Beginner Level',
    ageGroup: 'Ages 5-7',
    description: 'Introduction to the abacus, basic counting, and simple addition & subtraction.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'child beginner'
  },
  {
    title: 'Intermediate Level',
    ageGroup: 'Ages 8-10',
    description: 'Advanced addition and subtraction, introduction to multiplication and division.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'student focused'
  },
  {
    title: 'Advanced Level',
    ageGroup: 'Ages 11-14',
    description: 'Complex calculations, including decimals and percentages, to achieve high speed and accuracy.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'teenager thinking'
  },
];

export default function Courses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Courses
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Structured programs designed for different age groups to master the abacus.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.title} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={course.image}
                  alt={`Image for ${course.title}`}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                  data-ai-hint={course.aiHint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <Badge variant="secondary" className="mb-2 bg-accent text-accent-foreground">{course.ageGroup}</Badge>
                <CardTitle className="font-headline text-2xl">{course.title}</CardTitle>
                <CardDescription className="mt-2">{course.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

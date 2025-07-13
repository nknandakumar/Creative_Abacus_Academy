import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, UserCheck, Award, GraduationCap, Trophy, MapPin } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Award className="h-8 w-8 text-amber-500" />,
    title: 'ISO-Certified Excellence',
    description: 'An assurance of quality and standardized education in Abacus & Vedic Maths.',
    className: 'col-span-2 row-span-6',
    content: (
        <Image 
            src="https://placehold.co/400x600.png"
            alt="ISO Certificate"
            width={400}
            height={600}
            className="w-full h-full object-cover mt-4 rounded-lg"
            data-ai-hint="certificate award"
        />
    )
  },
  {
    icon: <UserCheck className="h-8 w-8 text-indigo-500" />,
    title: 'Expert Trainers',
    description: 'With over 15 years of combined experience, our trainers are dedicated to nurturing each child\'s potential.',
    className: 'col-start-3 col-span-2 row-span-3',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-sky-500" />,
    title: 'Holistic Brain Development',
    description: 'We go beyond math, enhancing focus, memory, and confidence through our specialized curriculum.',
    className: 'col-start-3 col-span-2 row-start-4 row-span-3',
  },
  {
    icon: <Trophy className="h-8 w-8 text-lime-500" />,
    title: 'Championship Prep',
    description: 'We coach for regional & national finger abacus exams, turning students into champions.',
    className: 'col-start-5 col-span-2 row-span-6',
    content: (
        <Image 
            src="https://placehold.co/400x600.png"
            alt="Student with trophy"
            width={400}
            height={600}
            className="w-full h-full object-cover mt-4 rounded-lg"
            data-ai-hint="student trophy"
        />
    )
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We provide a unique learning experience that sets the foundation for your child&apos;s future success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-6 grid-rows-6 gap-2 md:gap-4 h-[600px] lg:h-[800px]">
            {features.map((feature) => (
                <Card 
                  key={feature.title} 
                  className={cn(
                    "p-6 shadow-lg rounded-2xl flex flex-col justify-between transition-transform hover:scale-105", 
                    feature.className
                  )}
                >
                    <div className='flex flex-col'>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background dark:bg-slate-800 ring-4 ring-background">
                           {feature.icon}
                        </div>
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-xl lg:text-2xl font-bold">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardDescription className="mt-2 text-muted-foreground text-sm lg:text-base">
                            {feature.description}
                        </CardDescription>
                    </div>
                    {feature.content && <CardContent className="p-0 mt-auto pt-4 flex-grow">{feature.content}</CardContent>}
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, UserCheck, Award, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Award className="h-8 w-8 text-amber-500" />,
    title: 'ISO-Certified Excellence',
    description: 'An assurance of quality and standardized education in Abacus & Vedic Maths.',
    className: 'md:col-span-2',
    content: (
        <Image 
            src="https://placehold.co/600x400.png"
            alt="ISO Certificate"
            width={600}
            height={400}
            className="w-full h-40 object-cover mt-4 rounded-lg"
            data-ai-hint="certificate award"
        />
    )
  },
  {
    icon: <UserCheck className="h-8 w-8 text-indigo-500" />,
    title: 'Expert Trainers',
    description: 'Over 15 years of combined experience.',
    className: 'md:row-span-2',
  },
  {
    icon: <Users className="h-8 w-8 text-lime-500" />,
    title: '100+ Students Trained',
    description: 'Join a growing community of successful learners.',
    className: '',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-sky-500" />,
    title: 'Holistic Brain Development',
    description: 'Enhancing focus, memory, and confidence through our specialized curriculum.',
    className: 'md:col-span-2',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We provide a unique learning experience that sets the foundation for your child&apos;s future success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
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
                            <CardTitle className="font-headline text-2xl font-bold">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardDescription className="mt-2 text-muted-foreground">
                            {feature.description}
                        </CardDescription>
                    </div>
                    {feature.content && <CardContent className="p-0 mt-auto pt-4">{feature.content}</CardContent>}
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

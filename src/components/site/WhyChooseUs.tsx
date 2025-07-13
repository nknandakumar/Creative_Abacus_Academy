import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, UserCheck, Award, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <UserCheck className="h-8 w-8 text-indigo-500" />,
    title: 'Expert Trainers',
    description: 'Learn from experienced instructors with over 15 years of combined expertise in abacus and mental maths education.',
    className: "col-span-1 md:col-span-2 bg-pink-100 dark:bg-pink-900/50 border-pink-200 dark:border-pink-800",
    content: (
        <Image 
            src="https://placehold.co/600x400.png"
            alt="Illustration of teachers guiding students"
            width={400}
            height={250}
            className="w-full h-auto object-contain mt-4"
            data-ai-hint="teacher student illustration"
        />
    )
  },
  {
    icon: <Award className="h-8 w-8 text-amber-500" />,
    title: 'ISO Certified Excellence',
    description: 'An assurance of quality and standardized education.',
    className: 'bg-amber-100 dark:bg-amber-900/50 border-amber-200 dark:border-amber-800',
  },
  {
    icon: <Users className="h-8 w-8 text-lime-500" />,
    title: '100+ Students Trained',
    description: 'Join a growing community of successful learners.',
    className: 'bg-lime-100 dark:bg-lime-900/50 border-lime-200 dark:border-lime-800',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-sky-500" />,
    title: 'Holistic Brain Development',
    description: 'Our curriculum is designed to enhance focus, memory, and confidence.',
    className: "col-span-1 md:col-span-2 bg-sky-100 dark:bg-sky-900/50 border-sky-200 dark:border-sky-800",
    content: (
        <Image 
            src="https://placehold.co/600x400.png"
            alt="Illustration of a brain with interconnected ideas"
            width={400}
            height={250}
            className="w-full h-auto object-contain mt-4"
            data-ai-hint="brain development illustration"
        />
    )
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
                <Card key={feature.title} className={`p-6 shadow-lg rounded-2xl flex flex-col justify-between ${feature.className}`}>
                    <div>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800">
                           {feature.icon}
                        </div>
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-2xl font-bold">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardDescription className="mt-2 text-slate-700 dark:text-slate-300">
                            {feature.description}
                        </CardDescription>
                    </div>
                    {feature.content && <CardContent className="p-0 mt-4">{feature.content}</CardContent>}
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

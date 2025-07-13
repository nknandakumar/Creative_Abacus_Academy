import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Target, UserCheck, MapPin, BrainCircuit, Users } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'ISO-Certified Excellence',
    description: 'In Abacus & Vedic Maths, ensuring the highest standards of education.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Levels 0–8 Curriculum',
    description: 'From Beginner to Advanced Mental Calculation for comprehensive learning.',
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: 'Championship Prep',
    description: 'Specialized coaching for regional & national finger abacus exams.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Expert Trainers',
    description: 'Our instructors have over 15 years of combined experience.',
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Two Convenient Locations',
    description: 'Easily accessible branches in the heart of Shivamogga.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Holistic Brain Development',
    description: 'We focus on improving focus, memory, and confidence.',
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
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center shadow-md transition-transform hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-6">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

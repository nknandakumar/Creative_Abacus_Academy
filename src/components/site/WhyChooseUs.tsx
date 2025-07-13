import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Users, UserCheck, Award } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: '2 Convenient locations',
    description: 'Accessible centers for hassle-free learning.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: '100+ students trained',
    description: 'Join a growing community of successful learners.',
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: 'Professional Teachers',
    description: 'Learn from experienced and dedicated instructors.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'ISO Certified',
    description: 'An assurance of quality and standardized education.',
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
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center justify-start text-center p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-muted-foreground">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
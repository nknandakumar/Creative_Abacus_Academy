import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Target, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Improved Math Skills',
    description: 'Develop lightning-fast calculation abilities without relying on calculators.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Enhanced Concentration',
    description: 'Boost focus and attention span through disciplined mental exercises.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Boosted Memory',
    description: 'Strengthen memory and recall by visualizing numbers and calculations.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Increased Confidence',
    description: 'Mastering a new skill builds self-esteem and a positive attitude towards learning.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            The Benefits of Abacus Learning
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Abacus training is more than just math. It&apos;s a full-brain workout that develops essential life skills.
          </p>
        </div>
        <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6 text-left shadow-sm">
                <CardHeader className='flex-row items-center gap-4 p-0'>
                   {benefit.icon}
                   <CardTitle className="font-headline text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardDescription className="mt-4">
                    {benefit.description}
                </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

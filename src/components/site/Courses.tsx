import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, UserPlus } from 'lucide-react';
import Link from 'next/link';

const programHighlights = [
    {
        icon: <CheckCircle className="h-6 w-6 text-accent" />,
        text: 'Abacus Levels 0–8: Step-by-step finger abacus training & mental visualization'
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-accent" />,
        text: 'Finger Abacus Championships: Coaching for regional and national exams'
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-accent" />,
        text: 'Vedic Maths: Ancient speed math techniques for accuracy & fun'
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-accent" />,
        text: 'Certification Exams: Periodic assessments with official certificates'
    }
];

const admissionProcess = [
    {
        icon: <UserPlus className="h-8 w-8 text-primary" />,
        title: "Enquiry & Form",
        description: "Complete the enquiry & admission form on our contact section.",
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Submit Documents",
        description: "Visit a branch with a recent photo, Aadhar card, and birth certificate copy.",
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "Free Assessment",
        description: "Schedule your free level assessment to find the perfect starting point.",
    }
]

export default function Courses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Courses & Championships
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Structured programs designed for comprehensive skill development and competitive success.
          </p>
        </div>
        
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
                <h3 className="font-headline text-2xl font-bold">Program Highlights</h3>
                 <ul className="space-y-4">
                    {programHighlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            {item.icon}
                            <span className="flex-1 text-muted-foreground">{item.text}</span>
                        </li>
                    ))}
                </ul>
                <Button asChild>
                    <Link href="#contact">View Detailed Courses & Exam Details</Link>
                </Button>
            </div>
            <div className="space-y-6">
                <h3 className="font-headline text-2xl font-bold">Admission Process</h3>
                <div className="grid gap-6">
                    {admissionProcess.map((step, index) => (
                         <Card key={index} className="p-6 shadow-sm">
                            <CardHeader className='flex-row items-center gap-4 p-0'>
                               {step.icon}
                               <CardTitle className="font-headline text-lg">{step.title}</CardTitle>
                            </CardHeader>
                            <CardDescription className="mt-4">
                                {step.description}
                            </CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

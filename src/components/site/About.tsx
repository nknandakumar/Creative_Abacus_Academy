import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-6 lg:col-span-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Creative Abacus Academy
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Creative Abacus Academy, established in 2021 by **Founder Anthony Serao** and led by **Headmaster Nirmala Sunitha Mendonca**, is recognized as the **best abacus center in Shivamogga**. Our ISO-certified curriculum has empowered **100+ students** through structured finger abacus and vedic maths programs.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2"><MapPin className="text-primary"/> Gandhinagar Branch</h3>
                <p className="text-muted-foreground">2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2"><MapPin className="text-primary"/> Devraj Aras Badavane Branch</h3>
                <p className="text-muted-foreground">Somina Koppa, Shivamogga</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Clock />
              <span>School Timings: Mon–Sat: 10 AM–6 PM</span>
            </div>
            <Button asChild>
              <Link href="#why-choose-us">Explore Our Story</Link>
            </Button>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <Image
              src="https://placehold.co/300x400.png"
              alt="Founder Anthony Serao"
              width={300}
              height={400}
              className="h-full w-full object-cover rounded-lg shadow-lg"
              data-ai-hint="portrait man"
            />
            <Image
              src="https://placehold.co/300x400.png"
              alt="Headmaster Nirmala Sunitha Mendonca"
              width={300}
              height={400}
              className="h-full w-full object-cover rounded-lg shadow-lg"
              data-ai-hint="portrait woman"
            />
             <Image
              src="https://placehold.co/600x400.png"
              alt="ISO Certificate of Creative Abacus Academy"
              width={600}
              height={400}
              className="col-span-2 h-full w-full object-cover rounded-lg shadow-lg"
              data-ai-hint="certificate document"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

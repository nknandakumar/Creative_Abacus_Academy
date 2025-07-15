import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FFF8ED] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Creative Abacus Academy
            </h2>
            <p className=" mx-auto text-muted-foreground md:text-xl" data-ai-hint="Description of the creative abacus academy">
 Creative Abacus Academy, established in 2021 by <strong>Founder Anthony Serao</strong> and led by <strong>Headmaster Nirmala Sunitha Mendonca</strong>, is recognized as the <strong>best abacus center in Shivamogga</strong>. Our ISO-certified curriculum has empowered <strong>100+ students</strong> through structured finger abacus and vedic maths programs.
            </p>
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Our Branches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Gandhinagar Branch</h3>
                  <p className="text-muted-foreground">2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga</p>
                </div>
                <div>
                  <h3 className="font-semibold">Devraj Aras Badavane Branch</h3>
                  <p className="text-muted-foreground">Somina Koppa, Shivamogga</p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}

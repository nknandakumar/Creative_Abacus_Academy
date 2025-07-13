import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Creative Abacus Academy
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Creative Abacus Academy, established in 2021 by Founder Anthony Serao and led by Headmaster Nirmala Sunitha Mendonca, is recognized as the best abacus center in Shivamogga. Our ISO-certified curriculum has empowered 100+ students through structured finger abacus and vedic maths programs.
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
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center gap-2">
                <Image
                  src="https://placehold.co/300x400.png"
                  alt="Founder Anthony Serao"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover rounded-lg shadow-lg"
                  data-ai-hint="portrait man"
                />
                <h3 className="font-bold text-lg">Anthony Serao</h3>
                <p className="text-sm text-muted-foreground">Founder</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
                <Image
                  src="https://placehold.co/300x400.png"
                  alt="Headmaster Nirmala Sunitha Mendonca"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover rounded-lg shadow-lg"
                  data-ai-hint="portrait woman"
                />
                <h3 className="font-bold text-lg">Nirmala Sunitha Mendonca</h3>
                <p className="text-sm text-muted-foreground">Headmaster</p>
            </div>
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

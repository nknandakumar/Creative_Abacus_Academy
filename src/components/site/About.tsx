import { MapPin } from "lucide-react";
//import {Badge} from "@/components/ui/badge"
export default function About() {
  return (
    <section id="about" className="w-full bg-[#FFF8ED] rounded-b-3xl py-12 md:py-24 lg:py-32">
                           <span className="bg-transparent rounded-full px-4 border text-center text-black " >About</span>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col space-y-8 md:space-y-10">
          {/* Heading */}
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Creative Abacus Academy
          </h2>

          {/* Paragraph */}
          <p className="max-w-7xl text-muted-foreground md:text-xl">
            Creative Abacus Academy, established in 2021 by <strong>Founder Anthony Serao</strong> and led by <strong>Headmaster Nirmala Sunitha Mendonca</strong>, is recognized as the <strong>best abacus center in Shivamogga</strong>. Our ISO-certified curriculum has empowered <strong>100+ students</strong> through structured finger abacus and vedic maths programs.
          </p>

          {/* Branch Heading */}
          <div>
            <h3 className="text-2xl md:text-3xl font-headline font-bold">
              Our Branches in Shivamogga
            </h3>
          </div>

          {/* Branches */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-20">
            {/* Branch 1 */}
            <div className="space-y-1 p-5 border rounded-3xl ">
              <div className="flex items-center gap-2">
                <MapPin className="text-accent" />
                <h4 className="text-lg font-headline font-semibold">Gopala Branch</h4>
              </div>
              <p className="text-muted-foreground pl-8">
                2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga
              </p>
            </div>

            {/* Branch 2 */}
            <div className="space-y-1 p-5  border rounded-3xl">
              <div className="flex items-center gap-2">
                <MapPin className="text-accent" />
                <h4 className="text-lg font-headline font-semibold">Sominakoppa Branch</h4>
              </div>
              <p className="text-muted-foreground pl-8">
                Devaraj Aras Badavane, Sominakoppa Shivamogga
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

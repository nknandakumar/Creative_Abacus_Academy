import { Button } from '@/components/ui/button';
import Link from 'next/link';
import whatsapp from "../../../public/whatsapp.svg"
import Image from 'next/image';
export default function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl rounded-xl bg-primary/10 p-8 text-center md:p-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready for your child to become a mental math champ?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-accent rounded-full text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Book Your Free Trial Class Now</Link>
            </Button>
            <Button size="lg" className='rounded-full bg-[#22C55E] hover:bg-[#22C55E] ' variant="outline" asChild>
              <a href="https://wa.me/9663444851" target="_blank" rel="noopener noreferrer">
               <Image src={whatsapp} alt="WhatsApp SVG"  width={40} height={40}  />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

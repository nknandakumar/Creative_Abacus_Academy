import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl rounded-xl bg-primary/10 p-8 text-center md:p-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready for your child to become a mental math champ?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Book Your Free Trial Class Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/9663444851" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M12.04 2.02c-5.46.06-9.92 4.54-9.98 10.02-.05 4.38 2.81 8.24 6.75 9.48l.48.15.14.45c.42 1.34 1.52 2.22 2.87 2.22h.02c.03 0 .05 0 .08 0l.47-.03.5-.14c3.9-1.1 6.84-4.8 6.94-9.26.1-5.5-4.32-10.03-9.82-10.09zm0 0l-.13.01c-.1 0-.2.01-.3.02h-.01l-.01.01z"></path><path d="M16.51 8.71a4.52 4.52 0 0 0-6.39 6.39l-1.6 1.6 1.6-1.6a4.52 4.52 0 0 0 6.39-6.39z"></path></svg>
                WhatsApp: 96634 44851
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

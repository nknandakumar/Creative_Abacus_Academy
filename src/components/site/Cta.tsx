import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl rounded-xl bg-primary/10 p-8 text-center md:p-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Start the Journey?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Give your child the gift of a brilliant mind. Enroll in a free trial class today and see the magic of abacus for yourself.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Join a Free Trial Class</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

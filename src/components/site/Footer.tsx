import Link from 'next/link';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="w-full bg-accent text-gray-400">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 md:px-6">
        {/* Left Column: Brand & Navigation */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-primary" />
            <span className="font-headline text-xl font-bold text-gray-100">AbacusAce</span>
          </Link>
          <p className="max-w-md text-sm text-gray-300">
            Empowering young minds through Abacus, Vedic Maths, and cognitive development programs. With certified training, structured levels, and a passion for excellence, we help children unlock their full mental potential.
          </p>

        
        </div>

        {/* Right Column: Contact Buttons */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Contact Us</h4>
            <p className="text-sm text-gray-300 mb-4">Have questions or want to enroll your child? Reach out to us anytime.</p>

            <div className="flex  gap-3">


              <Button asChild className="bg-white text-accent rounded-full px-4 font-headline ">

                <Link href="tel:9663444851">      <Phone className="h-4 w-4 text-accent" />Call Now</Link>
              </Button>
              <Link
                href="https://wa.me/+919449801748"
                className=" inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 transition "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} /> Whatsapp
              </Link>
            
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto flex items-center justify-center px-4 py-4 md:px-6">
          <p className="text-xs text-white">
            &copy; {new Date().getFullYear()} Creative Abacus Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

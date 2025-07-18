'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Why Us', href: '#why-choose-us' },
  { name: 'Courses', href: '#courses' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Feedback', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      setIsScrollingUp(currentScrollY < lastScrollY.current || currentScrollY <= 0);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header>
      {/* Desktop Nav */}
      <div
        className={cn(
          'fixed top-0 z-50 hidden w-full bg-[#FFF8ED] transition-transform duration-300 ease-in-out md:block',
          isScrollingUp ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752830737/CAC_logo-removebg-preview_loij72.webp" alt="Creative Abacus Academy Logo" width={42} height={42} className='w-full h-full' />
            <span className="font-headline text-accent text-2xl font-bold">AbacusAce</span>
          </Link>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4">
            <Button asChild className="bg-accent rounded-full px-4 font-headline text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Call</Link>
            </Button>
            <Button asChild className="bg-accent rounded-full font-headline text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Only */}
      <div
        className={cn(
          'fixed top-0 z-50 flex w-full items-start justify-end p-4 md:hidden transition-transform duration-300 ease-in-out',
          isScrollingUp ? 'translate-y-0' : '-translate-y-full',
          isScrolled ? 'bg-[#FFF8ED]' : 'bg-[#FFF8ED]'
        )}
      >
        <Sheet open={isSheetOpen}  onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white rounded-full p-2 ">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent  className='bg-[#FFF8ED]' side="right">
            <div className="flex flex-col bg-[#FFF8ED] gap-6 p-6">
              <Link href="/" className="flex items-center  gap-2" onClick={closeSheet}>
              <Image src="https://res.cloudinary.com/dk1zdm8gz/image/upload/v1752830737/CAC_logo-removebg-preview_loij72.webp" alt="Creative Abacus Academy Logo" width={42} height={42} className='w-full h-full' />
                <span className="font-headline text-xl font-bold">Creative Abacus Academy</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium"
                    onClick={closeSheet}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Button asChild size="lg" className="w-full bg-accent rounded-full text-accent-foreground hover:bg-accent/90" onClick={closeSheet}>
                <Link href="#contact">Call</Link>
              </Button>
              <Button asChild size="lg" className="w-full bg-accent rounded-full text-accent-foreground hover:bg-accent/90" onClick={closeSheet}>
                <Link href="#contact">Contact</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

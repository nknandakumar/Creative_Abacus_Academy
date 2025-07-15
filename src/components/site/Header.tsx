'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const lastScrollY = useRef(0); // useRef to persist the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set background blur on scroll
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY < lastScrollY.current || currentScrollY <= 0) {
        setIsScrollingUp(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsScrollingUp(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <>
    <header
      className={cn(
        'fixed top-0 hidden md:block z-50 w-full transition-transform duration-300 ease-in-out',
        isScrollingUp ? 'translate-y-0' : '-translate-y-full',
        isScrolled ? 'border-b bg-background/80 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-7 w-7 text-primary" />
          <span className="font-headline text-accent text-2xl font-bold">AbacusAce</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
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
        <div className="hidden md:flex gap-4">
        <Button asChild className="bg-accent rounded-full px-4 font-headline text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Call</Link>
          </Button>
          <Button asChild className="bg-accent rounded-full font-headline text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
    
      </div>
    </header>
    <div className={cn(
        'fixed top-0  md:hidden md:block z-50 transition-transform duration-300 ease-in-out',
        isScrollingUp ? 'translate-y-0' : '-translate-y-full',
        isScrolled ? 'border-b bg-background/80 backdrop-blur-md' : 'bg-transparent'
      )} >
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
                  <Sparkles className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-bold">AbacusAc</span>
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
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent rounded-full text-accent-foreground hover:bg-accent/90"
                  onClick={closeSheet}
                >
                  <Link href="#contact">Call</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent rounded-full text-accent-foreground hover:bg-accent/90"
                  onClick={closeSheet}
                >
                  <Link href="#contact">Contact</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
     
    </>
  );
}

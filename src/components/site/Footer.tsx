import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Twitter', href: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-primary" />
            <span className="font-headline text-2xl font-bold">AbacusAce</span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            Creative Abacus Academy: Nurturing young minds for a brighter future.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-headline font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
            <li><Link href="#courses" className="text-sm text-muted-foreground hover:text-primary">Courses</Link></li>
            <li><Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary">Gallery</Link></li>
            <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-headline font-semibold">Contact Us</h4>
          <ul className="space-y-1">
            <li className="text-sm text-muted-foreground">info@creativeabacus.com</li>
            <li className="text-sm text-muted-foreground">+1 (234) 567-890</li>
            <li className="text-sm text-muted-foreground">123 Learning Lane, Knowledge City</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-headline font-semibold">Follow Us</h4>
          <ul className="space-y-1">
            {socialLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Creative Abacus Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

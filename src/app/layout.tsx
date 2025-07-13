import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Poppins, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-poppins',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Best Abacus Classes in Shivamogga | Creative Abacus Academy',
  description: 'ISO-Certified Abacus & Vedic Maths Training in Shivamogga for kids. We offer Levels 0–8, championship prep, and have trained over 100 students. Book a free trial!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "font-body antialiased",
          poppins.variable,
          ptSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});


export const metadata: Metadata = {
  title: 'AbacusAce',
  description: 'Creative Abacus Academy for unlocking your child\'s potential.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "font-body antialiased",
          dmSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

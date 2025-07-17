import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import About from '@/components/site/About';
import WhyChooseUs from '@/components/site/WhyChooseUs';
import Courses from '@/components/site/Courses';
import Benefits from '@/components/site/Benefits';
import Gallery from '@/components/site/Gallery';
import Testimonials from '@/components/site/Testimonials';
import Faq from '@/components/site/Faq';

import Contact from '@/components/site/Contact';
import Footer from '@/components/site/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyChooseUs />
        <Courses />
        <Benefits />
        <Gallery />
        <Testimonials />
        <Faq />
    
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

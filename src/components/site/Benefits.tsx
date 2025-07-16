"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Enhances Memory & Concentration",
    description: "Sharpens focus and improves memory retention through mental exercises.",
    image: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Boosts Mental Calculation Speed",
    description: "Develops lightning-fast calculation abilities without calculator dependency.",
    image: "https://images.unsplash.com/photo-1711409645921-ef3db0501f96?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Builds Confidence & Self-Discipline",
    description: "Mastering a new skill builds self-esteem and a positive attitude towards learning.",
    image: "https://images.unsplash.com/photo-1625662171040-8d196a082232?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Improves Academic Performance",
    description: "Strong foundational skills in math positively impact overall academic success.",
    image: "https://images.unsplash.com/photo-1631047085941-a29e9730a7e6?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sharpens Observation & Listening Skills",
    description: "Improves the ability to listen attentively and observe details accurately.",
    image: "https://images.unsplash.com/photo-1623287072502-de478853dc0f?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Develops Logical & Visualization Abilities",
    description: "Enhances problem-solving skills and the ability to visualize complex problems.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function AnimatedBenefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    benefits.forEach((_, i) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: `.benefit-${i}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        })
      );
    });

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  return (
   <section id="benefits" className="py-12 md:py-24 lg:py-32 bg-secondary text-center " >
   
        <div className="mx-auto max-w-3xl pb-20 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Abacus? Benefits for Your Child
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
          Abacus training is more than just math. It&apos;s a full-brain workout that develops essential life skills.
          </p>
        </div>
    <section className="relative w-full min-h-screen  text-white">
      
      <div className="sticky top-0 h-screen w-full z-0">
        <div ref={imageContainerRef} className="relative w-full h-full">
          <Image
            src={benefits[activeIndex].image}
            alt={benefits[activeIndex].title}
            fill
            className="object-cover transition-opacity duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      <div className="relative z-10">
        {benefits.map((benefit, i) => (
          <section
            key={i}
            className={`benefit-${i} flex items-center justify-center min-h-screen px-6 md:px-20`}
          >
            <div className="max-w-2xl text-center space-y-6">
           
              <h2 className="text-3xl md:text-6xl font-bold">{benefit.title}</h2>
              <p className="text-lg md:text-2xl text-white/80">{benefit.description}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
     </section>
  );
}

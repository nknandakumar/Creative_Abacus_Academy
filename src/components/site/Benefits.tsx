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
    image: "https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Boosts Mental Calculation Speed",
    description: "Develops lightning-fast calculation abilities without calculator dependency.",
    image: "https://images.unsplash.com/photo-1711409645921-ef3db0501f96?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Builds Confidence & Self-Discipline",
    description: "Mastering a new skill builds self-esteem and a positive attitude towards learning.",
    image: "https://images.unsplash.com/photo-1625662171040-8d196a082232?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Improves Academic Performance",
    description: "Strong foundational skills in math positively impact overall academic success.",
    image: "https://images.unsplash.com/photo-1580192270066-bed2e3055024?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sharpens Observation & Listening Skills",
    description: "Improves the ability to listen attentively and observe details accurately.",
    image: "https://images.unsplash.com/photo-1623287072502-de478853dc0f?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Develops Logical & Visualization Abilities",
    description: "Enhances problem-solving skills and the ability to visualize complex problems.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

export default function AnimatedBenefits() {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!imageWrapperRef.current) return;

    const zoomBlurTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: imageWrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    zoomBlurTimeline.fromTo(
      imageWrapperRef.current,
      {
        scale: 1,
        filter: "blur(0px)",
      },
      {
        scale: 1.07,
        filter: "blur(3px)",
        ease: "none",
        transformOrigin: "center center",
      }
    );
  }, []);

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

    return () => triggers.forEach(trigger => trigger.kill());
  }, []);

  return (
    <section id="benefits" className="py-12 md:py-24 lg:py-32 bg-secondary text-center">
      <div className="mx-auto max-w-3xl pb-20 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Abacus? Benefits for Your Child
        </h2>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Abacus training is more than just math. It&apos;s a full-brain workout that develops essential life skills.
        </p>
      </div>

      {/* Sticky Background with Smooth Zoom & Blur */}
      <section className="relative w-full min-h-screen text-white">
        <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
          <div
            ref={imageWrapperRef}
            className="w-full h-full will-change-transform scale-100 transition-transform duration-1000 ease-linear"
          >
            <Image
              src={benefits[activeIndex].image}
              alt={benefits[activeIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {benefits.map((benefit, i) => (
            <section
              key={i}
              className={`benefit-${i} flex items-center justify-center min-h-screen px-6 md:px-20`}
            >
              <div className="max-w-2xl text-center space-y-6">
                <h2 className="text-3xl font-headline md:text-6xl font-bold">{benefit.title}</h2>
                <p className="text-lg md:text-2xl font-headline text-white/80">{benefit.description}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}

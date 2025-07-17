"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";




gsap.registerPlugin(ScrollTrigger);

const programHighlights = [
  {
    title: "Abacus Levels 0–8",
    desc: "Step-by-step finger abacus training & mental visualization",
    color: "bg-[#BDEE3B]",
  },
  {
    title: "Vedic Maths",
    desc: "Ancient speed math techniques for accuracy & fun",
    color: "bg-[#CA9BF9] ",
  },
  {
    title: "Jolly Phonics",
    desc: "Fun and effective way to learn to read and write",
    color: "bg-black text-white",
  },
  {
    title: "Handwriting Classes",
    desc: "Improve legibility and speed for all ages",
    color: "bg-blue-200",
  },
  {
    title: "Language Basics",
    desc: "Foundational understanding of various languages",
    color: "bg-pink-300",
  },
  {
    title: "NTT Training",
    desc: "Comprehensive course for aspiring nursery teachers",
    color: "bg-orange-300",
  },
];

export default function Courses() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!scrollRef.current || !sectionRef.current) return;

      const getToValue = () =>
        -(scrollRef.current!.scrollWidth - window.innerWidth);

      gsap.fromTo(
        scrollRef.current,
        { x: 0 },
        {
          x: getToValue,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: "top top",
            end: () =>
              `+=${scrollRef.current!.scrollWidth - window.innerWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="courses" className="w-full bg-[#FFF8ED] py-20">
      {/* Fixed Heading */}
      <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Courses with Other Programs
        </h2>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Structured programs designed for comprehensive skill development and competitive success.
        </p>
      </div>

      {/* Scroll Section */}
      <div
        ref={sectionRef}
        className="horizontal w-screen h-[80vh] overflow-hidden"
      >
        <div className="pin-wrap h-full w-screen flex items-center justify-start">
          <div
            className="animation-wrap flex gap-6 px-10 items-center"
            ref={scrollRef}
          >
            {programHighlights.map((item, index) => (
              <div
                key={index}
                className={`shrink-0 w-[80vw]  md:w-[30vw] h-[350px] p-6 rounded-3xl ${item.color} flex flex-col gap-3`}
              >
                <div>
                  <div className="uppercase text-xs underline tracking-wide mb-4">
                    Program
                  </div>
                  <h3 className="text-3xl font-headline md:text-5xl font-bold tight">
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`text-base md:text-lg ${item.title[0] === "J"
                      ? "text-white"
                      : "text-gray-800/80"
                    } dark:text-white/90 mt-4`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

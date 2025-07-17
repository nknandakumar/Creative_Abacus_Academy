"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface SlideData {
  text: string;
  author: string;
  location: string;
  rating: number;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { text, author, location, rating } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.95) rotateX(6deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s ease",
          transformOrigin: "bottom",
        }}
      >
        <Card className="p-8 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-6">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Quote className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex justify-center mb-4 mt-2">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-[#F4D75D] fill-current" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
            "{text}"
          </blockquote>

          {/* Author Info */}
          <div className="text-center">
            <div className="font-semibold text-foreground">{author}</div>
            <div className="text-sm text-muted-foreground">{location}</div>
          </div>
        </Card>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

export default function Carousel() {
  const slides: SlideData[] = [
    {
      text: "My daughter's math speed and confidence skyrocketed after joining Creative Abacus Academy. The trainers are incredibly patient and skilled.",
      author: "Priya Sharma",
      location: "Gandhinagar Branch",
      rating: 5,
    },
    {
      text: "The instructors are amazing, and the results are visible within just a few weeks. Best investment for my child's future!",
      author: "Raj Kumar",
      location: "Devraj Aras Badavane",
      rating: 5,
    },
    {
      text: "ISO certification and experienced teachers make this the best abacus center in Shivamogga. Highly recommended!",
      author: "Meera Nair",
      location: "Gandhinagar Branch",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    if (index !== current) setCurrent(index);
  };

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center mt-6 md:mt-4 w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Previous"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Next"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

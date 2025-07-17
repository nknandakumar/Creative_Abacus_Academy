import { cn } from "../../lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  vertical?: boolean;
  children: React.ReactNode;
}

export function Marquee({
  className,
  reverse = false,
  vertical = false,
  children,
  ...props
}: MarqueeProps) {
  const direction = reverse ? "reverse" : "normal";
  const isVertical = vertical ? "marquee-vertical" : "marquee-horizontal";

  return (
    <div
      {...props}
      className={cn(
        "relative overflow-hidden w-full h-fit",
        vertical ? "flex-col" : "flex",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-6 animate-marquee",
          isVertical,
          `[animation-direction:${direction}]`
        )}
      >
        {/* Duplicate content for seamless loop */}
        <div className="flex gap-6">{children}</div>
        <div className="flex gap-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

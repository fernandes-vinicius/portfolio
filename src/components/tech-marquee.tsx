import type { TechStack } from "@/lib/sanity/types";

type TechMarqueeProps = {
  techStack: TechStack[];
};

export function TechMarquee({ techStack = [] }: TechMarqueeProps) {
  const items = [
    ...techStack.map((tech) => tech.title),
    ...techStack.map((tech) => tech.title),
  ];

  return (
    <div className="relative overflow-hidden border-y bg-background py-5">
      {/* Fade edges */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

      <div className="flex animate-[marquee_28s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {items.map((tech, index) => (
          <span
            key={`${tech}-${String(index)}`}
            className="flex shrink-0 items-center gap-3 font-sans text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-border" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

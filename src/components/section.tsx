import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

function Section({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"section"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "section";

  return (
    <Comp
      data-slot="section"
      className={cn("relative bg-background px-6 py-28", className)}
      {...props}
    />
  );
}

function SectionContainer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-container"
      className={cn("mx-auto w-full max-w-6xl", className)}
      {...props}
    />
  );
}

function SectionHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-header"
      className={cn("reveal mb-16", className)}
      {...props}
    />
  );
}

function SectionTagline({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="section-tagline"
      className={cn(
        "mb-3 bg-brand-gradient bg-clip-text font-semibold text-transparent text-xs uppercase tracking-widest",
        className,
      )}
      {...props}
    />
  );
}

function SectionTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="section-title"
      className={cn(
        "mb-3 font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-foreground leading-[1.1] tracking-[-0.035em]",
        className,
      )}
      {...props}
    />
  );
}

function SectionDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="section-description"
      className={cn(
        "max-w-md font-normal text-base text-muted-foreground leading-7",
        className,
      )}
      {...props}
    />
  );
}

function SectionContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-content"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function SectionDivider({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-divider"
      className={cn(
        "-translate-x-1/2 absolute top-0 left-1/2 h-px w-full max-w-5xl bg-linear-to-r from-transparent via-border/50 to-transparent",
        className,
      )}
      {...props}
    />
  );
}

export {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTagline,
  SectionTitle,
  SectionDescription,
  SectionContent,
  SectionDivider,
};

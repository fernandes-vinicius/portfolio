import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDivider,
} from "@/components/section";

export function Footer() {
  return (
    <Section asChild className="px-6 py-8">
      <footer>
        <SectionDivider />

        <SectionContainer className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <SectionContent className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="font-extrabold text-muted-foreground text-xs tracking-tighter"
            >
              vf
            </span>
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-muted-foreground opacity-75"
            />
            <span className="text-muted-foreground text-xs opacity-75">
              Vinícius Fernandes
              <span aria-hidden="true"> · </span>
              Frontend Engineer
            </span>
          </SectionContent>

          <p className="text-muted-foreground text-xs opacity-50">
            <small>
              Built with React
              <span aria-hidden="true"> · </span>
              TypeScript
              <span aria-hidden="true"> · </span>
              Tailwind CSS
            </small>
          </p>
        </SectionContainer>
      </footer>
    </Section>
  );
}

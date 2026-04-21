import { IconBox } from "@/components/icon-box";
import {
  CpuIcon,
  GlobeIcon,
  LayersIcon,
  PaintBrushIcon,
  WrenchIcon,
  ZapIcon,
} from "@/components/icons";
import { RevealCard } from "@/components/reveal-card";
import { TechTag } from "@/components/tech-tag";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SkillGroup } from "@/lib/sanity/types";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  skillGroup: SkillGroup;
  delay: number;
};

type SkillGroupIconType = Record<
  NonNullable<SkillGroup["icon"]>,
  React.ElementType
>;

type ColorSchemaType = Record<
  NonNullable<SkillGroup["colorSchema"]>,
  { bg: string; text: string; border: string }
>;

const colorSchemaMap: ColorSchemaType = {
  blue: {
    bg: "bg-blue-500/10!",
    text: "text-blue-600! dark:text-blue-400!",
    border: "border-blue-500/20!",
  },
  violet: {
    bg: "bg-violet-500/10!",
    text: "text-violet-600! dark:text-violet-400!",
    border: "border-violet-500/20!",
  },
  green: {
    bg: "bg-green-500/10!",
    text: "text-green-600! dark:text-green-400!",
    border: "border-green-500/20!",
  },
  yellow: {
    bg: "bg-yellow-500/10!",
    text: "text-yellow-600! dark:text-yellow-400!",
    border: "border-yellow-500/20!",
  },
  red: {
    bg: "bg-red-500/10!",
    text: "text-red-600! dark:text-red-400!",
    border: "border-red-500/20!",
  },
  gray: {
    bg: "bg-gray-500/10!",
    text: "text-gray-600! dark:text-gray-400!",
    border: "border-gray-500/20!",
  },
} as const;

export function SkillCard({ skillGroup, delay }: SkillCardProps) {
  const SkillGroupIconMap: SkillGroupIconType = {
    layers: LayersIcon,
    paintBrush: PaintBrushIcon,
    cpu: CpuIcon,
    zap: ZapIcon,
    globe: GlobeIcon,
    wrench: WrenchIcon,
  };

  const SkillGroupIcon = SkillGroupIconMap[skillGroup.icon ?? "layers"];

  const colorSchema = colorSchemaMap[skillGroup.colorSchema ?? "gray"];

  return (
    <RevealCard threshold={0.06} rootMargin="-40px 0px" delay={delay}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <IconBox className={colorSchema.bg}>
            <SkillGroupIcon size={15} className={colorSchema.text} />
          </IconBox>
          <h3 className="font-semibold">{skillGroup.category}</h3>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skillGroup.techStack?.map((techStack) => (
            <TechTag
              key={techStack._key}
              className={cn(
                colorSchema.bg,
                colorSchema.text,
                colorSchema.border,
              )}
            >
              {techStack.title}
            </TechTag>
          ))}
        </div>
      </CardContent>
    </RevealCard>
  );
}

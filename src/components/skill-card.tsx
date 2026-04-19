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

type SkillCardProps = {
  skillGroup: SkillGroup;
  delay: number;
};

type SkillGroupIconType = Record<
  NonNullable<SkillGroup["icon"]>,
  React.ElementType
>;

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

  return (
    <RevealCard threshold={0.06} rootMargin="-40px 0px" delay={delay}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <IconBox
          // className=""
          // style={{ background: group.iconBg }}
          >
            <SkillGroupIcon
              size={15}
              // style={{ color: group.iconColor }}
            />
          </IconBox>
          <h3 className="font-semibold">{skillGroup.category}</h3>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skillGroup.techStack?.map((techStack) => (
            <TechTag key={techStack._key}>{techStack.title}</TechTag>
          ))}
        </div>
      </CardContent>
    </RevealCard>
  );
}

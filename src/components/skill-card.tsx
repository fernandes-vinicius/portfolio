"use client";

import { TargetIcon } from "@/components/icons";
import { TechTag } from "@/components/tech-tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import type { SkillGroup } from "@/lib/sanity/types";

type SkillCardProps = {
  skillGroup: SkillGroup;
  delay: number;
};

export function SkillCard({ skillGroup, delay }: SkillCardProps) {
  const { ref } = useInViewOnce<HTMLDivElement>({
    threshold: 0.06,
    rootMargin: "-40px 0px",
  });

  return (
    <Card
      ref={ref}
      className="group reveal transition-all duration-300 hover:shadow-lg hover:ring-primary/10 hover:dark:ring-primary-foreground/20"
      style={{ transitionDelay: `${delay}s` }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div
            className="rounded-lg bg-primary/0 p-2 text-primary"
            //   style={{ background: group.iconBg }}
          >
            <TargetIcon
              size={15}
              //   style={{ color: group.iconColor }}
            />
          </div>
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
    </Card>
  );
}

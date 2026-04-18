"use client";

import { IconBox } from "@/components/icon-box";
import { TargetIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import type { Differential } from "@/lib/sanity/types";

type DifferentialCardProps = {
  differential: Differential;
  delay?: number;
};

export function DifferentialCard({
  differential,
  delay = 0,
}: DifferentialCardProps) {
  const { ref } = useInViewOnce({
    threshold: 0.08,
    rootMargin: "-50px 0px",
  });

  // const { Icon } = item;

  return (
    <Card
      ref={ref}
      className="group reveal transition-all duration-300 hover:shadow-lg hover:ring-primary/10 hover:dark:ring-primary-foreground/20"
      style={{ transitionDelay: `${delay}s` }}
    >
      <CardHeader>
        <CardTitle className="flex flex-col gap-4">
          <IconBox size="lg">
            <TargetIcon size={18} />
            {/* <Icon size={18} className="text-primary" /> */}
          </IconBox>
          <h3 className="font-bold">{differential.title}</h3>
        </CardTitle>
        <CardDescription className="flex-1">
          <p>{differential.description}</p>
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Badge variant="tertiary" className="h-auto gap-2 px-3 py-2">
          <div className="size-1.5 shrink-0 rounded-full bg-current" />
          {differential.metric}
        </Badge>
      </CardFooter>
    </Card>
  );
}

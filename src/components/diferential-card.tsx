"use client";

import { BarChart2, Layers, Target, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { IconBox } from "./icon-box";

const differentials = [
  {
    Icon: Target,
    title: "Performance-first mindset",
    description:
      "I treat performance as a feature. Every decision — from component design to data fetching — is evaluated through Core Web Vitals and real user impact.",
    metric: "LCP reduced by up to 40% in production",
  },
  {
    Icon: Layers,
    title: "Strong frontend architecture",
    description:
      "I design systems that scale. From design tokens to shared component libraries, I build foundations that teams can grow on — not around.",
    metric: "Design systems adopted by 3+ teams",
  },
  {
    Icon: BarChart2,
    title: "Business metrics focused",
    description:
      "I understand that the best code is the one that moves the needle. I tie engineering decisions to outcomes: retention, conversion, and speed.",
    metric: "18% user retention increase via UI optimization",
  },
  {
    Icon: Users,
    title: "Cross-functional collaboration",
    description:
      "I work closely with designers, product managers, and backend engineers — bridging the gap between technical constraints and product vision.",
    metric: "6+ years in cross-functional product teams",
  },
];

type Differential = (typeof differentials)[0];

type DifferentialCardProps = {
  item: Differential;
  delay: number;
};

export function DifferentialCard({ item, delay }: DifferentialCardProps) {
  const { ref } = useInViewOnce<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: "-50px 0px",
  });

  const { Icon } = item;

  return (
    <Card
      ref={ref}
      className="reveal transition-all duration-300 hover:shadow-lg hover:ring-foreground/20"
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 6px 28px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.07)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <CardHeader>
        <CardTitle className="flex flex-col gap-4">
          <IconBox size="lg">
            <Icon size={18} className="text-primary" />
          </IconBox>
          <h3 className="font-bold">{item.title}</h3>
        </CardTitle>
        <CardDescription className="flex-1">
          <p>{item.description}</p>
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Badge variant="tertiary" className="h-auto gap-2 px-3 py-2">
          <div className="size-1.5 shrink-0 rounded-full bg-current" />
          {item.metric}
        </Badge>
      </CardFooter>
    </Card>
  );
}

import type { DifferentialItem } from "@/features/differentials/types/differential-types";
import { IconBox } from "@/shared/components/icon-box";
import {
  BarChartIcon,
  LayersIcon,
  TargetIcon,
  UsersIcon,
} from "@/shared/components/icons";
import { RevealCard } from "@/shared/components/reveal-card";
import { Badge } from "@/shared/components/ui/badge";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

type DifferentialCardProps = {
  differential: DifferentialItem;
  delay?: number;
};

type DifferentialIconType = Record<
  NonNullable<DifferentialItem["icon"]>,
  React.ElementType
>;

export function DifferentialCard(props: DifferentialCardProps) {
  const { differential, delay = 0 } = props;

  const DifferentialIconMap: DifferentialIconType = {
    target: TargetIcon,
    layers: LayersIcon,
    barChart: BarChartIcon,
    users: UsersIcon,
  };

  const DifferentialIcon = DifferentialIconMap[differential.icon ?? "target"];

  return (
    <RevealCard threshold={0.08} rootMargin="-50px 0px" delay={delay}>
      <CardHeader>
        <CardTitle className="flex flex-col gap-4">
          <IconBox size="lg">
            <DifferentialIcon size={18} />
          </IconBox>
          <h3 className="font-bold">{differential.title}</h3>
        </CardTitle>
        <CardDescription className="flex-1">
          {differential.description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Badge variant="tertiary" className="h-auto gap-2 px-3 py-2">
          <div className="size-1.5 shrink-0 rounded-full bg-current" />
          {differential.metric}
        </Badge>
      </CardFooter>
    </RevealCard>
  );
}

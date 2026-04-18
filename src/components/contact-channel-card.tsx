import { IconBox } from "@/components/icon-box";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ContactChannelCardProps = {
  icon: React.ElementType;
  label: string;
  sub: string;
};

export function ContactChannelCard(props: ContactChannelCardProps) {
  const { icon: Icon, label, sub } = props;

  return (
    <Card className="flex flex-1 flex-row items-start gap-3 p-4 text-left transition-all duration-200 group-hover:shadow-lg group-hover:ring-foreground/20 group-focus-visible:shadow-lg group-focus-visible:ring-foreground/20">
      <IconBox size="sm">
        <Icon size={14} aria-hidden="true" focusable="false" />
      </IconBox>
      <CardHeader className="flex-1 gap-0.5 p-0!">
        <CardTitle className="justify-self-start font-semibold text-sm">
          {label}
        </CardTitle>
        <CardDescription className="justify-self-start text-xs">
          {sub}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

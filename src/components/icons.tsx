import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  Code,
  ExternalLink,
  Flame,
  MapPin,
  Menu,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

export type IconProps = {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  "aria-label"?: string;
};

export const MenuIcon = (props: IconProps) => <Menu {...props} />;
export const CloseIcon = (props: IconProps) => <X {...props} />;
export const ArrowRightIcon = (props: IconProps) => <ArrowRight {...props} />;
export const MapPinIcon = (props: IconProps) => <MapPin {...props} />;
export const CalendarIcon = (props: IconProps) => <Calendar {...props} />;
export const ArrowUpRightIcon = (props: IconProps) => (
  <ArrowUpRight {...props} />
);
export const BarChart3Icon = (props: IconProps) => <BarChart3 {...props} />;
export const TrendingUpIcon = (props: IconProps) => <TrendingUp {...props} />;
export const UsersIcon = (props: IconProps) => <Users {...props} />;
export const ZapIcon = (props: IconProps) => <Zap {...props} />;
export const ExternalLinkIcon = (props: IconProps) => (
  <ExternalLink {...props} />
);
export const CodeIcon = (props: IconProps) => <Code {...props} />;
export const FlameIcon = (props: IconProps) => <Flame {...props} />;

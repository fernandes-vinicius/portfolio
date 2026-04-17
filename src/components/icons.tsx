import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Menu,
  X,
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

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  Code,
  ExternalLink,
  Flame,
  Link,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export type IconProps = {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean | "true" | "false";
  focusable?: "false" | "true";
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
export const TargetIcon = (props: IconProps) => <Target {...props} />;
export const MailIcon = (props: IconProps) => <Mail {...props} />;
export const MessageCircleIcon = (props: IconProps) => (
  <MessageCircle {...props} />
);

export const GitHubIcon = (props: IconProps) => <FaGithub {...props} />;
export const LinkedInIcon = (props: IconProps) => <FaLinkedin {...props} />;
export const TwitterIcon = (props: IconProps) => <FaXTwitter {...props} />;
export const WhatsAppIcon = (props: IconProps) => <FaWhatsapp {...props} />;
export const LinkIcon = (props: IconProps) => <Link {...props} />;

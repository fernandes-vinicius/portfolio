import type { IconProps } from "@/components/icons";
import {
  GitHubIcon,
  LinkedInIcon,
  LinkIcon,
  TwitterIcon,
} from "@/components/icons";
import type { SocialLink } from "@/lib/sanity/types";

type SocialIconType = Record<
  NonNullable<SocialLink["platform"]>,
  React.ComponentType<IconProps>
>;

const socialIconMap: SocialIconType = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  other: LinkIcon,
};

export function getSocialIcon(
  platform: SocialLink["platform"],
): React.ComponentType<IconProps> {
  return socialIconMap[platform ?? "other"] ?? LinkIcon;
}

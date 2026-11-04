import type { ContactSocialLink } from "@/features/contact/types/contact-types";
import type { IconProps } from "@/shared/components/icons";
import {
  GitHubIcon,
  LinkedInIcon,
  LinkIcon,
  TwitterIcon,
} from "@/shared/components/icons";

type SocialIconType = Record<
  NonNullable<ContactSocialLink["platform"]>,
  React.ComponentType<IconProps>
>;

const socialIconMap: SocialIconType = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  other: LinkIcon,
};

export function getSocialIcon(
  platform: ContactSocialLink["platform"],
): React.ComponentType<IconProps> {
  return socialIconMap[platform ?? "other"] ?? LinkIcon;
}

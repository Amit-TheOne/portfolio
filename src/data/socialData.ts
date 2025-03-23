import LinkedInIcon from "@/assets/icons/social-icons/linkedin.svg";
import TwitterIcon from "@/assets/icons/social-icons/twitter.svg";
import InstagramIcon from "@/assets/icons/social-icons/instagram.svg";
import GithubIcon from "@/assets/icons/tech-icons/github.svg";
import BentoIcon from "@/assets/icons/social-icons/bento.svg";
import MailIcon from "@/assets/icons/social-icons/email.svg";

interface SocialData {
    title: string;
    href: string;
    iconType: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const socialData: SocialData[] = [
    {
        title: "GitHub",
        href: "https://github.com/Amit-TheOne",
        iconType: GithubIcon,
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/amitdewangan01",
        iconType: LinkedInIcon,
    },
    {
        title: "Twitter",
        href: "https://twitter.com/amitdewangan01",
        iconType: TwitterIcon,
    },
    {
        title: "Instagram",
        href: "https://instagram.com/_amitdewangan",
        iconType: InstagramIcon,
    },
    {
        title: "Bento",
        href: "https://bento.me/amitdewangan",
        iconType: BentoIcon,
    },
    {
        title: "Mail",
        href: "mailto:hello@amitdewangan.dev",
        iconType: MailIcon,
    },
];

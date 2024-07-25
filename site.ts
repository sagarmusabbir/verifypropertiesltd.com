import { PiArrowDown, PiArrowUpRight, PiHouse } from "react-icons/pi";
import { LinkItem } from "./lib/types";
import { SiGithub } from "react-icons/si";

export const links: LinkItem[] = [
  { id: 0, name: "Home", to: "/", icon: PiHouse },
  {
    id: 1,
    name: "About",
    to: "/#about",
    icon: PiArrowDown,
  },
  { id: 2, name: "Features", to: "/#feature", icon: PiArrowDown },
  { id: 3, name: "Services", to: "/#service", icon: PiArrowDown },
];

export const siteData = {
  title:
    "Property Management No Longer Needs To Be Costly | Verify Properties Limited",
  author: "Musabbir Sagar",
  headerTitle:
    "Property Management No Longer Needs To Be Costly | Verify Properties Limited",
  profileUrl: "/logo.svg",
  headerDescription:
    "Affordable Property Management Solutions: Revolutionizing the way you manage properties with cost-effective, efficient service.",
  footerText: "© All rights reserved",
  language: "en-gb",
  locale: "en-GB",
  websiteUrl: "https://verifypropertiesltd.com",
  username: "sagarmusabbir",
};

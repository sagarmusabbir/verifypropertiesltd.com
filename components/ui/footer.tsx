import Image from "next/image";
import {
  Footer,
  FooterBrand,
  FooterLink,
  FooterSection,
  FooterSocial,
} from "@thirdbracket/bracketui";
import { BsFacebook, BsLinkedin, BsMailbox, BsPhone } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { SiFacebook } from "react-icons/si";

const FooterMain = () => {
  return (
    <Footer>
      <FooterSection className="col-span-2">
        <FooterBrand className="-ml-1">
          <Image
            src="logo32.svg"
            width={32}
            height={22}
            alt=""
            className="h-auto w-9 self-start"
          />
          You cost efficient property management solution.
        </FooterBrand>
        <div className="flex -ml-1.5 gap-x-4 justify-start items-center">
          <FooterSocial
            href="mailto:your@email.com"
            icon={<BsMailbox size={20} />}
            label="Email"
          />
          <FooterSocial
            href="tel:+1234567890"
            icon={<BsPhone size={18} />}
            label="Phone"
          />
        </div>
      </FooterSection>

      <FooterSection title="About">
        <FooterLink href="/components">About Us</FooterLink>
        <FooterLink href="/templates">Our Team</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
      </FooterSection>

      <FooterSection title="Resources">
        <FooterLink href="/docs">Blog</FooterLink>
        <FooterLink href="/guides">Contact</FooterLink>
        <FooterLink href="/support">Support</FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/terms">Terms of Service</FooterLink>
      </FooterSection>
      <FooterSection title="More">
        <FooterLink href="/components">Components</FooterLink>
        <FooterLink href="/templates">Templates</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
      </FooterSection>
    </Footer>
  );
};
export default FooterMain;

// import Image from "next/image";
// import {
//   Footer,
//   FooterBrand,
//   FooterLink,
//   FooterSection,
//   FooterSocial,
// } from "@thirdbracket/bracketui";
// import { BsFacebook, BsLinkedin, BsMailbox, BsPhone } from "react-icons/bs";
// import { FaFacebook, FaLinkedin } from "react-icons/fa6";
// import { HiMail } from "react-icons/hi";
// import { SiFacebook } from "react-icons/si";

// const FooterMain = () => {
//   return (
//     <Footer>
//       <FooterSection className="col-span-2">
//         <FooterBrand className="-ml-1">
//           <Image
//             src="logo32.svg"
//             width={32}
//             height={22}
//             alt=""
//             className="h-auto w-9 self-start"
//           />
//           You cost efficient property management solution.
//         </FooterBrand>
//         <div className="flex -ml-1.5 gap-x-4 justify-start items-center">
//           <FooterSocial
//             href="mailto:your@email.com"
//             icon={<BsMailbox size={20} />}
//             label="Email"
//           />
//           <FooterSocial
//             href="tel:+1234567890"
//             icon={<BsPhone size={18} />}
//             label="Phone"
//           />
//         </div>
//       </FooterSection>

//       <FooterSection title="About">
//         <FooterLink href="/components">About Us</FooterLink>
//         <FooterLink href="/templates">Our Team</FooterLink>
//         <FooterLink href="/pricing">Pricing</FooterLink>
//       </FooterSection>

//       <FooterSection title="Resources">
//         <FooterLink href="/docs">Blog</FooterLink>
//         <FooterLink href="/guides">Contact</FooterLink>
//         <FooterLink href="/support">Support</FooterLink>
//       </FooterSection>

//       <FooterSection title="Legal">
//         <FooterLink href="/privacy">Privacy Policy</FooterLink>
//         <FooterLink href="/terms">Terms of Service</FooterLink>
//       </FooterSection>
//       <FooterSection title="More">
//         <FooterLink href="/components">Components</FooterLink>
//         <FooterLink href="/templates">Templates</FooterLink>
//         <FooterLink href="/pricing">Pricing</FooterLink>
//       </FooterSection>
//     </Footer>
//   );
// };
// export default FooterMain;

import {
  Footer,
  FooterBottom,
  FooterBrand,
  FooterLink,
  FooterSection,
  FooterSocial,
  FooterText,
  ThemeToggle,
} from "@thirdbracket/bracketui";

import {
  RiFacebookLine,
  RiGithubLine,
  RiGoogleLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiWhatsappLine,
  RiYoutubeLine,
} from "react-icons/ri";

import MyLogo from "../../public/logo40.svg";
import Image from "next/image";

const SiteFooter = () => {
  return (
    <Footer
      theme={{
        background: "bg-white dark:bg-black",
        border: "border-gray-500/40",
      }}
    >
      <FooterSection className="col-span-2 !py-4 md:py-0">
        <FooterBrand
          logo={
            <Image
              priority
              src={MyLogo}
              alt="Description of my icon"
              width={60} // Specify dimensions for image optimization
              height={40}
              className="w-auto h-6"
            />
          }
        >
          <p className="text-gray-600 dark:text-gray-500 text-base ">
            You cost efficient property management solution.
          </p>
          <p className="text-gray-600 dark:text-gray-500 text-base ">
            iftywarid@gmail.com
          </p>
        </FooterBrand>

        <div className="flex  gap-x-6 justify-start items-center">
          <FooterSocial
            href="https://www.facebook.com/thirdbracketuk"
            icon={<RiFacebookLine size={20} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://www.linkedin.com/company/thirdbracket"
            icon={<RiLinkedinLine size={20} />}
            label="LinkedIn"
          />
          <FooterSocial
            href="https://github.com/thirdbracketuk"
            icon={<RiGithubLine size={20} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://www.instagram.com/thirdbracketuk"
            icon={<RiInstagramLine size={20} />}
            label="Instagram"
          />
          <FooterSocial
            href="https://www.youtube.com/@thirdbracketuk"
            icon={<RiYoutubeLine size={20} />}
            label="Youtube"
          />
          <FooterSocial
            href="https://www.google.com/search?kgmid=/g/11lnppz35t&q=Third+Bracket"
            icon={<RiGoogleLine size={20} />}
            label="Business"
          />
        </div>
      </FooterSection>

      <FooterSection title="About Third Bracket">
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="https://www.thirdbracket.co.uk/about#company"
        >
          Company
        </FooterLink>
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="https://www.thirdbracket.co.uk/about#team"
        >
          Team
        </FooterLink>
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="https://www.thirdbracket.co.uk/about#roadmap"
        >
          Roadmap
        </FooterLink>
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="https://www.thirdbracket.co.uk/about#opensource"
        >
          Open Source
        </FooterLink>
        <FooterLink
          isExternal
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="https://www.thirdbracket.co.uk/about#culture"
        >
          Work culture
        </FooterLink>
      </FooterSection>

      <FooterSection title="Partners">
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="#"
        >
          Verify Property
        </FooterLink>
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="#"
        >
          Products of Bd
        </FooterLink>
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="#"
        >
          Habiganj Properties
        </FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="#"
        >
          Privacy Policy
        </FooterLink>
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="#"
        >
          Terms
        </FooterLink>
      </FooterSection>
      <FooterSection title="Bracket UI">
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="#"
        >
          Components
        </FooterLink>
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="#"
        >
          Blocks
        </FooterLink>
        <FooterLink
          theme={{
            text: "text-gray-900 dark:text-gray-50",
            states:
              "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
          }}
          href="#"
        >
          Pages
        </FooterLink>
      </FooterSection>
      {/* <FooterSection title="Useful Links">
        <FooterLink
          href="https://www.business-directory-uk.co.uk/web-design.htm"
          target="_blank"
          rel="noopener noreferrer"
          theme={{
            text: 'text-gray-900 dark:text-gray-50',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
        >
          UK Web Designers - Directory of Web Design Companies in the UK
        </FooterLink>
      </FooterSection> */}

      <FooterBottom>
        <FooterText>© 2025 Third Bracket.</FooterText>

        <ThemeToggle />
      </FooterBottom>
    </Footer>
  );
};
export default SiteFooter;

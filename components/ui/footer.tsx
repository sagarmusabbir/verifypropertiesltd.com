"use client";
import { Footer } from "flowbite-react";
import {
  SiDribbble,
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
import { Logo } from "../icons";

export function FooterMain() {
  return (
    <Footer className="rounded-none p-4 sm:p-6">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Footer.Brand
              alt="Verify Properties"
              href="/"
              name="Verify Properties"
              src="/logo.svg"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            <div>
              <Footer.Title title="Resources" className="text-gray-800" />
              <Footer.LinkGroup
                className="text-base text-gray-600 dark:text-gray-400"
                col
              >
                <Footer.Link href="https://flowbite.com">Flowbite</Footer.Link>
                <Footer.Link href="https://tailwindcss.com/">
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-gray-800" />
              <Footer.LinkGroup
                className="text-base text-gray-600 dark:text-gray-400"
                col
              >
                <Footer.Link href="https://github.com/themesberg/flowbite">
                  Github
                </Footer.Link>
                <Footer.Link href="https://discord.gg/4eeurUVvTy">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-gray-800" />
              <Footer.LinkGroup
                className="text-base text-gray-600 dark:text-gray-400"
                col
              >
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Verifyproperties™. All Rights Reserved."
            href="/"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiWhatsapp className="h-5 w-5" fill="currentColor" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiFacebook className="h-5 w-5" fill="currentColor" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiTwitter className="h-5 w-5" fill="currentColor" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiLinkedin className="h-5 w-5" fill="currentColor" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiGithub className="h-5 w-5" fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}

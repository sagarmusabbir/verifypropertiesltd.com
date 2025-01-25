"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import ContactUsButton from "@/components/buttons/ContactUsButton";
import useScrollDirection from "./useScrollDirection"; // Adjust path as needed
import { Button, MegaMenu, Navbar } from "flowbite-react";

const Megamenu = () => {
  const [background, setBackground] = useState("transparent");
  const scrollDirection = useScrollDirection(); // Assuming this hook returns 'up' or 'down'
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalDocScrollLength = docHeight - windowHeight;
      const scrollPercentage = scrollPosition / totalDocScrollLength;

      if (scrollPosition > 800) {
        setBackground("#23201b");
      } else {
        setBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="sticky w-full 1s ease-in-out"
        style={{
          background: background,
          zIndex: 200,
        }}
      >
        <MegaMenu>
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8 w-full mtext-lg">
            <Navbar.Brand href="/" className="shrink-0 flex-none ">
              <Image
                src="logo.svg"
                className="object-cover logo-transition mx-4"
                width={226}
                height={68}
                alt="Prateeksha Web Design"
              />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="w-full flex-1 md:ml-10">
              <Navbar.Link href="/about-us/" className="text-xl">
                About Us
              </Navbar.Link>
              <Navbar.Link className="text-xl">
                <MegaMenu.Dropdown toggle={<>Services</>}>
                  <ul className="grid grid-cols-2">
                    <div className="space-y-4 p-4">
                      <li>
                        <Link
                          href="/services/website-design-and-development/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Modern Website Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/ecommerce-website-design/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Ecommerce Website
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/ai-consulting/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          AI Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/next.js-website-design-services/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Next.js Website
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/web-app-development/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Web App Development
                        </Link>
                      </li>
                    </div>
                    <div className="space-y-4 p-4">
                      <li>
                        <Link
                          href="/services/mobile-app-development/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Mobile Application
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/digital-design-services/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Digital Design Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/digital-marketing/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/saas-website-design/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Saas Website Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/graphic-design-services/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Graphic Design
                        </Link>
                      </li>
                    </div>
                  </ul>
                </MegaMenu.Dropdown>
              </Navbar.Link>
              <Navbar.Link className="text-xl">
                <MegaMenu.Dropdown toggle={<>Technology</>}>
                  <ul className="grid grid-cols-1">
                    <div className="space-y-4 p-4">
                      <li>
                        <Link
                          href="/services/nextjs-development-services/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Next.js
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/gatsby-website-design-services/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Gatsby.js
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/react.js-development-services/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          React.js
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/shopify-website-design-services/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Shopify
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/laravel-development-services/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Laravel
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/react-native-development-services/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          React Native
                        </Link>
                      </li>
                    </div>
                  </ul>
                </MegaMenu.Dropdown>
              </Navbar.Link>
              <Navbar.Link className="text-xl">
                <MegaMenu.Dropdown toggle={<>Industry</>}>
                  <ul className="grid grid-cols-1">
                    <div className="space-y-4 p-4">
                      <li>
                        <Link
                          href="/industry/architect-and-interior-designers/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Architect and Interior Designers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industry/beauty-and-fashion/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Beauty and Fashion
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industry/charity/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Charity and Non-profit
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industry/clothing-and-apparel/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Clothing and Apparel
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industry/electronics/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Electronics
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industry/finance/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Finance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industry/healthcare/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industry/hospitality/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Hospitality
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industry/online-courses/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Online Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/industry/real-estate/"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Real Estate
                        </Link>
                      </li>
                    </div>
                  </ul>
                </MegaMenu.Dropdown>
              </Navbar.Link>
              <Navbar.Link href="/portfolio/" className="text-xl" s>
                Portfolio
              </Navbar.Link>
              <Navbar.Link href="/blog/" className="text-xl">
                Blog
              </Navbar.Link>
              <Navbar.Link href="/contact-us/" className="text-xl">
                Contact Us
              </Navbar.Link>
            </Navbar.Collapse>
          </div>
        </MegaMenu>
      </header>
    </>
  );
};

export default Megamenu;

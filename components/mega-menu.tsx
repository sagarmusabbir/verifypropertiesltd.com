"use client";
import {
  DarkThemeToggle,
  Dropdown,
  DropdownItem,
  Label,
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  TextInput,
} from "flowbite-react";

import Image from "next/image";
import { useState } from "react";
import { MdEmail, MdOutlineMail, MdPhone, MdPhoneIphone } from "react-icons/md";

export function MegaMenuHeader() {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <Navbar className="dark:bg-gray-800">
        <NavbarBrand href="https://flowbite.com">
          <Image
            src="/logo.svg"
            width={62}
            height={30}
            className="mr-1 h-4 sm:h-5 w-full "
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-base sm:text-lg  font-thin  fdark:text-white text-gray-950 justify-stretch ">
            VERIFY
            <span className="font-semibold text-orange-400">PROPERTIES</span>
          </span>
        </NavbarBrand>
        <div className="flex items-center">
          <a
            href="tel:+447507155382"
            className="ml-3 text-sm leading-none font-medium  hover:opacity-90  flex gap-1 items-center group"
          >
            <MdPhoneIphone className="text-orange-500  " />
            <span className="text-gray-700 dark:text-white hover:text-orange-500  font-medium hidden md:block">
              7507155382
            </span>
          </a>
          {/* <DarkThemeToggle /> */}
          <span className="ml-2 mr-0 h-5 w-px bg-gray-200 dark:bg-gray-600 lg:ml-5 lg:mr-3 lg:inline"></span>

          <a
            href="tel:+447507155382"
            className="ml-3 text-sm font-medium  hover:opacity-90  flex gap-1 items-center group"
          >
            <MdOutlineMail className="text-orange-500 group-hover:opacity-90" />
            <span className="text-gray-700 dark:text-white hover:text-orange-500  font-medium hidden md:block">
              info@verifypropertiesltd.com
            </span>
          </a>
        </div>
      </Navbar>
      <MegaMenu className="border-y border-gray-200 p-0 dark:border-gray-600 dark:bg-gray-800 sm:p-0">
        <div className="w-full px-4 dark:bg-gray-700">
          <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 items-center justify-between py-2 sm:px-6 md:grid-cols-2 md:px-4 xl:px-0">
            <NavbarCollapse>
              <NavbarLink
                active
                href="#"
                className="dark:text-white md:dark:hover:text-primary-500"
              >
                Home
              </NavbarLink>
              <NavbarLink className="[&_span]:hover:text-primary-600 [&_span]:dark:hover:text-primary-500">
                <MegaMenuDropdownToggle onToggle={() => setToggle(true)}>
                  Company
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </MegaMenuDropdownToggle>
              </NavbarLink>
              <NavbarLink
                href="#"
                className="dark:text-white dark:hover:text-primary-500"
              >
                Marketplace
              </NavbarLink>
              <NavbarLink
                href="#"
                className="dark:text-white dark:hover:!text-primary-500"
              >
                Resources
              </NavbarLink>
              <NavbarLink
                href="#"
                className="dark:text-white dark:hover:!text-primary-500"
              >
                Contact
              </NavbarLink>
            </NavbarCollapse>

            <div className="flex items-center gap-5 md:hidden">
              <a
                href="#"
                className="text-sm text-gray-700 hover:text-gray-950 dark:text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 hover:text-gray-950 dark:text-white"
              >
                About
              </a>
              <a className=" dark:text-white text-sm">
                <MegaMenuDropdownToggle
                  onToggle={() => setToggle(true)}
                  theme={{
                    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-700 hover:text-gray-950 focus:outline-none focus:ring-0  dark:text-gray-400  md:hidden",
                  }}
                  className="dark:!text-white"
                >
                  Services
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </MegaMenuDropdownToggle>
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 hover:text-gray-950 dark:text-white"
              >
                Marketplace
              </a>
            </div>
          </div>
        </div>
        <MegaMenuDropdown>
          <div className="mx-auto grid border-t px-0 py-4 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white md:grid-cols-2 md:px-2 lg:grid-cols-4 lg:px-4 xl:px-20">
            <ul className="col-span-2 md:col-span-1">
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Online Stores</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Segmentation</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Marketing CRM</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="col-span-2 md:col-span-1">
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Audience Management</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Creative Tools</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Marketing Automation</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="hidden lg:block">
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Dynamic Content</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Integrations</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Careers</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="col-span-2 p-4 lg:col-span-1">
              <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Our brands
              </h2>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                At JBS Foods, we pride ourselves on a portfolio of brands that
                cater to a variety of preferences.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-400"
              >
                Explore our brands{" "}
                <svg
                  className="ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </MegaMenuDropdown>
      </MegaMenu>
    </header>
  );
}

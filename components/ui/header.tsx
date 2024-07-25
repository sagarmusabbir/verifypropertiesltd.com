import {
  Button,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import NavLink from "../../app/navlink";

import Link from "next/link";
import { SiGithub, SiUpwork } from "react-icons/si";

import {
  PiArrowDown,
  PiArrowDownFill,
  PiArrowUpRightBold,
  PiArrowUpRightFill,
  PiDownloadBold,
} from "react-icons/pi";
import { Bar, Moon, Sun, Tb } from "../icons";
import Image from "next/image";
import logo from "@/public/logo1.svg";
import Logo from "../logo";

export function HeaderNavigation() {
  return (
    <Navbar className="sticky top-0 z-50 bg-gray-50">
      <NavbarBrand href="/">
        {/* <Image src={logo} className="mr-2" alt="nomad-flowbitenext-starter" /> */}
        <Logo className="mr-2" />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          VERIFY<span className="font-thin"> PROPERTIES</span>
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle iconLight={Moon} iconDark={Sun} />
        <Link
          href="https://thirdbracket.co.uk"
          target="_blank"
          className="hidden md:block"
        >
          <Button size="sm" color="light">
            Digital
            {/* <SiGithub className="ml-2 self-center w-4 h-4" /> */}
            <Tb className="fill-gray-700 dark:fill-gray-300 ml-2 self-center w-4 h-4" />
            <PiArrowUpRightFill className="ml-1 w-2 h-2 " />
          </Button>
        </Link>
        <Link href="/#form" className="hidden md:block">
          <Button color="dark" size="sm">
            Get Started
            <PiArrowDown className="ml-2 self-center w-4 h-4" />
          </Button>
        </Link>

        <NavbarToggle barIcon={Bar} />
      </div>
      <NavbarCollapse className="h-screen sm:h-auto items-center">
        <NavLink />

        <div className="md:hidden my-4 ">
          <Link href="https://thirdbracket.co.uk" target="_blank">
            <Button size="sm" color="light" className="w-full mb-2">
              Digital
              <Tb className="self-center fill-gray-700 dark:fill-gray-300 w-4 h-4 ml-2" />
              <PiArrowUpRightFill className="self-center w-2 h-2" />
            </Button>
          </Link>
          <Link href="/#form">
            <Button color="dark" size="sm" className="w-full">
              Get Started
              <PiArrowDown className="self-center ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}

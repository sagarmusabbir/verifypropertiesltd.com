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
  PiArrowLineUpRightBold,
  PiArrowUpRightBold,
  PiArrowUpRightFill,
  PiArrowUpRightLight,
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
            Get Digital
            {/* <SiGithub className="ml-2 self-center w-4 h-4" /> */}
            {/* <Tb className="fill-gray-700 dark:fill-gray-300 ml-2 self-center w-4 h-4" /> */}
            <svg
              className="fill-gray-700 dark:fill-gray-300 ml-2 self-center w-4 h-4" // "h-6 sm:h-7 lg:h-9 mr-2 "
              viewBox="0 0 52.652 52.504"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                d="M4.688 17.772h43.561v30.403H4.688z"
                className="stroke-gray-700 dark:stroke-gray-200 dark:hover:stroke-gray-100 hover:stroke-gray-800"
                style={{
                  fill: "none",
                  fillOpacity: 0,
                  //stroke: "currentColor",
                  strokeWidth: 9.07021,
                  strokeLinecap: "square",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                  paintOrder: "stroke fill markers",
                }}
                transform="translate(-.132 -.206)"
              />
              <path
                d="M19.97-52.63h12.997v39.972H19.97z"
                className="fill-slate-400 dark:fill-gray-500"
                style={{
                  mixBlendMode: "normal",
                  //fill: "#5C697D",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                  strokeWidth: 0.160874,
                  strokeOpacity: 0,
                  paintOrder: "stroke fill markers",
                }}
                transform="matrix(1 0 0 -1 -.132 -.206)"
              />
              <path
                className="fill-slate-400 dark:fill-gray-500"
                d="M.298.224h12.974v52.447H.298z"
                style={{
                  //fill: "#5C697D",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 0.184208,
                  strokeLinecap: "square",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 0,
                  paintOrder: "stroke fill markers",
                }}
                transform="matrix(0 1 1 0 -.132 -.206)"
              />
            </svg>
            <PiArrowUpRightBold className="ml-1 w-2 h-2 " />
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
              Get Digital
              {/* <Tb className="self-center fill-gray-700 dark:fill-gray-300 w-4 h-4 ml-2" /> */}
              <svg
                className="fill-gray-700 dark:fill-gray-300 ml-2 self-center w-4 h-4" // "h-6 sm:h-7 lg:h-9 mr-2 "
                viewBox="0 0 52.652 52.504"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  d="M4.688 17.772h43.561v30.403H4.688z"
                  className="stroke-gray-700 dark:stroke-gray-200 dark:hover:stroke-gray-100 hover:stroke-gray-800"
                  style={{
                    fill: "none",
                    fillOpacity: 0,
                    //stroke: "currentColor",
                    strokeWidth: 9.07021,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                  }}
                  transform="translate(-.132 -.206)"
                />
                <path
                  d="M19.97-52.63h12.997v39.972H19.97z"
                  className="fill-slate-400 dark:fill-gray-500"
                  style={{
                    mixBlendMode: "normal",
                    //fill: "#5C697D",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none",
                    strokeWidth: 0.160874,
                    strokeOpacity: 0,
                    paintOrder: "stroke fill markers",
                  }}
                  transform="matrix(1 0 0 -1 -.132 -.206)"
                />
                <path
                  className="fill-slate-400 dark:fill-gray-500"
                  d="M.298.224h12.974v52.447H.298z"
                  style={{
                    //fill: "#5C697D",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.184208,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 0,
                    paintOrder: "stroke fill markers",
                  }}
                  transform="matrix(0 1 1 0 -.132 -.206)"
                />
              </svg>
              <PiArrowUpRightBold className="ml-1 w-2 h-2 " />
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

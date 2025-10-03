"use client";

import Image from "next/image";
import tb from "@/public/tb.svg";

import ms from "@/public/ms.svg";

import pob from "@/public/pob.svg";
import hp from "@/public/hplogo.svg";

import {
  PiArrowBendDoubleUpRightFill,
  PiArrowFatDown,
  PiArrowFatLinesRight,
  PiArrowRight,
  PiArrowRightDuotone,
  PiArrowRightFill,
} from "react-icons/pi";
import { HiPaperClip } from "react-icons/hi2";
import { Button } from "@thirdbracket/bracketui";
import Link from "next/link";

export function Hero() {
  return (
    <section className=" bg-white dark:bg-gray-950">
      <div className="mx-auto grid container max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 ">
        <div className="mr-auto  place-self-center lg:col-span-6 p-4 md:p-6 lg:p-8">
          <p className="mb-4 md:mb-6 lg:mb-8 max-w-2xl text-gray-500 dark:text-gray-400 text-xs md:text-sm font-light  lg:text-base">
            Property Management No Longer Needs To Be Costly
          </p>
          <h1 className="lg:mb-12 mb-8 md:mb-10 max-w-2xl  font-bold leading-none tracking-tight text-gray-900 dark:text-white text-4xl lg:text-5xl">
            Affordable&nbsp;
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 inline-block text-transparent bg-clip-text">
              Property&nbsp;
            </span>
            Management Solution
          </h1>

          <div className="mb-2 items-center justify-between space-y-4 rounded-md bg-gray-100 p-6 dark:bg-gray-900 sm:flex sm:space-y-0">
            <div className="flex items-center justify-start gap-4  sm:gap-6">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  Complete
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Background Check
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  Efficient
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Legal Team
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  24/7
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Support
                </div>
              </div>
            </div>
            {/* <Button color="dark" href="/#form">
              Get Started
              <PiArrowRight className="ml-1 h-5 w-5" />
            </Button> */}
            <Button
              as={Link}
              href="#subscription"
              className="w-full sm:w-auto"
              size="md"
              theme={{
                border: "border-gray-100/70 dark:border-gray-900/80",
                background: "bg-white dark:bg-black",
                hoverBackground: "[@media(hover:hover)]:hover:opacity-90 ",
                focusRing: "focus:ring-gray-700 dark:focus:ring-gray-300",
                text: "text-gray-950 dark:text-gray-50 ",
              }}
            >
              Get Started
            </Button>
          </div>
          <div className="text-xs lg:text-sm text-gray-500 font-light">
            By getting started, you agree to its&nbsp;
            <a
              href="#"
              className="text-primary-600 hover:underline dark:text-primary-500"
            >
              license
            </a>
            &nbsp;and&nbsp;
            <a
              href="#"
              className="text-primary-600 hover:underline dark:text-primary-500"
            >
              privacy statement
            </a>
            .
          </div>
        </div>
        {/* <div className="hidden lg:col-span-6 lg:mt-0 lg:flex relative w-full h-full overflow-hidden"> */}
        <div className="hidden lg:col-span-6 lg:mt-0 lg:flex relative w-full h-full overflow-hidden">
          {/* <Image
            className="rounded-lg shadow-lg dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/text-editor-light.svg"
            alt="mockup light"
          /> */}
          {/* <Image
            src="/cover.gif"
            width={343}
            height={193}
            alt="cover"
            className="dark:hidden"
          />
          <Image
            src="/cover.gif"
            width={343}
            height={193}
            alt="cover"
            className="hidden dark:block"
          /> */}
          {/* <video
            autoPlay
            loop
            playsInline
            width="500"
            height="500"
            controls
            preload="auto"
          >
            <source src="/cover.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            // className="absolute inset-0 w-full h-full object-cover rounded-lg  dark:hidden"
            className="absolute inset-0  rounded-lg  dark:hidden"
          >
            {/* <source src="/videos/hero.webm" type="video/webm" /> */}
            <source src="/cover.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            // className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg hidden dark:block"
            className=" absolute inset-0  rounded-lg  hidden dark:block"
          >
            {/* <source src="/videos/hero.webm" type="video/webm" /> */}
            <source src="/coverdark.mp4" type="video/mp4" />
          </video>

          {/* Content overlay */}
        </div>
      </div>
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 px-4 py-8 text-gray-400 dark:text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 md:py-16 bg-gray-200 dark:bg-gray-800  bg-[url('/hero.svg')] bg-cover bg-center bg-no-repeat bg-blend-screen dark:bg-blend-overlay">
        <a
          href="https://thirdbracket.co.uk"
          target="_blank"
          className="flex flex-col items-center gap-1"
        >
          <Image
            src={tb}
            alt="thirdbracket"
            className="grayscale hover:grayscale-0 h-5"
          />
          <h2 className="text-xs lg:text-sm font-light text-gray-500/70 hover:text-slate-500/50 uppercase">
            Third Bracket
          </h2>
        </a>

        <a
          href="https://www.facebook.com/habiganjproperties/"
          target="_blank"
          className="flex flex-col items-center gap-1"
        >
          <Image
            src={hp}
            alt="habiganjproperties"
            className="grayscale hover:grayscale-0 h-5"
          />
          <h2 className="text-xs lg:text-sm font-light text-gray-500/70 hover:text-slate-500/50 uppercase">
            Habiganj Properties
          </h2>
        </a>
        <a
          href="https://productsofbangladesh.com"
          target="_blank"
          className="flex flex-col items-center gap-1"
        >
          <Image
            src={pob}
            alt="products-of-bangladesh"
            className="grayscale hover:grayscale-0 h-5"
          />
          <h2 className="text-xs lg:text-sm font-light text-gray-500/70 hover:text-slate-500/50 uppercase">
            Products of Bangladesh
          </h2>
        </a>

        <a
          href="https://musabbirsagar.com"
          target="_blank"
          className="flex flex-col items-center gap-1 "
        >
          <Image
            src={ms}
            alt="musabbirsagar"
            className="grayscale hover:grayscale-0 h-5 "
          />
          <h2 className="text-xs lg:text-sm font-light text-gray-500/70 hover:text-slate-500/50 uppercase">
            Musabbirs Terminal
          </h2>
        </a>
      </div>
    </section>
  );
}

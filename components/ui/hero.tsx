"use client";
import { Button } from "flowbite-react";
import Image from "next/image";
import tb from "@/public/tb.svg";
import lr from "@/public/lr.svg";
import ms from "@/public/ms.svg";
import nmg from "@/public/nmg.svg";
import hp from "@/public/hp.svg";
import logowhite from "@/public/logowhite.svg";
import logodark from "@/public/logoblack.svg";

import {
  PiArrowBendDoubleUpRightFill,
  PiArrowFatDown,
  PiArrowFatLinesRight,
  PiArrowRight,
  PiArrowRightDuotone,
  PiArrowRightFill,
} from "react-icons/pi";
import { HiPaperClip } from "react-icons/hi2";

export function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto  place-self-center lg:col-span-7">
          <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl xl:text-6xl">
            Affordable&nbsp;
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 inline-block text-transparent bg-clip-text">
              Property&nbsp;
            </span>
            Management Solution
          </h1>
          <p className="mb-6 max-w-2xl text-gray-500 dark:text-gray-400 md:text-lg lg:mb-10 lg:text-xl">
            Property Management No Longer Needs To Be Costly
          </p>
          <div className="mb-4 items-center justify-between space-y-4 rounded bg-gray-100 p-4 dark:bg-gray-700 sm:flex sm:space-y-0">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                Comprehensive
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
            <Button color="dark" href="/#form">
              Get Started
              <PiArrowRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
          <div className="text-sm text-gray-500">
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
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          {/* <Image
            className="rounded-lg shadow-lg dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/text-editor-light.svg"
            alt="mockup light"
          /> */}
          <Image
            src="/coverdark.svg"
            width={492}
            height={363}
            alt="cover"
            className="dark:hidden"
          />
          <Image
            src="/coverlight.svg"
            width={492}
            height={363}
            alt="cover"
            className="hidden dark:block"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 px-4 pb-8 text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 lg:pb-16">
        <a
          href="https://thirdbracket.co.uk"
          target="_blank"
          className="flex justify-center"
        >
          <Image src={tb} alt="thirdbracket" className="dark:invert" />
        </a>
        <a
          href="https://literaturereview.co.uk"
          target="_blank"
          className="flex justify-center"
        >
          <Image src={lr} alt="literaturereview" className="dark:invert" />
        </a>
        <a
          href="https://productsofbangladesh.com"
          target="_blank"
          className="flex justify-center"
        >
          <Image src={hp} alt="productsofbasngladesh" className="dark:invert" />
        </a>
        <a
          href="https://nomadgang.com"
          target="_blank"
          className="flex justify-center"
        >
          <Image
            src={logodark}
            alt="habiganjproperties"
            className="dark:hidden"
          />
          <Image
            src={logowhite}
            alt="habiganjproperties"
            className="hidden dark:block"
          />
        </a>
        <a
          href="https://musabbirsagar.com"
          target="_blank"
          className="flex justify-center"
        >
          <Image src={ms} alt="musabbirsagar" className="dark:invert" />
        </a>
        <a
          href="https://musabbirsagar.com"
          target="_blank"
          className="flex justify-center"
        >
          <Image src={nmg} alt="nomadgang" className="dark:invert" />
        </a>
      </div>
    </section>
  );
}

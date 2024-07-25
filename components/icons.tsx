"use client";

import { IconSvgProps } from "@/lib/types";
import { IconBaseProps } from "react-icons";
import { PiGarage } from "react-icons/pi";

export const Bar: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g id="Menu / Menu_Duo_LG">
        <path
          id="Vector"
          d="M3 15H21M3 9H21"
          // stroke="currentColor"
          className="stroke-gray-900 dark:stroke-gray-100"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export const Moon: React.FC<IconBaseProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 25 25"
    width={size || width}
    {...props}
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M19.6065 16.1775C18.9417 16.387 18.234 16.5 17.5 16.5C13.634 16.5 10.5 13.366 10.5 9.5C10.5 7.54163 11.3042 5.77109 12.6004 4.50062C12.567 4.50021 12.5335 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C15.5924 20.5 18.275 18.7454 19.6065 16.1775Z"
        // stroke="currentColor"
        className="stroke-gray-900 dark:stroke-gray-100"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export const Sun: React.FC<IconBaseProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    //stroke="currentColor"
    width={size || width}
    {...props}
    fill="none"
    viewBox="0 0 25 25"

    // enableBackground="new 0 0 52 52"
    // xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M19 12.5H22M3 12.5H6M12.5 6V3M12.5 22V19M17.3891 7.61091L19.5104 5.48959M5.48959 19.5104L7.61091 17.3891M7.61091 7.61091L5.48959 5.48959M19.5104 19.5104L17.3891 17.3891M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z"
        // stroke="currentColor"
        className="stroke-gray-900 dark:stroke-gray-100 "
        strokeWidth={2}
      />
    </g>
  </svg>
);

export const Logo: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <PiGarage
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
    fill="none"
  ></PiGarage>
);

export const Tb: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="28.151"
    // height="25.674"
    // fill="#000"
    // version="1.1"
    viewBox="0 0 28.151 25.674"
    aria-hidden="true"
    height={size || height}
    width={size || width}
    {...props}
    fill="none"
  >
    <path
      fill="currentColor"
      strokeWidth="1.245"
      d="M25.273.002H3C1.49.002.238 1.525 0 3.521v1.378l.017.138c-.007.033-.012.066-.017.1v17.416c.347 1.798 1.53 3.121 2.938 3.121h22.274c1.408 0 2.592-1.323 2.939-3.12V2.843C27.74 1.19 26.608 0 25.275 0zm.152 20.672c-.279 1.45-1.234 2.518-2.369 2.518H5.093c-1.135 0-2.089-1.067-2.369-2.518V6.628c.005-.027.008-.054.014-.08l-.014-.111V5.325c.192-1.61 1.201-2.839 2.42-2.839h17.962c1.076 0 1.988.959 2.32 2.292v15.895zM5.222 12.84v7.615h7.924v-3.467H8.688V8.69h4.458V5.224H5.22v7.616zm9.781-5.883V8.69h4.459v8.297h-4.459v3.467h7.926V5.223h-7.926v1.733z"
    ></path>
  </svg>
);

import * as React from "react";
export const Logo = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width={62}
    height={30}
    viewBox="0 0 480.756 234.018"
    {...props}
  >
    <defs>
      <linearGradient id="a">
        <stop
          offset={0}
          style={{
            stopColor: "#ea580c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#f59e0b",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="b"
        x1={260.421}
        x2={364.022}
        y1={311.102}
        y2={311.102}
        gradientTransform="translate(32.178 -166.063)"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <g
      className="fill-gray-700 dark:fill-gray-300 opacity-100"
      //   style={{
      //     fill: "#282c35",
      //     fillOpacity: 1,
      //   }}
    >
      <path
        d="M355.287 254.69h-175.62l81.278-139.218 62.926 107.783a7.5 7.5 0 1 0 12.953-7.562L267.422 96.815c-.021-.036-.048-.067-.069-.103a7.668 7.668 0 0 0-.407-.603c-.044-.059-.086-.118-.131-.176a7.603 7.603 0 0 0-.584-.658c-.024-.024-.051-.045-.076-.069a7.484 7.484 0 0 0-1.364-1.041c-.055-.033-.108-.068-.164-.1a7.391 7.391 0 0 0-.809-.397l-.033-.012a7.49 7.49 0 0 0-.802-.273c-.073-.021-.146-.038-.22-.056a7.504 7.504 0 0 0-.677-.135c-.079-.012-.157-.026-.236-.036a7.505 7.505 0 0 0-.906-.06H101.842a7.499 7.499 0 0 0-6.477 3.719L1.023 258.408A7.5 7.5 0 0 0 7.5 269.69h86.538l.023.001.023-.001h35.889l.023.001.023-.001H355.289a7.5 7.5 0 1 0-.002-15zm-192.989 0h-19.263l69.43-119.47a7.5 7.5 0 0 0-2.716-10.253 7.498 7.498 0 0 0-10.253 2.716l-73.81 127.007H107.1l85.192-146.594h55.59zm-56.151-146.594h34.091L74.789 220.717a7.5 7.5 0 0 0 12.969 7.537l69.83-120.158h17.356L89.751 254.69H20.563Z"
        className="fill-gray-700 dark:fill-gray-300 opacity-100"
        style={{
          //fill: "#282c35",
          //fillOpacity: 1,
          strokeWidth: 0.999934,
          strokeDasharray: "none",
        }}
        transform="matrix(1.32517 0 0 1.32517 0 -123.368)"
      />
    </g>
    <path
      d="M343.63 98.4c-3.713.236-7.15 2.584-8.796 5.911-13.684 23.965-27.399 47.912-41.063 71.888-2.095 3.928-1.32 9.12 1.83 12.266 2.174 2.287 5.385 3.419 8.513 3.223 27.31-.01 54.62.02 81.93-.015 4.487-.13 8.635-3.437 9.769-7.78.861-2.995.246-6.295-1.457-8.883-13.664-23.892-27.293-47.806-40.98-71.685-2.03-3.275-5.905-5.23-9.745-4.924z"
      className="stroke-gray-700 dark:stroke-gray-300 opacity-100"
      style={{
        fill: "url(#b)",
        fillRule: "evenodd",
        //stroke: "#383838",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeOpacity: 0.0202329,
      }}
    />
  </svg>
);
export default Logo;

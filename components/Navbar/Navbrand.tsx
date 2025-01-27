import { FC, ReactElement } from "react";

export interface NavbrandProps {
  children?: React.ReactNode;

  logo?: string | ReactElement;
}

const Navbrand: FC<NavbrandProps> = ({ logo, children }) => {
  return (
    <a
      href="/"
      className=" group hover:opacity-85 transition-opacity ease-in-out duration-500 flex items-center"
    >
      {logo &&
        (typeof logo === "string" ? (
          <img src={logo} alt="logo" className="mr-1 h-6 sm:h-9 " />
        ) : (
          logo
        ))}

      {/* <span className="inline-flex self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        {children}
      </span> */}
      {/* <span
        className="
           self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      > */}
      {children}
      {/* </span> */}
    </a>
  );
};

export default Navbrand;

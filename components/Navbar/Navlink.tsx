import { FC } from "react";

export interface NavLinkProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  isDropdownItem?: boolean;
}

const Navlink: FC<NavLinkProps> = ({
  href = "#",
  children,
  className,
  isDropdownItem = false,
}) => {
  const baseStyles =
    "transition-opacity ease-in-out duration-300 delay-75  block py-2 hover:opacity-100 ";
  const dropdownStyles = isDropdownItem
    ? "opacity-70  text-gray-600 "
    : "opacity-75  text-gray-950 ";

  return (
    <a
      href={href}
      className={`${baseStyles} ${dropdownStyles} ${className || ""}`}
    >
      {children}
    </a>
  );
};

export default Navlink;

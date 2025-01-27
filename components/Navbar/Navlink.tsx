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
    "transition-opacity ease-in-out duration-200  block py-2.5 hover:opacity-100 text-gray-950 ";
  const dropdownStyles = isDropdownItem ? "opacity-65   " : "opacity-75   ";

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

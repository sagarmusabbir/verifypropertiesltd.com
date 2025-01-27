// components/Navbar/DropdownMenu.tsx
"use client";
import { FC, useState } from "react";
import Navlink from "./Navlink";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  isMobile?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

const DropdownMenu: FC<DropdownProps> = ({
  title,
  children,
  isMobile = false,
  isOpen: externalIsOpen,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use external state if provided (mobile), otherwise use internal state (desktop)
  const isDropdownOpen = externalIsOpen !== undefined ? externalIsOpen : isOpen;
  const toggleOpen = onToggle || (() => setIsOpen(!isOpen));

  if (isMobile) {
    return (
      <div className="">
        <button
          onClick={toggleOpen}
          className="flex items-center justify-between w-full py-2 transition-opacity ease-in-out duration-300 delay-70  opacity-75 hover:opacity-100 text-gray-950 "
        >
          <span>{title}</span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
              // d="M9 6L15 12L9 18"
            />
          </svg>
        </button>
        <div className={`space-y-4  ${isDropdownOpen ? "block" : "hidden"}`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 py-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 w-screen bg-white border-b border-gray-200 shadow-lg py-2 z-50"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            marginTop: "0.5rem",
          }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

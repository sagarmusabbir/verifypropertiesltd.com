"use client";

import { FC, useState } from "react";
import Navlink from "./Navlink";
import Navbrand from "./Navbrand";
import DropdownMenu from "./DropndownMenu";
import Image from "next/image";
import {
  MdManageAccounts,
  MdNewLabel,
  MdNewReleases,
  MdOutline4kPlus,
  MdOutlineArrowUpward,
  MdOutlineManageAccounts,
  MdOutlineSmartButton,
  MdPlusOne,
} from "react-icons/md";
import { VscSymbolProperty } from "react-icons/vsc";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrGrow } from "react-icons/gr";
import { RiPriceTag2Line } from "react-icons/ri";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  PiArrowCircleUpRight,
  PiArrowCircleUpRightFill,
  PiArrowUpRightLight,
} from "react-icons/pi";

export interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(
    null
  );
  const toggleMobileCategory = (category: string) => {
    setOpenMobileCategory(openMobileCategory === category ? null : category);
  };

  return (
    <header>
      <nav className="bg-white text-gray-950 fixed top-0  z-50 backdrop-blur-2xl bg-opacity-80 right-0 left-0">
        <div className="border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4  lg:px-6 py-2.5">
            <div className="flex justify-between items-center">
              {/* Logo and Brand */}
              <Navbrand>
                <Image
                  src="logo32.svg"
                  width={32}
                  height={22}
                  alt=""
                  className="mr-1 h-6 sm:h-9"
                />
                <span className="text-lg font-semibold self-center whitespace-nowrap ">
                  VERIFY<span className="uppercase font-light">properties</span>
                  <span className="text-xs font-thin absolute">&trade;</span>
                </span>
              </Navbrand>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Navlink href="#">Home</Navlink>
                <Navlink href="#">About</Navlink>
                <DropdownMenu title="Services">
                  <div className="grid grid-cols-6 gap-x-8 gap-y-6 py-6">
                    {/* Property Management */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-900">
                        Property Management
                      </h3>
                      <div className="flex flex-col space-y-2">
                        <Navlink
                          href="/services/tenant-screening"
                          isDropdownItem
                        >
                          Tenant Screening
                        </Navlink>
                        <Navlink
                          href="/services/rent-collection"
                          isDropdownItem
                        >
                          Rent Collection
                        </Navlink>
                        <Navlink href="/services/maintenance" isDropdownItem>
                          Property Maintenance
                        </Navlink>
                        <Navlink href="/services/inspections" isDropdownItem>
                          Property Inspections
                        </Navlink>
                        <Navlink
                          href="/services/financial-reporting"
                          isDropdownItem
                        >
                          Financial Reporting
                        </Navlink>
                      </div>
                    </div>

                    {/* Property Marketing */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-900">
                        Property Marketing
                      </h3>
                      <div className="flex flex-col space-y-2">
                        <Navlink href="/services/photography" isDropdownItem>
                          Professional Photography
                        </Navlink>
                        <Navlink href="/services/virtual-tours" isDropdownItem>
                          Virtual Tours
                        </Navlink>
                        <Navlink
                          href="/services/listing-optimization"
                          isDropdownItem
                        >
                          Listing Optimization
                        </Navlink>
                        <Navlink
                          href="/services/social-marketing"
                          isDropdownItem
                        >
                          Social Media Marketing
                        </Navlink>
                        <Navlink
                          href="/services/email-marketing"
                          isDropdownItem
                        >
                          Email Marketing
                        </Navlink>
                      </div>
                    </div>

                    {/* Property Investment */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-900">
                        Investment Services
                      </h3>
                      <div className="flex flex-col space-y-2">
                        <Navlink
                          href="/services/market-analysis"
                          isDropdownItem
                        >
                          Market Analysis
                        </Navlink>
                        <Navlink
                          href="/services/investment-strategy"
                          isDropdownItem
                        >
                          Investment Strategy
                        </Navlink>
                        <Navlink
                          href="/services/portfolio-management"
                          isDropdownItem
                        >
                          Portfolio Management
                        </Navlink>
                        <Navlink
                          href="/services/roi-optimization"
                          isDropdownItem
                        >
                          ROI Optimization
                        </Navlink>
                        <Navlink
                          href="/services/investment-consulting"
                          isDropdownItem
                        >
                          Investment Consulting
                        </Navlink>
                      </div>
                    </div>

                    {/* Property Verification */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-900">
                        Verification Services
                      </h3>
                      <div className="flex flex-col space-y-2">
                        <Navlink
                          href="/services/title-verification"
                          isDropdownItem
                        >
                          Title Verification
                        </Navlink>
                        <Navlink
                          href="/services/document-verification"
                          isDropdownItem
                        >
                          Document Verification
                        </Navlink>
                        <Navlink
                          href="/services/legal-compliance"
                          isDropdownItem
                        >
                          Legal Compliance
                        </Navlink>
                        <Navlink
                          href="/services/property-history"
                          isDropdownItem
                        >
                          Property History Check
                        </Navlink>
                        <Navlink
                          href="/services/ownership-verification"
                          isDropdownItem
                        >
                          Ownership Verification
                        </Navlink>
                      </div>
                    </div>

                    {/* Property Valuation */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-900">
                        Valuation Services
                      </h3>
                      <div className="flex flex-col space-y-2">
                        <Navlink
                          href="/services/market-valuation"
                          isDropdownItem
                        >
                          Market Valuation
                        </Navlink>
                        <Navlink
                          href="/services/comparative-analysis"
                          isDropdownItem
                        >
                          Comparative Analysis
                        </Navlink>
                        <Navlink
                          href="/services/rental-assessment"
                          isDropdownItem
                        >
                          Rental Assessment
                        </Navlink>
                        <Navlink
                          href="/services/investment-potential"
                          isDropdownItem
                        >
                          Investment Potential
                        </Navlink>
                        <Navlink
                          href="/services/depreciation-assessment"
                          isDropdownItem
                        >
                          Depreciation Assessment
                        </Navlink>
                      </div>
                    </div>

                    {/* PropTech Services */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-900">
                        PropTech Services
                      </h3>
                      <div className="flex flex-col space-y-2">
                        <Navlink href="/services/smart-home" isDropdownItem>
                          Smart Home Integration
                        </Navlink>
                        <Navlink
                          href="/services/property-management-software"
                          isDropdownItem
                        >
                          Management Software
                        </Navlink>
                        <Navlink href="/services/iot-solutions" isDropdownItem>
                          IoT Solutions
                        </Navlink>
                        <Navlink
                          href="/services/digital-payments"
                          isDropdownItem
                        >
                          Digital Payment Solutions
                        </Navlink>
                        <Navlink href="/services/automation" isDropdownItem>
                          Property Automation
                        </Navlink>
                      </div>
                    </div>
                  </div>
                </DropdownMenu>

                <Navlink href="#">Contact</Navlink>
              </div>

              {/* Mobile Menu Button */}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="square"
                  strokeLinejoin="inherit"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M2 8h20"
                    className={`transform transition-transform duration-300 ease-in-out origin-center ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth="1"
                  />
                  <path
                    d="M2 16h20"
                    className={`transform transition-transform duration-300 ease-in-out origin-center ${
                      isOpen ? "-rotate-45" : ""
                    }`}
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay + Mobile Menu */}

      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]  [background-size:16px_16px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_10%_200px,#ffffff,transparent)]">
            <div className="pt-14 ">
              <div className="px-4 pt-4 pb-3 space-y-1 overflow-y-auto max-h-[calc(100vh-4rem)]">
                <div className="pb-2">
                  <Navlink href="#">About</Navlink>

                  <DropdownMenu
                    title="Services"
                    isMobile={true}
                    isOpen={openMobileCategory === "services"}
                    onToggle={() => toggleMobileCategory("services")}
                  >
                    <div className="space-y-4 ">
                      {/* Property Management */}
                      <div>
                        <Navlink href="#" isDropdownItem>
                          Property Management
                        </Navlink>

                        <div className="flex   flex-col px-4 border-l border-dotted">
                          <Navlink href="#" isDropdownItem>
                            Tenant Screening
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Rent Collection
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Property Maintenance
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Property Inspections
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Financial Reporting
                          </Navlink>
                        </div>
                      </div>

                      <div>
                        <Navlink href="#" isDropdownItem>
                          Verification Services
                        </Navlink>

                        <div className="flex   flex-col  px-4 border-l border-dotted">
                          <Navlink href="#" isDropdownItem>
                            Title Verification
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Document Verification
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Legal Compliance
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Property History Check
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Ownership Verification
                          </Navlink>
                        </div>
                      </div>

                      <div>
                        <Navlink href="#" isDropdownItem>
                          Valuation Services
                        </Navlink>

                        <div className="flex   flex-col  px-4 border-l border-dotted">
                          <Navlink href="#" isDropdownItem>
                            Market Valuation
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Comparative Analysis
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Rental Assessment
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Investment Potential
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Depreciation Assessment
                          </Navlink>
                        </div>
                      </div>

                      <div>
                        <Navlink href="#" isDropdownItem>
                          Legal Services
                        </Navlink>

                        <div className="flex   flex-col  px-4 border-l border-dotted">
                          <Navlink href="#" isDropdownItem>
                            Legal Contracts
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Dispute Resolution
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Property Registration
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            HMO Licensing
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Documentation
                          </Navlink>
                        </div>
                      </div>
                      <div>
                        <Navlink href="#" isDropdownItem>
                          Marketing
                        </Navlink>

                        <div className="flex   flex-col    px-4 border-l border-dotted">
                          <Navlink href="#" isDropdownItem>
                            Property Listing
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Online Advertisement
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Social Media Marketing
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Content Marketing
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            SEO
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Reputation Management
                          </Navlink>
                        </div>
                      </div>
                      <div>
                        <Navlink href="#" isDropdownItem>
                          Investment Services
                        </Navlink>

                        <div className="flex   flex-col   px-4 border-l border-dotted">
                          <Navlink href="#" isDropdownItem>
                            Market Analysis
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Investment Strategy
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Portfolio Management
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            ROI Optimization
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Investment Consulting
                          </Navlink>
                        </div>
                      </div>

                      {/* Add other categories similarly */}
                    </div>
                  </DropdownMenu>
                  <DropdownMenu
                    title="PropTech"
                    isMobile={true}
                    isOpen={openMobileCategory === "proptech"}
                    onToggle={() => toggleMobileCategory("proptech")}
                  >
                    <div className="space-y-2">
                      <div>
                        {/* <Navlink href="#" isDropdownItem>
                        PropTech Services
                        <span>
                          <MdOutlineSmartButton className="inline-flex items-center size-4 ml-4 text-gray-600 " />
                        </span>
                      </Navlink> */}

                        <div className="flex   flex-col    ">
                          <Navlink href="#" isDropdownItem>
                            Smart Home Integration
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Management Software
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            IoT Solutions
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Digital Payment Solutions
                          </Navlink>
                          <Navlink href="#" isDropdownItem>
                            Property Automation
                          </Navlink>
                        </div>
                      </div>
                    </div>
                  </DropdownMenu>

                  <Navlink href="#">Contact</Navlink>
                </div>

                <div className="border-t border-gray-100/50 py-2">
                  <Navlink className="flex  gap-1" href="#">
                    Blog
                    <span>
                      <PiArrowCircleUpRight className="size-2.5" />
                    </span>
                  </Navlink>
                  <Navlink className="flex  gap-1" href="#">
                    Digital Partner
                    <span>
                      <PiArrowCircleUpRight className="size-2.5" />
                    </span>
                  </Navlink>
                  <Navlink className="flex  gap-1" href="#">
                    Contact Develeoper
                    <span>
                      <PiArrowCircleUpRight className="size-2.5" />
                    </span>
                  </Navlink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

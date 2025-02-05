import {
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from "@thirdbracket/bracketui";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const HeaderWithMegamenu = () => {
  return (
    <header>
      <Navbar>
        {/* <Navbrand logo="logo32.svg">
          <span className="font-bold">UI</span>
        </Navbrand> */}

        <Navbrand>
          <span className="flex items-center gap-2">
            <Image
              src="logo32.svg"
              width={32}
              height={30}
              alt=""
              className="!filter-none"
            />
            <span>
              VERIFY<span className="uppercase font-light">properties</span>
              <span className="text-xs font-thin absolute">&trade;</span>
            </span>
          </span>
        </Navbrand>

        {/* Desktop Navigation */}
        <NavItem>
          <Navlink href="/">Home</Navlink>

          <Megamenu label="Services">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              {/* Development Solutions */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white px-4 leading-none">
                  Management
                </h3>

                <div>
                  <Navlink href="/services/tenant-screening" isDropdownItem>
                    Tenant Screening
                  </Navlink>
                  <Navlink href="/services/rent-collection" isDropdownItem>
                    Rent Collection
                  </Navlink>
                  <Navlink href="/services/maintenance" isDropdownItem>
                    Property Maintenance
                  </Navlink>
                  <Navlink href="/services/inspections" isDropdownItem>
                    Property Inspections
                  </Navlink>
                  <Navlink href="/services/financial-reporting" isDropdownItem>
                    Financial Reporting
                  </Navlink>
                  <Navlink href="/services/smart-home" isDropdownItem>
                    Smart Home Integration
                  </Navlink>
                  <Navlink
                    href="/services/property-management-software"
                    isDropdownItem
                  >
                    Management Software
                  </Navlink>
                </div>
              </div>

              {/* Business Solutions */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white px-4 leading-tight">
                  Verification
                </h3>

                <div>
                  <Navlink href="/services/title-verification" isDropdownItem>
                    Title Verification
                  </Navlink>
                  <Navlink
                    href="/services/document-verification"
                    isDropdownItem
                  >
                    Document Verification
                  </Navlink>
                  <Navlink href="/services/legal-compliance" isDropdownItem>
                    Legal Compliance
                  </Navlink>
                  <Navlink href="/services/property-history" isDropdownItem>
                    Property History Check
                  </Navlink>
                  <Navlink
                    href="/services/ownership-verification"
                    isDropdownItem
                  >
                    Ownership Verification
                  </Navlink>
                  <Navlink href="/services/market-analysis" isDropdownItem>
                    Market Analysis
                  </Navlink>
                  <Navlink href="/services/portfolio-management" isDropdownItem>
                    Portfolio Management
                  </Navlink>
                </div>
              </div>

              {/* Services*/}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white px-4 leading-tight">
                  Valuation Services
                </h3>

                <div>
                  <Navlink href="/services/market-valuation" isDropdownItem>
                    Market Valuation
                  </Navlink>
                  <Navlink href="/services/comparative-analysis" isDropdownItem>
                    Comparative Analysis
                  </Navlink>
                  <Navlink href="/services/rental-assessment" isDropdownItem>
                    Rental Assessment
                  </Navlink>
                  <Navlink href="/services/investment-potential" isDropdownItem>
                    Investment Potential
                  </Navlink>
                  <Navlink
                    href="/services/depreciation-assessment"
                    isDropdownItem
                  >
                    Depreciation Assessment
                  </Navlink>

                  <Navlink href="/services/investment-strategy" isDropdownItem>
                    Investment Strategy
                  </Navlink>

                  <Navlink href="/services/roi-optimization" isDropdownItem>
                    ROI Optimization
                  </Navlink>
                </div>
              </div>

              {/*Products*/}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white px-4 leading-tight">
                  Others
                </h3>

                <div>
                  <Navlink href="/web-development" isDropdownItem>
                    Property Marketing
                  </Navlink>
                  <Navlink href="/mobile-development" isDropdownItem>
                    Listing Optimization
                  </Navlink>
                  <Navlink href="/api-integration" isDropdownItem>
                    Social Media Marketing
                  </Navlink>
                  <Navlink href="/mobile-development" isDropdownItem>
                    Investment Services
                  </Navlink>

                  <Navlink href="/services/iot-solutions" isDropdownItem>
                    IoT Solutions
                  </Navlink>
                  <Navlink href="/services/digital-payments" isDropdownItem>
                    Digital Payment Solutions
                  </Navlink>
                  <Navlink href="/services/automation" isDropdownItem>
                    Property Automation
                  </Navlink>
                </div>
              </div>

              {/* Featured Section */}
              <div className="space-y-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Partner Networks
                </h3>
                <div className="space-y-4">
                  <div className="aspect-video relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                      src="/logo32.svg"
                      width={32}
                      height={30}
                      alt="Featured Resource"
                      className="object-contain w-full h-full  p-2"
                    />
                  </div>
                  <div>
                    <Navlink href="/case-studies" isDropdownItem>
                      Third Bracket Solutions
                      <span className="inline-flex ml-1">
                        <MdArrowOutward />
                      </span>
                    </Navlink>
                    <Navlink href="/documentation" isDropdownItem>
                      Habiganj Properties
                      <span className="inline-flex ml-1">
                        <MdArrowOutward />
                      </span>
                    </Navlink>
                  </div>
                </div>
              </div>
            </div>
          </Megamenu>

          <Navlink href="/pricing">Pricing</Navlink>
          <Navlink href="/about">About</Navlink>
          <Navlink href="/contact">Contact</Navlink>
        </NavItem>

        {/* Mobile Navigation */}
        <MobileNav>
          <Megamenu label="Services">
            <div className="space-y-1 ">
              {/* Development Solutions */}

              <div className="py-1">
                <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                  <span>Management</span>
                  <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
                </h3>
                <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                  <Navlink href="/services/tenant-screening" isDropdownItem>
                    Tenant Screening
                  </Navlink>
                  <Navlink href="/services/rent-collection" isDropdownItem>
                    Rent Collection
                  </Navlink>
                  <Navlink href="/services/maintenance" isDropdownItem>
                    Property Maintenance
                  </Navlink>
                  <Navlink href="/services/inspections" isDropdownItem>
                    Property Inspections
                  </Navlink>
                  <Navlink href="/services/financial-reporting" isDropdownItem>
                    Financial Reporting
                  </Navlink>
                  <Navlink href="/services/smart-home" isDropdownItem>
                    Smart Home Integration
                  </Navlink>
                  <Navlink
                    href="/services/property-management-software"
                    isDropdownItem
                  >
                    Management Software
                  </Navlink>
                </div>
              </div>

              <div className="py-1">
                <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                  <span>Verification</span>
                  <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
                </h3>
                <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                  <Navlink href="/services/title-verification" isDropdownItem>
                    Title Verification
                  </Navlink>
                  <Navlink
                    href="/services/document-verification"
                    isDropdownItem
                  >
                    Document Verification
                  </Navlink>
                  <Navlink href="/services/legal-compliance" isDropdownItem>
                    Legal Compliance
                  </Navlink>
                  <Navlink href="/services/property-history" isDropdownItem>
                    Property History Check
                  </Navlink>
                  <Navlink
                    href="/services/ownership-verification"
                    isDropdownItem
                  >
                    Ownership Verification
                  </Navlink>
                  <Navlink href="/services/market-analysis" isDropdownItem>
                    Market Analysis
                  </Navlink>
                  <Navlink href="/services/portfolio-management" isDropdownItem>
                    Portfolio Management
                  </Navlink>
                </div>
              </div>

              <div className="py-1">
                <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                  <span>Valuation Services</span>
                  <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
                </h3>
                <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                  <Navlink href="/services/market-valuation" isDropdownItem>
                    Market Valuation
                  </Navlink>
                  <Navlink href="/services/comparative-analysis" isDropdownItem>
                    Comparative Analysis
                  </Navlink>
                  <Navlink href="/services/rental-assessment" isDropdownItem>
                    Rental Assessment
                  </Navlink>
                  <Navlink href="/services/investment-potential" isDropdownItem>
                    Investment Potential
                  </Navlink>
                  <Navlink
                    href="/services/depreciation-assessment"
                    isDropdownItem
                  >
                    Depreciation Assessment
                  </Navlink>

                  <Navlink href="/services/investment-strategy" isDropdownItem>
                    Investment Strategy
                  </Navlink>

                  <Navlink href="/services/roi-optimization" isDropdownItem>
                    ROI Optimization
                  </Navlink>
                </div>
              </div>

              <div className="py-1">
                <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                  <span>Others</span>
                  <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
                </h3>
                <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                  <Navlink href="/web-development" isDropdownItem>
                    Property Marketing
                  </Navlink>
                  <Navlink href="/mobile-development" isDropdownItem>
                    Listing Optimization
                  </Navlink>
                  <Navlink href="/api-integration" isDropdownItem>
                    Social Media Marketing
                  </Navlink>
                  <Navlink href="/mobile-development" isDropdownItem>
                    Investment Services
                  </Navlink>

                  <Navlink href="/services/iot-solutions" isDropdownItem>
                    IoT Solutions
                  </Navlink>
                  <Navlink href="/services/digital-payments" isDropdownItem>
                    Digital Payment Solutions
                  </Navlink>
                  <Navlink href="/services/automation" isDropdownItem>
                    Property Automation
                  </Navlink>
                </div>
              </div>
            </div>
          </Megamenu>

          <Navlink href="/pricing">Pricing</Navlink>
          <Navlink href="/about">About</Navlink>
          <Navlink href="/contact">Contact</Navlink>
        </MobileNav>
      </Navbar>
    </header>
  );
};

export default HeaderWithMegamenu;

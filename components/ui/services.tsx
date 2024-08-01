import { Card } from "flowbite-react";
import {
  PiCheck,
  PiCheckBold,
  PiCheckCircleBold,
  PiCheckCircleFill,
  PiCheckFat,
  PiCurrencyCircleDollarFill,
  PiCurrencyDollar,
  PiHouse,
  PiHouseLineFill,
  PiHouseSimpleBold,
  PiMegaphoneFill,
  PiNotification,
  PiNotificationFill,
  PiPaperclipFill,
  PiPersonFill,
  PiToolboxFill,
} from "react-icons/pi";

export function FeatureListCardsSection() {
  return (
    <section id="service" className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            All Property Related Solutions in one place
          </h2>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
            Here at VPL we focus on commitment where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          <Card className="dark:border-0">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 lg:h-12 lg:w-12">
              <PiCheckCircleFill className="h-6 w-6 text-primary-600 dark:text-primary-500 lg:h-9 lg:w-9" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">Verification</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Conducting thorough checks to verify the ownership of the property
              and ensure there are no legal disputes or encumbrances on the
              title.
              {/* We
              handle every detail, from marketing your property to comprehensive
              tenant vetting, for a hassle-free experience. */}
            </p>
          </Card>
          <Card className="dark:border-0">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 lg:h-12 lg:w-12">
              <PiCurrencyCircleDollarFill className="h-6 w-6 text-primary-600 dark:text-primary-500 lg:h-9 lg:w-9" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">Valuation</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Conducting comparative market analysis (CMA) to determine the fair
              market value of the property
            </p>
          </Card>
          <Card className="dark:border-0">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 lg:h-12 lg:w-12">
              <PiNotificationFill className="h-6 w-6 text-primary-600 dark:text-primary-500 lg:h-9 lg:w-9" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">Buyer/Tenant</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Assisting buyers or tenants in finding suitable properties based
              on their preferences and budget.
            </p>
          </Card>
          <Card className="dark:border-0">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 lg:h-12 lg:w-12">
              <PiHouseSimpleBold className="h-6 w-6 text-primary-600 dark:text-primary-500 lg:h-9 lg:w-9" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">
              Seller/Landlord
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Representing sellers or landlords in negotiations with potential
              buyers or tenants, handling offers and counteroffers.
            </p>
          </Card>
          <Card className="dark:border-0">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 lg:h-12 lg:w-12">
              <PiPaperclipFill className="h-6 w-6 text-primary-600 dark:text-primary-500 lg:h-9 lg:w-9" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">
              Legal Compliance
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Assisting clients in completing necessary paperwork related to
              property transactions.
            </p>
          </Card>
          <Card className="dark:border-0">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 lg:h-12 lg:w-12">
              <PiToolboxFill className="h-6 w-6 text-primary-600 dark:text-primary-500 lg:h-9 lg:w-9" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">Maintenance</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Offering property management services, including tenant screening,
              rent collection, and maintenance coordination
            </p>
          </Card>
          <Card className="dark:border-0">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 lg:h-12 lg:w-12">
              <PiPersonFill className="h-6 w-6 text-primary-600 dark:text-primary-500 lg:h-9 lg:w-9" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">
              Administrative
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Handling insurance claims, keeping records of income and expenses.
              Managing property taxes and utilities
            </p>
          </Card>
          <Card className="dark:border-0">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100 dark:bg-gray-900 lg:h-12 lg:w-12">
              <PiMegaphoneFill className="h-6 w-6 text-primary-600 dark:text-primary-500 lg:h-9 lg:w-9" />
            </div>
            <h3 className="text-xl font-bold dark:text-white">Marketing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Creating listings and promotional materials to market properties
              effectively for online platforms, social media, and traditional
              marketing channels.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

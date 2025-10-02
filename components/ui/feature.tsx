import {
  PiDatabase,
  PiMarkerCircle,
  PiNote,
  PiPaperclip,
} from "react-icons/pi";

export function FeatureSection() {
  return (
    <section id="feature" className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          The most trusted property verification platform
        </h2>
        {/* <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          Here are a few reasons why you should choose Us
        </p> */}
        <div className="mt-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:mt-12 lg:grid-cols-3">
          <div>
            <PiDatabase className="mx-auto mb-4 h-12 w-12 text-primary-600 dark:text-primary-500 fill-current" />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Clean Verification
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Ensuring the property's title is clear and free from any legal
              disputes or encumbrances that could affect ownership.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              Learn how to keep your propery safe&nbsp;
              <svg
                className="ml-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div>
            <PiNote className="mx-auto mb-4 h-12 w-12 text-primary-600 dark:text-primary-500 fill-current" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Legal Compilance
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Verifying that the property complies with local zoning laws, land
              use regulations, and building codes.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              Learn how your insurance is covered&nbsp;
              <svg
                className="ml-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div>
            <PiMarkerCircle className="mx-auto mb-4 h-12 w-12 text-primary-600 dark:text-primary-500 fill-current" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Review Documentation
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Thoroughly examining all relevant documents to validate ownership
              and authenticity
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              How to implement best practices&nbsp;
              <svg
                className="ml-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

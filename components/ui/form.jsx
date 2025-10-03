import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import { Button } from "@thirdbracket/bracketui";

export default function MyForm() {
  return (
    <>
      {/* <FormfacadeEmbed
        className="dark:bg-black"
        formFacadeURL="https://formfacade.com/include/114760435190681902493/form/1FAIpQLSfKAeVEvyC0tACIoT9WNPMV5eSBPrkR5Y-FWKUjSA97sYxxbg/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      /> */}

      <div className="container mx-auto">
        <div className="max-w-md mx-auto m-10  p-5 rounded-md ">
          {/* <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                Contact Us
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Fill up the form below to send us a message.
              </p>
            </div> */}
          <div className="m-7">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
            >
              <input
                type="hidden"
                name="access_key"
                value="4175b93d-cf99-4a6b-9bd1-37fef29a02b2"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                id=""
                // style="display: none;"
              />
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                  <label for="email" className="hidden">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 h-12 rounded-md placeholder-gray-500 text-gray-900 dark:text-gray-100 bg-gray-white dark:bg-black border-gray-200 dark:border-gray-800 text-base  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:dark:ring-gray-500 "
                  />
                </div>
                {/* <div class="mb-6">
                    <label for="phone" class="block mb-2 text-sm text-gray-400">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="+1 (555) 1234-567"
                      required
                      className="w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                    />
                  </div> */}

                <div>
                  <Button
                    type="submit"
                    href="#subscription"
                    className="w-full sm:w-auto"
                    size="md"
                    theme={{
                      border: "border-gray-100/70 dark:border-gray-900/80",
                      background: "bg-white dark:bg-black",
                      hoverBackground:
                        "[@media(hover:hover)]:hover:opacity-90 ",
                      focusRing: "focus:ring-gray-700 dark:focus:ring-gray-300",
                      text: "text-gray-950 dark:text-gray-50 ",
                    }}
                  >
                    Get Started
                  </Button>
                  {/* <button
                      type="submit"
                      className="w-full bg-indigo-600 inline-block text-white no-underline hover:text-indigo-100 py-4 px-4 rounded-sm focus:outline-none"
                    >
                      Register
                    </button> */}
                </div>
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

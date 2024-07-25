"use client";
import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import MyForm from "@/components/ui/form";

export function EmailSignUpCardNewsletterSection() {
  return (
    <section className="bg-white dark:bg-gray-900" id="form">
      <div
        id="form"
        className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16"
      >
        <div className="items-center justify-between gap-16 rounded-lg bg-gray-900 p-6 text-white dark:bg-gray-800 md:p-12 lg:flex lg:gap-24">
          <div className="w-full">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 inline-block text-transparent bg-clip-text">
              Register today for a free evaluation
            </h2>
            <p className="text-gray-400 sm:text-xl">
              We will contact you thriugh email.
            </p>
          </div>
          <div className="mt-6 w-full lg:mt-0">
            {/* <form action="#">
              <div className="mb-3 items-center space-y-4 sm:flex sm:space-y-0">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <div className="flex w-full">
                  <TextInput
                    icon={() => (
                      <HiMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    className="w-full [&_input]:rounded-r-none [&_input]:py-3"
                  />
                  <Button className="rounded-l-none [&>span]:px-5">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="text-left text-sm text-gray-400 dark:text-gray-300">
                We care about the protection of your data.&nbsp;
                <a href="#" className="font-medium text-white hover:underline">
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form> */}
            <MyForm />
          </div>
        </div>
      </div>
    </section>
  );
}

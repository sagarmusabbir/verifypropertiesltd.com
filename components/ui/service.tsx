"use client";
import { List, Tabs } from "flowbite-react";
import {
  HiAdjustments,
  HiCheckCircle,
  HiClipboardList,
  HiUserCircle,
} from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export function ServiceSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
        <Tabs aria-label="Tabs with icons" variant="underline" >
          <Tabs.Item active title="Profile" icon={HiUserCircle}>
            <List>
              <List.Item icon={HiCheckCircle}>
                At least 10 characters (and up to 100 characters)
              </List.Item>
              <List.Item icon={HiCheckCircle}>
                At least one lowercase character
              </List.Item>
              <List.Item icon={HiCheckCircle}>
                Inclusion of at least one special character, e.g., ! @ # ?
              </List.Item>
            </List>
          </Tabs.Item>
          <Tabs.Item title="Dashboard" icon={MdDashboard}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="Settings" icon={HiAdjustments}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
          <Tabs.Item title="Contacts" icon={HiClipboardList}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
          <Tabs.Item disabled title="Disabled">
            Disabled content
          </Tabs.Item>
        </Tabs>
      </div>
    </section>
  );
}

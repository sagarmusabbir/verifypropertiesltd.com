import { EmailSignUpCardNewsletterSection } from "@/components/ui/register";
import { FeatureSection } from "@/components/ui/feature";
import { Hero } from "@/components/ui/hero";

import Image from "next/image";
import { FeatureListCardsSection } from "@/components/ui/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureSection />
      <FeatureListCardsSection />
      <EmailSignUpCardNewsletterSection />

      {/* <ServiceSection /> */}
    </main>
  );
}

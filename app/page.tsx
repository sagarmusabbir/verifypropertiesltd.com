import { FeatureSection } from "@/components/ui/feature";
import { MainHero } from "@/components/ui/hero";
import { ServiceSection } from "@/components/ui/service";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MainHero />
      <FeatureSection />
      {/* <ServiceSection /> */}
    </main>
  );
}

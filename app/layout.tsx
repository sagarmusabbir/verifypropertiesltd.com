import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderNavigation } from "@/components/ui/header";
import { FooterMain } from "@/components/ui/footer";
import { WebPage, WithContext } from "schema-dts";

export const jsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Verify Properties Limited",

  url: "https://www.verifypropertiesltd.com/",
  description:
    "Affordable Property Management Solutions: Revolutionizing the way you manage properties with cost-effective, efficient service. With verify properties property management no longer needs to be costly",

  isPartOf: {
    "@type": "WebSite",
    name: "Verify Properties Limited",
    url: "https://www.verifypropertiesltd.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "Verify Properties Limited",
    url: "https://www.verifypropertiesltd.com/",
    legalName: "Third Bracket Solution",
    sameAs: ["https://verifypropertyltd.netlify.app/"],
  },
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Verify Properties Limited",
    default:
      "Affordable Property Management Solutions | Verify Properties Limited",
  },
  alternates: {
    canonical: "https://verifypropertiesltd.com/",
  },
  keywords: [
    "verify property",
    "verify properties",
    "verify property uk",
    "property management uk",
    "Affordable Property Management",
  ],
  description:
    "Affordable Property Management Solutions: Revolutionizing the way you manage properties with cost-effective, efficient service. With verify properties property management no longer needs to be costly",

  openGraph: {
    url: "https://verifypropertiesltd.com/",
    title:
      "Affordable Property Management Solutions | Verify Properties Limited",
    description:
      "Affordable Property Management Solutions: Revolutionizing the way you manage properties with cost-effective, efficient service. With verify properties property management no longer needs to be costly",
    siteName: "Verify Properties Limited",
    type: "website",
    images: [
      {
        url: "https://og.tailgraph.com/og?fontFamily=Inter&title=Affordable%20Property%20Management%20-%20Verify%20Properties%20Limited&titleTailwind=text-gray-800%20font-bold%20text-6xl&titleFontFamily=Inter&text=With%20verify%20properties%2C%20property%20management%20no%20longer%20needs%20to%20be%20costly&textTailwind=text-gray-700%20text-2xl%20mt-4&textFontFamily=Inter&logoUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2Fverifypropertiesltd.com%2Fmain%2Fpublic%2Flogo3.svg&logoTailwind=mx-auto%20h-16&bgUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2Fverifypropertiesltd.com%2Fmain%2Fpublic%2Fcover.svg&bgTailwind=bg-white&footer=verifypropertiesltd.com&footerTailwind=text-orange-500&t=1722023208501&refresh=1",
        alt: "verifypropertieslts.com og-image",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <HeaderNavigation />
        {children}
        <FooterMain />
      </body>
    </html>
  );
}

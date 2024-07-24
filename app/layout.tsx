import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderNavigation } from "@/components/ui/header";
import { FooterMain } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Verify Properties Limited",
    default:
      "Affordable Property Management Solutions | Verify Properties Limited",
  },
  alternates: {
    canonical: "/",
  },

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
        url: "https://og.tailgraph.com/og?fontFamily=Inter&title=Property%20Management%20No%20Longer%20Needs%20To%20Be%20Costly%20%7C%20Verify%20Properties%20Limited&titleTailwind=text-gray-800%20font-bold%20text-2xl&titleFontFamily=Inter&text=Affordable%20Property%20Management%20Solutions&textTailwind=text-gray-700%20text-2xl&textFontFamily=Inter&logoTailwind=h-8&bgTailwind=bg-white&footer=verifypropertiesltd.com&footerTailwind=text-teal-600&t=1721843896804&refresh=1",
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
      <body className={inter.className}>
        <HeaderNavigation />
        {children}
        <FooterMain />
      </body>
    </html>
  );
}

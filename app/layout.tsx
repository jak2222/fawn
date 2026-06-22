import type { Metadata } from "next";
import { DM_Serif_Display, Lora } from "next/font/google";
import "./globals.css";
import MotionProvider from "./components/MotionProvider";
import Grain from "./components/Grain";
import { Analytics } from "@vercel/analytics/next";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fawn — AI content that does more for less.",
  description:
    "Fawn is a London creative studio making AI content that does more for less: AI production, content at scale, bespoke content systems, and fully managed social.",
  metadataBase: new URL("https://byfawn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fawn — AI content that does more for less.",
    description:
      "A London creative studio. AI production, content at scale, content systems, and social.",
    url: "https://byfawn.com",
    siteName: "Fawn",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawn — AI content that does more for less.",
    description:
      "A London creative studio. AI production, content at scale, content systems, and social.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fawn",
  url: "https://byfawn.com",
  logo: "https://byfawn.com/Logo.png",
  email: "hello@byfawn.com",
  description:
    "Fawn is a London creative studio making AI content that does more for less: AI production, content at scale, bespoke content systems, and fully managed social.",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${lora.variable} antialiased`}
    >
      <body className="min-h-screen bg-bone text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <MotionProvider>
          {children}
          <Grain />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}

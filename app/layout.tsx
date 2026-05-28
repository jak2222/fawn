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
    "Fawn is a creative studio. AI production, content at scale, content systems, and social.",
  metadataBase: new URL("https://byfawn.com"),
  openGraph: {
    title: "Fawn",
    description: "AI content that does more for less.",
    url: "https://byfawn.com",
    siteName: "Fawn",
    type: "website",
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
        <MotionProvider>
          {children}
          <Grain />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}

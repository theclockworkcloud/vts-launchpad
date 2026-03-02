import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veritable Technology Solutions — AI-Native Technology for Purpose-Driven Organisations",
  description:
    "Veritable Technology Solutions is an AI-native technology company built to eliminate grunt work — so you can focus on compassion, creativity, and intelligence. Adelaide, South Australia.",
  keywords: [
    "AI technology",
    "strata management",
    "Adelaide",
    "South Australia",
    "technology solutions",
    "ethical AI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={poppins.variable}>
      <body className="font-poppins text-navy antialiased">{children}</body>
    </html>
  );
}

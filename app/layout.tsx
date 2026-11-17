import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phone Repair & Root Cause Consulting | Mobile Phone Fixer 313",
  description: "Metro Detroit iPhone and Android screen repair, battery replacement, charging repairs, PS5 diagnostics, board-level troubleshooting, and electrical root cause consulting. Call or text (313) 427-9331 for a quote.",
  metadataBase: new URL("https://mobile-phone-fixer.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mobile Phone Fixer 313 | Metro Detroit Device Repair",
    description: "Phone, console, and electronics repair with engineering-led diagnostics. Call or text for a quote.",
    url: "https://mobile-phone-fixer.vercel.app",
    siteName: "Mobile Phone Fixer 313 LLC",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

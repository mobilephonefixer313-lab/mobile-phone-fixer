import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="beforeInteractive" />
            <Script id="google-analytics-init" strategy="beforeInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}");`}</Script>
          </>
        ) : null}
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <Script id="contact-click-tracking" strategy="afterInteractive">{`document.addEventListener("click", function(event) { const link = event.target instanceof Element ? event.target.closest("a[href]") : null; if (!link) return; const href = link.getAttribute("href") || ""; if (href.startsWith("tel:") || href.startsWith("sms:")) gtag("event", "contact_click", { contact_method: href.startsWith("tel:") ? "phone" : "sms", page_path: location.pathname }); });`}</Script>
        ) : null}
      </body>
    </html>
  );
}

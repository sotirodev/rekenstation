import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rekenstation.nl"),
  title: {
    default: "Rekenstation: Handige online calculators voor dagelijks gebruik",
    template: "%s | Rekenstation",
  },
  description:
    "Gratis online calculators voor geld, werk, wonen, auto, gezondheid en meer, met resultaat in een paar seconden.",
  keywords: [
    "calculator",
    "rekentool",
    "bruto netto calculator",
    "hypotheek calculator",
    "BTW calculator",
    "BMI calculator",
    "online calculators Nederland",
  ],
  authors: [{ name: "Rekenstation" }],
  other: {
    "google-adsense-account": "ca-pub-5540080208382917",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Rekenstation",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1d3a",
};

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${plusJakarta.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5540080208382917"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

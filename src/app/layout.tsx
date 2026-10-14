import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SITE_DESCRIPTION =
  "Emmanuel Ideh is a Product & Growth Strategist. Customer evidence to positioning and growth decisions. Evidence over assumption.";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanuel-ideh.vercel.app"),
  title: {
    default: "Emmanuel Ideh | Product & Growth Strategist",
    template: "%s | Emmanuel Ideh",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Emmanuel Ideh | Product & Growth Strategist",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
          alt: "Emmanuel Ideh, Product & Growth Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Ideh | Product & Growth Strategist",
    description: SITE_DESCRIPTION,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

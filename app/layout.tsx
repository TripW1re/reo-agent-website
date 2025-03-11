import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TurboHomes | Distressed Property Solutions | Sacramento County",
  description: "Specialized real estate services for distressed homeowners in Sacramento County. Fast, confidential solutions for foreclosure, short sales, probate, and more.",
  keywords: "distressed property, foreclosure help, short sales, Sacramento real estate, Elk Grove realtor, cash home sales",
  authors: [{ name: "Ravneel Pratap", url: "https://turbohomes.com" }],
  alternates: {
    canonical: "https://turbohomes.com",
  },
  openGraph: {
    title: "TurboHomes | Distressed Property Solutions | Sacramento County",
    description: "Specialized real estate services for distressed homeowners in Sacramento County. Fast, confidential solutions for foreclosure, short sales, probate, and more.",
    url: "https://turbohomes.com",
    siteName: "TurboHomes",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
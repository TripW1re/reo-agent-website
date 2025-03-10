import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eXp Realty | Distressed Property Solutions | Sacramento County",
  description: "Specialized real estate services for distressed homeowners in Sacramento County. Fast, confidential solutions for foreclosure, short sales, probate, and more.",
  keywords: "distressed property, foreclosure help, short sales, Sacramento real estate, Elk Grove realtor, cash home sales",
  authors: [{ name: "Ravneel Pratap", url: "https://exp-realty.com" }],
  alternates: {
    canonical: "https://exp-realty.com",
  },
  openGraph: {
    title: "eXp Realty | Distressed Property Solutions | Sacramento County",
    description: "Specialized real estate services for distressed homeowners in Sacramento County. Fast, confidential solutions for foreclosure, short sales, probate, and more.",
    url: "https://exp-realty.com",
    siteName: "eXp Realty",
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
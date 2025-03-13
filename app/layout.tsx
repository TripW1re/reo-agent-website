import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "eXp Realty | Distressed Property Solutions | Sacramento County",
  description: "Specialized real estate services for distressed homeowners in Sacramento County. Fast, confidential solutions for foreclosure, short sales, probate, and more.",
  keywords: "distressed property, foreclosure help, short sales, Sacramento real estate, Elk Grove realtor, cash home sales",
  authors: [{ name: "Ravneel Pratap", url: "https://exp-realty.com" }],
  alternates: {
    canonical: "https://exp-realty.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
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
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
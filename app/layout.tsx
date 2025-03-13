import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Use Google Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "TurboHomes | Distressed Property Solutions | Sacramento County",
  description: "Specialized real estate services for distressed homeowners in Sacramento County. Fast, confidential solutions for foreclosure, short sales, probate, and more.",
  keywords: "distressed property, foreclosure help, short sales, Sacramento real estate, Elk Grove realtor, cash home sales",
  authors: [{ name: "Ravneel Pratap", url: "https://turbohomes.vercel.app" }],
  alternates: {
    canonical: "https://turbohomes.vercel.app",
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
    title: "TurboHomes | Distressed Property Solutions | Sacramento County",
    description: "Specialized real estate services for distressed homeowners in Sacramento County. Fast, confidential solutions for foreclosure, short sales, probate, and more.",
    url: "https://turbohomes.vercel.app",
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
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${roboto.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
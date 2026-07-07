import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import SecurityWrapper from "@/components/SecurityWrapper";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  metadataBase: new URL('https://varnaprojects.com'),
  title: {
    default: "Varna Projects | Top Construction & Luxury Real Estate in Visakhapatnam",
    template: "%s | Varna Projects"
  },
  description: "Varna Projects is a premium real estate and construction company in Visakhapatnam, offering luxury villas, commercial spaces, and layout ventures with uncompromising quality.",
  keywords: ["Luxury Real Estate Visakhapatnam", "Top Construction Company Vizag", "Premium Villas in Vizag", "Commercial Spaces Vizag", "NRI Property Investment Vizag", "Varna Projects", "Varna Properties"],
  openGraph: {
    title: "Varna Projects | Top Construction & Luxury Real Estate",
    description: "Discover unparalleled luxury living and premium construction services in Vizag with Varna Projects.",
    url: 'https://varnaprojects.com',
    siteName: 'Varna Projects',
    images: [
      {
        url: '/images/architecture.png',
        width: 1200,
        height: 630,
        alt: 'Varna Projects Luxury Real Estate',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varna Projects | Luxury Real Estate Visakhapatnam',
    description: 'Building Tomorrow\'s Landmarks. Premium residential and commercial developments.',
    images: ['/images/architecture.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Varna Projects",
              "image": "https://varnaprojects.com/images/varna-logo-clean.png",
              "description": "Varna Projects is a premium real estate and construction company in Visakhapatnam, offering luxury villas, commercial spaces, and layout ventures.",
              "url": "https://varnaprojects.com",
              "telephone": "+918000000000",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Visakhapatnam",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body className="bg-transparent text-white font-sans min-h-screen flex flex-col">
        <SmoothScroll>
          <SecurityWrapper>
            <SplashScreen />
            <Navigation />
            {children}
            <Footer />
            <WhatsAppWidget />
          </SecurityWrapper>
        </SmoothScroll>
      </body>
    </html>
  );
}



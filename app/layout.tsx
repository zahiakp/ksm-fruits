import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KSM Fruits | Freshness Meets Flavor in Udupi",
    template: "%s | KSM Fruits",
  },
  description:
    "Experience the finest selection of fresh, seasonal and exotic fruits in Udupi. Straight from farms to your table with KSM Fruits.",
  keywords: [
    "Fresh Fruits Udupi",
    "Organic Fruits",
    "Exotic Fruits India",
    "Seasonal Fruits",
    "Fruit Delivery Udupi",
    "KSM Fruits",
  ],
  authors: [{ name: "KSM Fruits" }],
  creator: "KSM Fruits",
  publisher: "KSM Fruits",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://ksmfruits.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KSM Fruits | Freshness Meets Flavor",
    description:
      "Premium quality fresh and exotic fruits delivered straight from farms to your table in Udupi.",
    url: "https://ksmfruits.com",
    siteName: "KSM Fruits",
    images: [
      {
        url: "/banner.png", // Make sure to add this image to public folder or change to a valid URL
        width: 481,
        height: 121,
        alt: "KSM Fruits Storefront",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KSM Fruits | Freshness Meets Flavor",
    description: "Premium quality fresh and exotic fruits delivered in Udupi.",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khatauli Gud | Best Organic Jaggery in India",
  description:
    "Buy 100% pure, natural, and organic Khatauli Gud (Jaggery) directly from the source. Chemical-free jaggery blocks, cubes, and powder — straight from Khatauli farms.",
  keywords: [
    "Khatauli Gud",
    "Khatauli Jaggery",
    "Best Gud in India",
    "Organic Jaggery",
    "Pure Jaggery",
    "Buy Jaggery Online",
    "Khatauli Sugarcane Jaggery",
    "Natural Sweetener",
    "Healthy Jaggery",
  ],
  authors: [{ name: "Khatauli Gud" }],
  creator: "Khatauli Gud",
  publisher: "Khatauli Gud",
  metadataBase: new URL("https://www.khatauligud.com"), // ← your live domain
  alternates: {
    canonical: "https://www.khatauligud.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Khatauli Gud – Best Jaggery in India",
    description:
      "Discover the pure taste of Khatauli Gud. 100% natural jaggery products: blocks, cubes, and powder. No chemicals. No preservatives. Just sweetness from nature.",
    url: "https://www.khatauligud.com",
    siteName: "Khatauli Gud",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "Khatauli Gud - Best Organic Jaggery in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khatauli Gud – 100% Pure Jaggery from India",
    description:
      "Buy premium quality organic Khatauli Gud (Jaggery) direct from source. Healthy, natural, and chemical-free.",
    images: ["/logo2.png"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}

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
  "khatauli",

  // Core Keywords
  "Gud",
  "Jaggery",
  "Organic Gud",
  "Pure Gud",
  "Desi Gud",
  "Shakkar",
  "Jaggery Blocks",
  "Jaggery Powder",
  "Brown Sugar Alternative",
  "Natural Sweetener",
  "Cane Sugar Jaggery",
  "Handcrafted Jaggery",
  "Chemical-free Jaggery",
  "Farm Fresh Gud",
  "Traditional Gud",
  "Unrefined Sweetener",

  // Khatauli Keywords
  "Khatauli Pure Gud",
  "Khatauli Organic Jaggery",
  "Khatauli Shakkar",
  "Khatauli Sugarcane Gud",
  "Khatauli Farm Gud",
  "Khatauli Special Gud",
  "Khatauli Desi Gud",
  "Khatauli Fresh Gud",
  "Khatauli Best Gud",
  "Khatauli Ganne Ka Gud",
  "Khatauli Jaggery Factory",
  "Khatauli Jaggery Market",

  // Region Keywords
  "Muzaffarnagar Gud",
  "Uttar Pradesh Gud",
  "UP Jaggery",
  "Muzaffarnagar Jaggery",
  "North India Jaggery",
  "India Gud Market",
  "India’s Best Gud",
  "Sugarcane Belt Gud",
  "Ganga-Yamuna Belt Gud",

  // Buying Intent Keywords
  "Buy Gud Online",
  "Order Khatauli Gud",
  "Order Jaggery Online",
  "Pure Gud Online",
  "Best Gud Online India",
  "Best Jaggery Brand India",
  "Jaggery Price Online",
  "Buy Organic Jaggery",
  "Wholesale Jaggery Supplier",
  "Jaggery Manufacturer India",
  "Gud Supplier Khatauli",
  "Jaggery Export Quality",

  // Health Keywords
  "Healthy Sweetener",
  "Jaggery for Immunity",
  "Jaggery for Digestion",
  "Organic Healthy Sweetener",
  "Natural Energy Booster",
  "Ayurvedic Jaggery",
  "Chemical-Free Sweetener",

  // Product Variants
  "Jaggery Cubes",
  "Liquid Jaggery",
  "Organic Jaggery Powder",
  "Sugarcane Jaggery Blocks",
  "Herbal Jaggery",
  "Flavored Jaggery",
  "Ginger Jaggery",
  "Turmeric Jaggery",
  "Gur Patti",
  "Gud Chikki",
  "Gud Laddu",
  "Jaggery Granules",

  // Long Tail Keywords
  "Best Khatauli Gud to buy online",
  "Pure organic jaggery from Khatauli",
  "Where to buy authentic Khatauli gud",
  "Why Khatauli jaggery is best in India",
  "Chemical-free jaggery from sugarcane",
  "Farm fresh jaggery directly from farmers",
  "Cold-processed jaggery online",
  "Healthy alternative to sugar India",

  // Ultra-Specific Niche Keywords
  "Ganne ka Gud Khatauli",
  "Khatauli Gud online delivery",
  "Jaggery without chemicals",
  "Sun-dried jaggery",
  "Wood-fired jaggery",
  "Artisanal jaggery India",
  "Best sugarcane gud in India",
  "Traditional jaggery making Khatauli"
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

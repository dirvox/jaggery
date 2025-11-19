import ContactMain from "@/components/contact/ContactMain";

export const metadata = {
  title: "Contact Us | Khatauli Gud - Pure & Organic Jaggery",
  description:
    "Get in touch with Khatauli Gud – India’s most trusted source for pure, organic, and chemical-free jaggery. Contact us for orders, bulk supply, wholesale pricing, and support.",

  // ⭐ BRAND NAME
  applicationName: "Khatauli Gud",
  creator: "Khatauli Gud",
  publisher: "Khatauli Gud",

  // ⭐ FAVICON
  icons: {
    icon: "/favicon.ico", // place favicon.ico in /public
    shortcut: "/favicon.ico",
    apple: "/logo2.png"
  },

  // ⭐ ADD LOGO (logo2)
  openGraph: {
    title: "Contact Khatauli Gud | Pure Organic Jaggery",
    description:
      "Reach out to Khatauli Gud for orders, support, and wholesale jaggery supply.",
    url: "https://khatauligud.com/contact",
    type: "website",
    siteName: "Khatauli Gud",
    images: [
      {
        url: "https://khatauligud.com/logo2.png", // your logo2
        width: 1200,
        height: 630,
        alt: "Khatauli Gud Logo"
      }
    ]
  },

  keywords: [
    "Khatauli Gud",
    "Khatauli Jaggery",
    "Best Gud in India",
    "Organic Jaggery",
    "Pure Jaggery",
    "Buy Jaggery Online",
    "Khatauli Sugarcane Jaggery",
    "Healthy Sweetener",
    "Natural Sweetener",
    "Gud",
    "Shakkar",
    "Muzaffarnagar Jaggery",
    "Buy Gud Online",
    "Best Jaggery Brand India"
  ],

  alternates: {
    canonical: "https://khatauligud.com/contact"
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Khatauli Gud | Pure Organic Jaggery",
    description:
      "Get in touch with Khatauli Gud for queries, bulk orders, or support.",
    images: ["https://khatauligud.com/logo2.png"]
  }
};

export default function Page() {
  return (
    <>
      {/* ⭐ Business Schema with Logo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Khatauli Gud",
            logo: "https://khatauligud.com/logo2.png",
            image: "https://khatauligud.com/logo2.png",
            description:
              "Authentic Khatauli Gud and Organic Jaggery sourced directly from farmers.",
            url: "https://khatauligud.com",
            telephone: "+91-XXXXXXXXXX",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Khatauli",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN"
            }
          })
        }}
      />

      <div>
        <ContactMain />
      </div>
    </>
  );
}

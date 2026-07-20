import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://corporatecricketcollective.com"),

  title: {
    default:
      "Corporate Cricket Collective | Premium Corporate Team Building in the Netherlands",
    template: "%s | Corporate Cricket Collective",
  },

  description:
    "Corporate Cricket Collective delivers premium corporate cricket experiences and team-building programmes that strengthen workplace culture across the Netherlands.",

  keywords: [
    "Corporate Cricket",
    "Corporate Team Building",
    "Corporate Events Netherlands",
    "Corporate Team Building Amsterdam",
    "Executive Networking",
    "Employee Engagement",
    "Workplace Culture",
    "Cricket Team Building",
  ],

  authors: [{ name: "Corporate Cricket Collective" }],
  creator: "Corporate Cricket Collective",
  publisher: "Corporate Cricket Collective",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_NL",
    url: "https://corporatecricketcollective.com",
    siteName: "Corporate Cricket Collective",
    title:
      "Corporate Cricket Collective | Premium Corporate Team Building in the Netherlands",
    description:
      "Premium corporate cricket experiences that strengthen teams, build workplace culture and create meaningful connections.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Cricket Collective",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Corporate Cricket Collective",
    description: "Premium corporate cricket experiences across the Netherlands.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Corporate Cricket Collective",
    url: "https://corporatecricketcollective.com",
    logo: "https://corporatecricketcollective.com/logo.png",
    description:
      "Corporate Cricket Collective delivers premium corporate cricket experiences and team-building programmes across the Netherlands.",
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "ian_wessels@icloud.com",
      areaServed: "NL",
      availableLanguage: ["English"],
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
         <Nav />
        {children}

        <Footer />
      </body>
    </html>
  );
}
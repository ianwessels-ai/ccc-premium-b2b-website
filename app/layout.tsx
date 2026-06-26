import type { Metadata } from "next";
// @ts-ignore: CSS side-effect import without type declarations
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://corporatecricketcollective.com"),

  title: {
    default: "Corporate Cricket Collective | Premium Corporate Team Building in the Netherlands",
    template: "%s | Corporate Cricket Collective",
  },

  description:
    "Corporate Cricket Collective delivers premium corporate cricket experiences, executive networking events and team-building programmes that strengthen workplace culture and create meaningful business connections across the Netherlands.",

  keywords: [
    "Corporate Cricket",
    "Corporate Team Building",
    "Corporate Events Netherlands",
    "Corporate Team Building Amsterdam",
    "Executive Networking",
    "Employee Engagement",
    "Workplace Culture",
    "Business Networking Events",
    "Cricket Team Building",
    "Corporate Hospitality",
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
    title: "Corporate Cricket Collective | Premium Corporate Team Building in the Netherlands",
    description:
      "Premium corporate cricket experiences that strengthen teams, build workplace culture and create meaningful business connections.",
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
    description:
      "Premium corporate cricket experiences across the Netherlands.",
    images: ["/og-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
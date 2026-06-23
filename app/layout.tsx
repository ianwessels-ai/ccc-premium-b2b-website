import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.corporatecricketcollective.com"),
  title: "Cricket Corporate Collective | Premium Corporate Cricket Experiences",
  description:
    "Premium cricket-based corporate experiences for stronger teams, executive networking and workplace culture.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Cricket Corporate Collective",
    description:
      "Premium corporate cricket experiences designed to strengthen teams, culture and business relationships.",
    url: "https://www.corporatecricketcollective.com",
    siteName: "Cricket Corporate Collective",
    images: [
      {
        url: "/images/hero-corporate-cricket.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Cricket Collective experience",
      },
    ],
    type: "website",
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
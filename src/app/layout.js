// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Farmily – Bridging Farms and Families",
  description:
    "Farmily is a community-driven platform that connects local farmers with families, promoting fresh produce, sustainability, and fair trade from farm to fork.",
  keywords: [
    "Farmily",
    "farm to table",
    "sustainable farming",
    "organic food",
    "local farms",
    "fresh produce",
    "farmers market",
    "community supported agriculture",
    "agriculture platform",
    "farmers network",
    "healthy food delivery",
    "transparent supply chain",
    "natural farming",
  ],
  authors: [{ name: "Farmily Team" }],
  creator: "Farmily",
  themeColor: "#3D9140",
  openGraph: {
    title: "Farmily – Connecting Farms and Families",
    description:
      "Support local agriculture and access fresh, organic produce through Farmily. We bring families closer to the farms they rely on.",
    url: "https://farmily.in", // Replace with your actual domain
    siteName: "Farmily",
    images: [
      {
        url: "https://farmily.in/og-image.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Farmily – Farm to Table Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmily – Fresh Food, Fair Farming",
    description:
      "Farmily is building a transparent, tech-enabled bridge between local farms and modern families. Discover the future of food.",
    images: ["https://farmily.in/twitter-card.jpg"], // Replace with actual image path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

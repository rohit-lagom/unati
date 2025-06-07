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
  title: "UTHAAN – Revolutionizing Agriculture with Blockchain & Emerging Tech",
  description:
    "UTHAAN (Unati Tech for Holistic Agri-Advancement & Networking) is a holistic agri-tech ecosystem leveraging blockchain, AI, and IoT to empower farmers, optimize supply chains, and bring transparency from farm to fork.",
  keywords: [
    "UTHAAN",
    "Unati Tech",
    "agritech",
    "blockchain agriculture",
    "farm to fork",
    "smart farming",
    "agriculture transparency",
    "carbon credits",
    "farmer empowerment",
    "IoT in agriculture",
    "AI farming",
    "sustainable agriculture",
    "decentralized agri ecosystem",
  ],
  authors: [{ name: "Unati Tech for Holistic Agri-Advancement & Networking" }],
  creator: "UTHAAN",
  themeColor: "#0D5F4A",
  openGraph: {
    title: "UTHAAN – Empowering Agriculture through Technology",
    description:
      "An end-to-end agricultural ecosystem using blockchain, IoT, and AI to drive sustainability, efficiency, and traceability.",
    url: "",
    siteName: "UTHAAN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UTHAAN – AgriTech Blockchain Ecosystem",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UTHAAN – AgriTech Powered by Blockchain",
    description:
      "Transforming Indian agriculture with cutting-edge technology and sustainable practices.",
    images: ["/og-image.jpg"],
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

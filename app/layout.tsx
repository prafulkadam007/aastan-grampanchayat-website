import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "आस्तान ग्रामपंचायत | Astan Gram Panchayat",
  description: "आस्तान ग्रामपंचायत, उत्तर तालुका, रत्नागिरी जिल्हा, महाराष्ट्र | Official website of Astan Gram Panchayat showcasing members, development works, and contact information",
  keywords: "आस्तान, ग्रामपंचायत, रत्नागिरी, महाराष्ट्र, Astan, Gram Panchayat, Ratnagiri, Maharashtra, village administration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageFade from "@/components/PageFade";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "The Canadian Pre-Veterinary Medical Association | L'Association des pré-médecins vétérinaires",
  description:
    "The Canadian Pre-Veterinary Medical Association (CPVMA | ACPMV) supports aspiring veterinary professionals across Canada through education, community, and advocacy."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-mistGray text-forest font-sans">
        <Navbar />
        <main className="min-h-screen pt-24 overflow-hidden">
          <PageFade>{children}</PageFade>
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Providers } from "./providers";
import ScrollAnimations from "@/components/scroll-animations";
import FontLoader from "@/components/font-loader";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michigan Living - Straticon Employee Retreat",
  description: "Experience Michigan with the Hardin family - A special retreat for our valued Straticon employees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Providers>
          <FontLoader />
          <ScrollAnimations />
          <main className="relative">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

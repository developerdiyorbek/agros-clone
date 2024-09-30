import type { Metadata } from "next";
import "./globals.css";
import { ChildProps } from "@/types";
import { Montserrat } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "O'zagrosug'urta",
  description: "O'zagrosug'urta aksiyadorlik jamiyati",
  icons: { icon: "/icon.jpeg" },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="uz">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

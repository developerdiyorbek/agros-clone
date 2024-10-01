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
  metadataBase: new URL("https://diyordemy.uz"),
  title: "O'zagrosug'urta aksiyadorlik jamiyati",
  description:
    "O‘zagrosug‘urta aksiyadorlik jamiyati 1997 yil 25 fevralda O‘zbekiston Respublikasi Prezidentining 1713-sonli farmoniga asosan tashkil etilgan.",
  authors: [{ name: "Diyorbek Sulaymonov", url: "https://diyor-dev.uz" }],
  openGraph: {
    title: "O'zagrosug'urta aksiyadorlik jamiyati",
    description:
      "O‘zagrosug‘urta aksiyadorlik jamiyati 1997 yil 25 fevralda O‘zbekiston Respublikasi Prezidentining 1713-sonli farmoniga asosan tashkil etilgan.",
    type: "website",
    url: "https://agros-clone.vercel.app/",
    locale: "uz_UZ",
    images:
      "https://agros-clone.vercel.app/_next/image?url=%2Flogo.png&w=640&q=75",
    countryName: "Uzbekistan",
    siteName: "Agros",
    emails: "diyorbeksulaymonov70@gmail.com",
  },
  icons: { icon: "/icon.jpeg" },
  keywords: "agros, agrosug'urta, uzagrosug'urta",
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

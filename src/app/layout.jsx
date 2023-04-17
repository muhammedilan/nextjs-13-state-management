import { Rubik } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Providers from "@/stores/provider";

export const metadata = {
  title: "E-Commerce",
  description: "E-Commerce Web site created Next.js and TailwindCSS",
};

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={
          "min-h-screen container bg-background text-primary flex flex-col " +
          rubik.className
        }
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

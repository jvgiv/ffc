import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../../lib/fontawesome'
import Header from "./components/ui/Header";
import TopHeader from "./components/ui/TopHeader";
import Disclosures from "./components/ui/Disclosures";
import TempFooter from "./components/ui/TempFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Far Flung Change",
  description: "deliBErate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopHeader />
        <Header />
        {children}
        <TempFooter />
        <Disclosures />
      </body>
    </html>
  );
}

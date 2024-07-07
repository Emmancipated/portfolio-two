import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibm_plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm_plex",
});

export const metadata: Metadata = {
  title: "Portfolio - Emmanuel Kalu",
  description: "App created by Emmanuel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${ibm_plex.className} ${inter.className}`}>
        <main className="sm:flex h-dvh text-[#141313] relative">
          <SideNav />
          {children}
        </main>
      </body>
    </html>
  );
}

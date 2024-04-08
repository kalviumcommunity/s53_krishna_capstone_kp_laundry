import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "KP laundry",
  description: "Automate Your Work With KP laundry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F7FEFF]">
      <body className={font.className}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
        </body>
    </html>
  );
}

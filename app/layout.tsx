import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/sonner";

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
        <Providers>
      <body className={font.className}>
          <Navbar/>
          {children}
          <Toaster richColors  />
        </body>
        </Providers>
    </html>
  );
}

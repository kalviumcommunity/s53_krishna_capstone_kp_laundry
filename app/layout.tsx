import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import Header from "./_components/Header";
import { Providers } from "./providers";

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "KP laundrry",
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
          {children}
        </Providers>
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const instrument_sans = Instrument_Sans({subsets : ["latin"]})

export const metadata: Metadata = {
  title: "devlinks",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrument_sans.className} bg-lightGrey leading-[150%] min-h-[100dvh]`}
      >
        {children}
      </body>
    </html>
  );
}

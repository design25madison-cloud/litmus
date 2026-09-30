import type { Metadata } from "next";
import { Archivo, Libertinus_Serif } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
});

const libertinus = Libertinus_Serif({
  subsets: ["latin"],
  variable: "--font-libertinus",
  weight: ["400", "600", "700"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "MindSpace - template built with shadcndesign.com",
  description:
    "MindSpace is a modern and clean SaaS shadcn/ui template built with Pro Blocks",
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`${archivo.variable} ${libertinus.variable} relative antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}

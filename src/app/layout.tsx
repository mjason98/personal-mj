import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mjason corner",
  description: "The personal web page of Mariano Jason Rodriguez :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col p-20 items-center justify-center bg-[#2e3136] min-h-screen w-full">
          {children}
        </main>
        </body>
    </html>
  );
}

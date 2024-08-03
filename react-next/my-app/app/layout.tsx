import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
    <html lang="en">
      <body>
        <div className="flex mt-4 space-x-6">
          {/* Nav */}
          {/* main */}
          <main className="{inter.className} w-full border border-green-600 p-4">{children}</main>
        </div>
      </body>

    </html>
  );
}

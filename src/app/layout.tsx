import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloggify",
  description: "Blog your knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} dark text-foreground bg-background min-h-screen`}
        >
          <NextUIProvider>
            <div className="container max-w-5xl mx-auto">
              <Header />
              {children}
            </div>
          </NextUIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

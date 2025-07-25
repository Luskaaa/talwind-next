import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Sidebar } from "./components/Sidebar";

import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="lg:grid-cols-app min-h-screen lg:grid dark:bg-zinc-900">
            <Sidebar />
            <main className="max-w-[100vw] px-4 pt-24 pb-12 lg:col-start-2 lg:px-8 lg:pt-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

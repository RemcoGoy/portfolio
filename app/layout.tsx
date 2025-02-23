import type { Metadata } from "next";
import { roboto_condensed } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Remco Goyvaerts",
  description: "Innovation Engineer @ Firefly Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto_condensed.className} antialiased bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50`}
      >
        <ThemeProvider>
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="pt-20">{children}</div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

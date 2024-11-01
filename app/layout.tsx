import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarieTeam - Spectron Labs",
  description: "Your marine transportation company. Book your dream vacation with ease.",
  openGraph: {
    url: "https://marieteam.vercel.app",
    title: "MarieTeam Docs",
    description: "Your marine transportation company. Book your dream vacation with ease.",
    images: [
      {
        url: "https://marieteam.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "MarieTeam",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular antialiased`}
        suppressHydrationWarning
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <div className="flex flex-col min-h-screen">
          <SiteHeader/>
          {children}
          <SiteFooter/>
        </div>
      </ThemeProvider>
      </body>
    </html>
);
}

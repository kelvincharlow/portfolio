import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kelvin Musyoki - Full Stack Developer",
  description: "Full Stack Developer • Automation Enthusiast • Remote Work Advocate. Building modern web applications with React, Next.js, Node.js, and cutting-edge technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Web Developer"],
  authors: [{ name: "Kelvin Musyoki" }],
  creator: "Kelvin Musyoki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Kelvin Musyoki - Full Stack Developer",
    description: "Full Stack Developer • Automation Enthusiast • Remote Work Advocate",
    siteName: "Kelvin Musyoki Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvin Musyoki - Full Stack Developer",
    description: "Full Stack Developer • Automation Enthusiast • Remote Work Advocate",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

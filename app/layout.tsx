import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MBOGNENG TETSIEBOU JUNIOR - Portfolio",
  description: "Software Engineer & Deep Learning Enthusiast - Portfolio of MBOGNENG TETSIEBOU JUNIOR, 5th-year Computer Engineering student at ENSPY",
  keywords: ["Software Engineer", "Deep Learning", "AI", "Web Development", "Mobile Development", "Portfolio"],
  authors: [{ name: "MBOGNENG TETSIEBOU JUNIOR" }],
  openGraph: {
    title: "MBOGNENG TETSIEBOU JUNIOR - Portfolio",
    description: "Software Engineer & Deep Learning Enthusiast",
    type: "website",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

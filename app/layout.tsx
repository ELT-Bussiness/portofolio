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
  metadataBase: new URL('https://mbogneng-junior.vercel.app'), // Remplace par ton vrai domaine
  title: {
    default: "MBOGNENG TETSIEBOU JUNIOR - Software Engineer & AI Enthusiast",
    template: "%s | MBOGNENG TETSIEBOU JUNIOR"
  },
  description: "Portfolio de MBOGNENG TETSIEBOU JUNIOR - Ingénieur Logiciel & Passionné de Deep Learning. Étudiant en 5ème année d'Ingénierie Informatique à l'ENSPY, Yaoundé, Cameroun. Spécialisé en développement web, mobile et intelligence artificielle.",
  keywords: [
    "MBOGNENG TETSIEBOU JUNIOR",
    "Software Engineer",
    "Deep Learning",
    "AI",
    "Web Development",
    "Mobile Development",
    "Portfolio",
    "ENSPY",
    "Cameroon",
    "Python",
    "Java",
    "Spring Boot",
    "React Native",
    "Next.js",
    "Machine Learning",
    "Computer Vision"
  ],
  authors: [{ name: "MBOGNENG TETSIEBOU JUNIOR", url: "https://github.com/Mbogneng-Junior" }],
  creator: "MBOGNENG TETSIEBOU JUNIOR",
  publisher: "MBOGNENG TETSIEBOU JUNIOR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "de_DE", "es_ES", "zh_CN"],
    url: "https://mbogneng-junior.vercel.app",
    siteName: "MBOGNENG TETSIEBOU JUNIOR Portfolio",
    title: "MBOGNENG TETSIEBOU JUNIOR - Software Engineer & AI Enthusiast",
    description: "Portfolio de MBOGNENG TETSIEBOU JUNIOR - Ingénieur Logiciel & Passionné de Deep Learning",
    images: [
      {
        url: "/profil.png",
        width: 800,
        height: 600,
        alt: "MBOGNENG TETSIEBOU JUNIOR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBOGNENG TETSIEBOU JUNIOR - Software Engineer & AI Enthusiast",
    description: "Portfolio de MBOGNENG TETSIEBOU JUNIOR - Ingénieur Logiciel & Passionné de Deep Learning",
    images: ["/profil.png"],
  },
  verification: {
    // Ajoute ces codes après avoir configuré Google Search Console
    // google: "ton-code-verification-google",
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

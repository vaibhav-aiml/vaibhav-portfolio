import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/sections/Preloader";

export const metadata: Metadata = {
  title: "Vaibhav Badaya | Full-Stack & AI Engineer — Jaipur",
  description:
    "Portfolio of Vaibhav Badaya — Full-stack and AI engineer specializing in scalable REST APIs, real-time systems, and LLM-powered apps. B.Tech CSE (AI & ML), JECRC University, Jaipur.",
  keywords: [
    "Vaibhav Badaya",
    "Full-Stack Developer",
    "AI Engineer",
    "LLM",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Jaipur",
    "Portfolio",
  ],
  authors: [{ name: "Vaibhav Badaya", url: "https://github.com/vaibhav-aiml" }],
  openGraph: {
    title: "Vaibhav Badaya | Full-Stack & AI Engineer",
    description:
      "Full-stack and AI engineer building scalable APIs, real-time systems, and LLM-powered applications.",
    url: "https://vaibhavbadaya.dev",
    siteName: "Vaibhav Badaya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Badaya | Full-Stack & AI Engineer",
    description:
      "Full-stack and AI engineer building scalable APIs, real-time systems, and LLM-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vaibhav Badaya",
              url: "https://vaibhavbadaya.dev",
              email: "vaibhavbadaya53@gmail.com",
              telephone: "+919929984043",
              jobTitle: "Full-Stack & AI Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "JECRC University",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              sameAs: [
                "https://linkedin.com/in/vaibhav-badaya",
                "https://github.com/vaibhav-aiml",
              ],
            }),
          }}
        />
      </head>
      <body className="font-body-md antialiased relative min-h-svh jaali-grid-bg selection:bg-primary-container selection:text-surface-container-lowest">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Preloader />
          <SmoothScroll>
            {/* Background jaali pattern */}
            <div className="fixed inset-0 jaali-texture opacity-30 pointer-events-none z-0" />

            <Navbar />
            <main className="relative z-10 max-w-[1440px] mx-auto pb-24 md:pb-16">
              {children}
            </main>
            <BottomNav />
          </SmoothScroll>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}

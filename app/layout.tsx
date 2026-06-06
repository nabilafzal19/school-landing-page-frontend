import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display, Space_Mono } from "next/font/google";
import { AdminProvider } from "@/context/AdminContext";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SCHOOL_NAME, SCHOOL_TAGLINE } from "@/lib/constants";
import {
  getBreadcrumbJsonLd,
  getFAQJsonLd,
  getSchoolJsonLd,
  getWebPageJsonLd,
  getWebSiteJsonLd,
  SEO_KEYWORDS,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SCHOOL_NAME} | ${SCHOOL_TAGLINE}`,
    template: `%s | ${SCHOOL_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SCHOOL_NAME }],
  creator: SCHOOL_NAME,
  publisher: SCHOOL_NAME,
  category: "education",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SCHOOL_NAME,
    title: `${SCHOOL_NAME} | ${SCHOOL_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SCHOOL_NAME} | ${SCHOOL_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FDF8F3",
  colorScheme: "light",
};

const structuredData = [
  getSchoolJsonLd(),
  getWebSiteJsonLd(),
  getWebPageJsonLd(),
  getBreadcrumbJsonLd(),
  getFAQJsonLd(),
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="pb-[env(safe-area-inset-bottom)]">
        <AdminProvider>
          <MotionProvider>{children}</MotionProvider>
        </AdminProvider>
      </body>
    </html>
  );
}

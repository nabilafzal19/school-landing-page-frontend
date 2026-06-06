import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SkipLink from "@/components/ui/SkipLink";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import NoticeBoard from "@/components/sections/NoticeBoard";
import Footer from "@/components/sections/Footer";
import { SCHOOL_NAME, SCHOOL_TAGLINE } from "@/lib/constants";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";

const AboutUs = dynamic(() => import("@/components/sections/AboutUs"));
const Faculty = dynamic(() => import("@/components/sections/Faculty"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Admissions = dynamic(() => import("@/components/sections/Admissions"));
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection")
);
const WhatsAppButton = dynamic(
  () => import("@/components/ui/WhatsAppButton"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: `${SCHOOL_NAME} | ${SCHOOL_TAGLINE}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: `${SCHOOL_NAME} | ${SCHOOL_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Stats />
        <AboutUs />
        <Features />
        <NoticeBoard />
        <Faculty />
        <Gallery />
        <Testimonials />
        <Admissions />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

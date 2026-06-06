import type { Metadata } from "next";
import SkipLink from "@/components/ui/SkipLink";
import Navbar from "@/components/ui/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutUs from "@/components/sections/AboutUs";
import Features from "@/components/sections/Features";
import NoticeBoard from "@/components/sections/NoticeBoard";
import Faculty from "@/components/sections/Faculty";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Admissions from "@/components/sections/Admissions";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import { SCHOOL_NAME, SCHOOL_TAGLINE } from "@/lib/constants";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";

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

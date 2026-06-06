import {
  ESTABLISHED_YEAR,
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE,
  SCHOOL_TAGLINE,
  SITE_URL,
} from "@/lib/constants";

export { SITE_URL };

export const SITE_DESCRIPTION = `${SCHOOL_NAME} — CBSE affiliated school offering world-class education from Nursery to Class XII. Admissions open for 2025-26. Located in New Delhi.`;

export const SEO_KEYWORDS = [
  "Greenwood International School",
  "CBSE school Delhi",
  "best school New Delhi",
  "school admissions 2025",
  "international school India",
  "Nursery to Class XII",
  "private school Delhi",
  "school with sports facilities",
  "quality education India",
];

export function getSchoolJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${SITE_URL}/#school`,
    name: SCHOOL_NAME,
    alternateName: "Greenwood School",
    description: SCHOOL_TAGLINE,
    url: SITE_URL,
    telephone: SCHOOL_PHONE,
    email: SCHOOL_EMAIL,
    foundingDate: String(ESTABLISHED_YEAR),
    address: {
      "@type": "PostalAddress",
      streetAddress: SCHOOL_ADDRESS,
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.209,
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.youtube.com/",
    ],
    areaServed: {
      "@type": "City",
      name: "New Delhi",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Academic Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "CBSE Curriculum — Nursery to Class XII",
          },
        },
      ],
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SCHOOL_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#school` },
    inLanguage: "en-IN",
  };
}

export function getBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };
}

export function getWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SCHOOL_NAME} | ${SCHOOL_TAGLINE}`,
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#school` },
    inLanguage: "en-IN",
  };
}

export function getFAQJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What classes does Greenwood International School offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Greenwood International School offers CBSE curriculum from Nursery through Class XII with smart classrooms, science labs, sports facilities, and holistic development programs.",
        },
      },
      {
        "@type": "Question",
        name: "How can I apply for admission?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fill out the admission inquiry form on our website or contact us via WhatsApp. Our admissions team will guide you through the application, assessment, and enrollment process.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Greenwood International School located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${SCHOOL_NAME} is located at ${SCHOOL_ADDRESS}, New Delhi, India. Contact us at ${SCHOOL_PHONE} or ${SCHOOL_EMAIL}.`,
        },
      },
      {
        "@type": "Question",
        name: "Is Greenwood International School CBSE affiliated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, Greenwood International School is CBSE affiliated and has been delivering quality education since ${ESTABLISHED_YEAR}.`,
        },
      },
    ],
  };
}

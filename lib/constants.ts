export const SCHOOL_NAME = "Greenwood International School";
export const SCHOOL_TAGLINE = "Nurturing Minds, Building Futures";
export const SCHOOL_ADDRESS =
  "123 Knowledge Park, Sector 15, New Delhi - 110001";
export const SCHOOL_PHONE = "+91 98765 43210";
export const SCHOOL_EMAIL = "info@greenwoodschool.edu.in";
export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello! I'd like to know more about admissions at Greenwood International School.";
export const ADMIN_USERNAME =
  process.env.NEXT_PUBLIC_ADMIN_USERNAME ?? "admin";
export const ADMIN_PASSWORD =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "school@2024";
export const ESTABLISHED_YEAR = 1998;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://greenwoodschool.edu.in";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#features" },
  { label: "Faculty", href: "#faculty" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
] as const;

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

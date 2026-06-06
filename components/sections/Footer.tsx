import Link from "next/link";
import {
  NAV_LINKS,
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE,
  SCHOOL_TAGLINE,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-300/60 bg-paper" role="contentinfo">
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-navy">
              {SCHOOL_NAME}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {SCHOOL_TAGLINE}. CBSE affiliated institution committed to
              excellence in education.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-gold-dark">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-navy transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-gold-dark">
              Academics
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Nursery to Class XII</li>
              <li>CBSE Curriculum</li>
              <li>STEM Programs</li>
              <li>Sports Academy</li>
              <li>Arts & Culture</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-gold-dark">
              Contact
            </h4>
            <address className="space-y-2 text-sm text-slate-600 not-italic">
              <p>{SCHOOL_ADDRESS}</p>
              <p>
                <a
                  href={`tel:${SCHOOL_PHONE.replace(/\s/g, "")}`}
                  className="hover:text-navy transition-colors"
                >
                  {SCHOOL_PHONE}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SCHOOL_EMAIL}`}
                  className="hover:text-navy transition-colors"
                >
                  {SCHOOL_EMAIL}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-stone-300/50 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {currentYear} {SCHOOL_NAME}. All rights reserved.
          </p>
          <Link
            href="/admin"
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}

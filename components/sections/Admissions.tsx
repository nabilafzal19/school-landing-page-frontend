"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, SCHOOL_NAME } from "@/lib/constants";

const steps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Fill out the inquiry form or visit our admissions office.",
  },
  {
    step: 2,
    title: "Entrance Assessment",
    description: "Age-appropriate evaluation for academic readiness.",
  },
  {
    step: 3,
    title: "Parent Interview",
    description: "Brief meeting with the admissions committee.",
  },
  {
    step: 4,
    title: "Enrollment",
    description: "Complete documentation and fee payment to confirm seat.",
  },
];

export default function Admissions() {
  const [form, setForm] = useState({
    studentName: "",
    classApplying: "",
    parentName: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Admission Inquiry - ${SCHOOL_NAME}*

Student Name: ${form.studentName}
Class Applying For: ${form.classApplying}
Parent Name: ${form.parentName}
Phone: ${form.phone}
Email: ${form.email}

I would like to know more about the admission process.`;
    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <section id="admissions" className="section-padding bg-mist" aria-labelledby="admissions-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
            Join Us
          </span>
          <h2 id="admissions-heading" className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Admissions Open 2025-26
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="mb-6 font-display text-xl font-semibold text-navy sm:mb-8">
              Admission Process
            </h3>
            <ol className="relative space-y-6 pl-8 sm:space-y-8">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gold/40" aria-hidden="true" />
              {steps.map((item) => (
                <li key={item.step} className="relative">
                  <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-navy">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit}
            className="card-light p-6 md:p-8"
          >
            <h3 className="mb-6 font-display text-xl font-semibold text-navy">
              Inquiry Form
            </h3>
            <div className="space-y-4">
              {[
                { name: "studentName", label: "Student Name", type: "text" },
                {
                  name: "classApplying",
                  label: "Class Applying For",
                  type: "text",
                },
                { name: "parentName", label: "Parent Name", type: "text" },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "email", label: "Email", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-1 block font-mono text-xs text-slate-500"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    required
                    autoComplete={
                      field.name === "email"
                        ? "email"
                        : field.name === "phone"
                          ? "tel"
                          : "name"
                    }
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        [field.name]: e.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-stone-200/80 bg-pearl px-4 py-3 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="touch-target flex-1 rounded-full bg-gold py-3.5 font-semibold text-navy transition-colors hover:bg-gold-light"
              >
                Submit Inquiry
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle size={18} />
                Enquire via WhatsApp
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

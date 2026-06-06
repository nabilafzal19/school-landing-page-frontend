"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { GalleryCategory, GalleryImage } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(
    null
  );

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-cream" aria-labelledby="gallery-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 text-center sm:mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-gold-dark">
            Campus Life
          </span>
          <h2 id="gallery-heading" className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Photo Gallery
          </h2>
        </motion.div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:mb-10 sm:flex-wrap sm:justify-center">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as GalleryCategory)}
              className={cn(
                "relative shrink-0 touch-target rounded-full px-4 py-2 text-sm transition-colors",
                activeCategory === cat
                  ? "text-navy"
                  : "text-slate-500 hover:text-navy"
              )}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="gallery-tab"
                  className="absolute inset-0 rounded-full bg-gold"
                />
              )}
              <span className="relative z-10 whitespace-nowrap">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((image) => (
              <motion.button
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setLightboxImage(image)}
                className="group relative mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid"
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={500}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="p-4 font-mono text-xs text-gold-light">
                    {image.category}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              className="absolute top-4 right-4 touch-target text-white/70 hover:text-white"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                className="mx-auto max-h-[85vh] w-auto rounded-lg object-contain"
              />
              <p className="mt-3 text-center text-sm text-white/70">
                {lightboxImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

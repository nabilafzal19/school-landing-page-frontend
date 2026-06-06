import { GalleryImage } from "@/lib/types";
import { galleryPhotos } from "@/lib/images";

export const galleryImages: GalleryImage[] = [
  {
    id: "gal-1",
    src: galleryPhotos.annualDay1,
    alt: "Students collaborating on laptops during annual day activities",
    category: "Annual Day",
  },
  {
    id: "gal-2",
    src: galleryPhotos.sports1,
    alt: "Students playing football on the school sports field",
    category: "Sports",
  },
  {
    id: "gal-3",
    src: galleryPhotos.science1,
    alt: "Students conducting a science experiment in the lab",
    category: "Science Fair",
  },
  {
    id: "gal-4",
    src: galleryPhotos.cultural1,
    alt: "Traditional dance performance at a cultural festival",
    category: "Cultural Fest",
  },
  {
    id: "gal-5",
    src: galleryPhotos.graduation1,
    alt: "Graduates celebrating at the commencement ceremony",
    category: "Graduation",
  },
  {
    id: "gal-6",
    src: galleryPhotos.annualDay2,
    alt: "Teacher guiding students in the classroom during annual day week",
    category: "Annual Day",
  },
  {
    id: "gal-7",
    src: galleryPhotos.sports2,
    alt: "Students playing basketball in the school gymnasium",
    category: "Sports",
  },
  {
    id: "gal-8",
    src: galleryPhotos.science2,
    alt: "Student examining specimens through a microscope at science fair",
    category: "Science Fair",
  },
  {
    id: "gal-9",
    src: galleryPhotos.cultural2,
    alt: "Young students rehearsing a group dance routine for cultural fest",
    category: "Cultural Fest",
  },
  {
    id: "gal-10",
    src: galleryPhotos.graduation2,
    alt: "Graduating students walking in the commencement procession",
    category: "Graduation",
  },
  {
    id: "gal-11",
    src: galleryPhotos.annualDay3,
    alt: "Students engaged in a classroom learning session",
    category: "Annual Day",
  },
  {
    id: "gal-12",
    src: galleryPhotos.sports3,
    alt: "Students participating in outdoor athletics on campus",
    category: "Sports",
  },
];

export const galleryCategories = [
  "All",
  "Annual Day",
  "Sports",
  "Science Fair",
  "Cultural Fest",
  "Graduation",
] as const;

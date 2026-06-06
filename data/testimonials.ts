import { Testimonial } from "@/lib/types";
import { testimonialPhotos } from "@/lib/images";

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    message:
      "Greenwood has transformed our daughter's confidence and academic performance. The teachers genuinely care about each child's growth.",
    parentName: "Mrs. Sunita Reddy",
    studentClass: "Parent of Class VIII student",
    photo: testimonialPhotos.sunita,
  },
  {
    id: "test-2",
    message:
      "The holistic approach to education here is remarkable. My son excels not just in academics but in sports and arts too.",
    parentName: "Mr. Vikram Malhotra",
    studentClass: "Parent of Class X student",
    photo: testimonialPhotos.vikram,
  },
  {
    id: "test-3",
    message:
      "We chose Greenwood for its values and world-class infrastructure. Three years later, we couldn't be happier with our decision.",
    parentName: "Dr. Meera Iyer",
    studentClass: "Parent of Class VI student",
    photo: testimonialPhotos.meera,
  },
  {
    id: "test-4",
    message:
      "The school's focus on STEM and innovation labs has sparked a genuine love for science in our child. Highly recommended!",
    parentName: "Mr. Arjun Desai",
    studentClass: "Parent of Class XII student",
    photo: testimonialPhotos.arjun,
  },
];

export type NoticeCategory =
  | "General"
  | "Exam"
  | "Holiday"
  | "Event"
  | "Urgent";

export interface Notice {
  id: string;
  title: string;
  body: string;
  date: string;
  category: NoticeCategory;
  isActive: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  yearsOfExperience: number;
  photo: string;
  linkedin?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export type GalleryCategory =
  | "Annual Day"
  | "Sports"
  | "Science Fair"
  | "Cultural Fest"
  | "Graduation"
  | "All";

export interface Testimonial {
  id: string;
  message: string;
  parentName: string;
  studentClass: string;
  photo: string;
}

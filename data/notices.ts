import { Notice } from "@/lib/types";

export const defaultNotices: Notice[] = [
  {
    id: "notice-1",
    title: "Admissions Open for 2025-26",
    body: "Applications are now being accepted for Nursery through Class XII. Visit the admissions section for details.",
    date: "2025-06-01T00:00:00.000Z",
    category: "General",
    isActive: true,
  },
  {
    id: "notice-2",
    title: "Annual Sports Day — June 15",
    body: "All students are requested to report in sports uniform. Parents are welcome to attend.",
    date: "2025-06-05T00:00:00.000Z",
    category: "Event",
    isActive: true,
  },
  {
    id: "notice-3",
    title: "Mid-Term Examination Schedule",
    body: "Mid-term exams for Classes VI–XII will commence from June 20. Timetable available on notice board.",
    date: "2025-06-03T00:00:00.000Z",
    category: "Exam",
    isActive: true,
  },
  {
    id: "notice-4",
    title: "Summer Vacation Notice",
    body: "School will remain closed from July 1 to July 15 for summer vacation. Reopening on July 16.",
    date: "2025-05-28T00:00:00.000Z",
    category: "Holiday",
    isActive: true,
  },
  {
    id: "notice-5",
    title: "Urgent: Bus Route Change",
    body: "Route 7 bus pickup time changed to 7:15 AM effective immediately. Contact transport office for queries.",
    date: "2025-06-04T00:00:00.000Z",
    category: "Urgent",
    isActive: true,
  },
  {
    id: "notice-6",
    title: "Parent-Teacher Meeting",
    body: "PTM scheduled for June 22, 9 AM–1 PM. All parents are encouraged to attend.",
    date: "2025-06-02T00:00:00.000Z",
    category: "General",
    isActive: true,
  },
];

export const NOTICES_STORAGE_KEY = "school_notices";

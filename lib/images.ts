/**
 * Curated Pexels images — school, students, teachers, and campus life.
 * All URLs verified to load. Replace with your own school photos before going live.
 */
export function pexels(
  id: number,
  width: number,
  height?: number
): string {
  const params = new URLSearchParams({
    auto: "compress",
    cs: "tinysrgb",
    w: String(width),
    fit: "crop",
  });
  if (height) params.set("h", String(height));
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?${params}`;
}

export const aboutImages = {
  classroom: pexels(5211446, 300, 400),
  campus: pexels(1181409, 280, 360),
  library: pexels(256541, 260, 340),
} as const;

export const facultyPhotos = {
  priya: pexels(774909, 400, 500),
  rajesh: pexels(614810, 400, 500),
  ananya: pexels(1181690, 400, 500),
  suresh: pexels(2379004, 400, 500),
  kavita: pexels(3756681, 400, 500),
  amit: pexels(1222271, 400, 500),
  ritu: pexels(415829, 400, 500),
  deepak: pexels(91227, 400, 500),
} as const;

export const testimonialPhotos = {
  sunita: pexels(1181686, 100, 100),
  vikram: pexels(1681010, 100, 100),
  meera: pexels(1544721, 100, 100),
  arjun: pexels(1689717, 100, 100),
} as const;

export const galleryPhotos = {
  annualDay1: pexels(5211446, 600, 800),
  annualDay2: pexels(8199567, 600, 450),
  annualDay3: pexels(892389, 600, 520),
  sports1: pexels(3621104, 600, 400),
  sports2: pexels(1752757, 600, 550),
  sports3: pexels(573293, 600, 580),
  science1: pexels(2280549, 600, 600),
  science2: pexels(256369, 600, 650),
  cultural1: pexels(31498906, 600, 500),
  cultural2: pexels(7319692, 600, 480),
  graduation1: pexels(17615703, 600, 700),
  graduation2: pexels(20985247, 600, 720),
} as const;

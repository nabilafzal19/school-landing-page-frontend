import type { MetadataRoute } from "next";
import { SCHOOL_NAME, SCHOOL_TAGLINE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SCHOOL_NAME,
    short_name: "Greenwood School",
    description: SCHOOL_TAGLINE,
    start_url: "/",
    display: "standalone",
    background_color: "#FDF8F3",
    theme_color: "#0A1628",
    lang: "en-IN",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

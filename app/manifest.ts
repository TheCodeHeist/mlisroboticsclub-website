import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MLIS Robotics Club",
    short_name: "MLIS RBC",
    description:
      "MLIS Robotics Club is a student-led organization at Maple Leaf International School - Bangladesh, dedicated to fostering innovation and excellence in robotics and technology, and providing a platform for students to explore their interests in these fields from young age.",
    lang: "en-US",
    start_url: "/",
    icons: [
      {
        src: "favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  };
}

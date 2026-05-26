export type OtherWorkCategory = "micro-film" | "poster";

export interface OtherWork {
  slug: string;
  title: string;
  category: OtherWorkCategory;
  description: string;
  mediaType: "video" | "image";
  coverImage: string;
  mediaSrc: string;
  tags: string[];
  year: number;
}

export const otherWorks: OtherWork[] = [
  {
    slug: "osmanthus-flowers-fall",
    title: "Osmanthus Flowers Fall",
    category: "micro-film",
    description:
      "When osmanthus flowers fall, they will bloom again. Some words, don't wait until it's too late to say.",
    mediaType: "video",
    coverImage: "/images/Osmanthus%20flowers%20fall%E5%B0%81%E9%9D%A2.png",
    mediaSrc: "/Osmanthus%20flowers%20fall.mp4",
    tags: ["Micro-Film", "Directing", "Editing", "Visual Storytelling"],
    year: 2025,
  },
  {
    slug: "music-festival-poster",
    title: "Music Festival Poster",
    category: "poster",
    description:
      "A vibrant promotional poster for a music festival, capturing the energy and rhythm of live performance through bold typography and dynamic composition.",
    mediaType: "image",
    coverImage: "/images/%E9%9F%B3%E6%A8%82%E7%AF%80%E6%B5%B7%E5%A0%B1.png",
    mediaSrc: "/images/%E9%9F%B3%E6%A8%82%E7%AF%80%E6%B5%B7%E5%A0%B1.png",
    tags: ["Poster", "Typography", "Print", "Event"],
    year: 2025,
  },
  {
    slug: "vinyl-record-exhibition-poster",
    title: "Vinyl Record Exhibition Poster",
    category: "poster",
    description:
      "A poster design for a vinyl record exhibition, blending retro aesthetics with modern layout to celebrate the culture of analog music.",
    mediaType: "image",
    coverImage: "/images/%E5%94%B1%E7%89%87%E5%B1%95%E6%B5%B7%E6%8A%A5.png",
    mediaSrc: "/images/%E5%94%B1%E7%89%87%E5%B1%95%E6%B5%B7%E6%8A%A5.png",
    tags: ["Poster", "Retro", "Print", "Exhibition"],
    year: 2025,
  },
  {
    slug: "mothers-day-poster",
    title: "Mother's Day Poster",
    category: "poster",
    description:
      "A warm and heartfelt Mother's Day poster design, using soft tones and delicate illustrations to convey gratitude and love.",
    mediaType: "image",
    coverImage: "/images/%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%B5%B7%E6%8A%A5.png",
    mediaSrc: "/images/%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%B5%B7%E6%8A%A5.png",
    tags: ["Poster", "Illustration", "Print", "Holiday"],
    year: 2025,
  },
  {
    slug: "skateboard-club-poster",
    title: "Skateboard Club Poster",
    category: "poster",
    description:
      "An energetic poster for a skateboard club, featuring street-style graphics and bold colors that reflect the freedom and attitude of skate culture.",
    mediaType: "image",
    coverImage: "/images/%E6%BB%91%E6%9D%BF%E7%A4%BE%E6%B5%B7%E6%8A%A5.png",
    mediaSrc: "/images/%E6%BB%91%E6%9D%BF%E7%A4%BE%E6%B5%B7%E6%8A%A5.png",
    tags: ["Poster", "Street Style", "Print", "Club"],
    year: 2025,
  },
  {
    slug: "forest-market-banner",
    title: "Forest Market Banner",
    category: "poster",
    description:
      "A banner design for a forest market event, combining natural elements with a clean layout to create an inviting and fresh visual identity.",
    mediaType: "image",
    coverImage: "/images/%E6%A3%AE%E6%9E%97%E5%B8%82%E9%9B%86%E6%A8%AA%E5%B9%85.png",
    mediaSrc: "/images/%E6%A3%AE%E6%9E%97%E5%B8%82%E9%9B%86%E6%A8%AA%E5%B9%85.png",
    tags: ["Banner", "Nature", "Print", "Event"],
    year: 2025,
  },
  {
    slug: "ai-perfume-commercial",
    title: "AI Perfume Commercial Video",
    category: "micro-film",
    description:
      "A fully self-directed AI commercial video showcasing perfume branding through AI-generated visuals and editing.",
    mediaType: "video",
    coverImage: "/images/Perfume%20commercial%20vedio%20cover%20page.png",
    mediaSrc: "/Perfume%20commercial%20vedio.mp4",
    tags: ["AI Tools", "Editing", "Advertising"],
    year: 2025,
  },
];

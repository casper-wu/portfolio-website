export type ProjectCategory = "ui-ux" | "urban-design" | "multimedia";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  role: string;
  duration: string;
  tools: string[];
  year: number;
  images: string[];
  mediaType?: "video" | "image";
  mediaSrc?: string;
  workflowImage?: string;
}

export const projects: Project[] = [
  {
    slug: "mediplus",
    title: "MediPlus — Online Hospital",
    category: "ui-ux",
    description:
      "A one-stop mobile healthcare app integrating consultation appointments, online medication purchases, and health tracking.",
    fullDescription:
      "MediPlus is a comprehensive mobile healthcare platform that addresses the challenges of time-consuming registration, uneven resource distribution, and cumbersome medication purchasing in traditional healthcare. The app integrates consultation appointments, online medication purchases, health tracking, doctor-patient communication, and medical record management into one seamless experience. Designed with a young, professional, and high-quality visual direction, MediPlus offers user-friendly operations and precise resource matching, creating an efficient full-chain healthcare service experience.",
    image: "/images/mediplus.jpg",
    tags: ["Mobile App", "UX Research", "Design System"],
    role: "UI/UX Designer",
    duration: "3 months",
    tools: ["Figma", "User Research", "Prototyping", "Maze"],
    year: 2025,
    images: ["/images/mediplus-process-1.jpg", "/images/mediplus-process-2.jpg"],
  },
  {
    slug: "construction-company-website",
    title: "Construction Company Website",
    category: "ui-ux",
    description:
      "A professional website design for a construction company, focusing on clear information hierarchy and reliable branding.",
    fullDescription:
      "Designed the official website for a self-owned construction company (Virtual Project). The design focuses on the characteristics of the construction industry, simplifying text expression and information presentation. Using a combination of text and images, short texts, and professional, reliable color schemes, the design enhances the reading experience while effectively reducing cognitive load on users. Multiple homepage concepts were developed to explore different approaches to conveying corporate values and project portfolios.",
    image: "/images/construction-website.jpg",
    tags: ["Web Design", "Corporate Branding", "Information Architecture"],
    role: "UI/UX Designer & Brand Designer",
    duration: "2 months",
    tools: ["Figma", "Adobe Photoshop", "Illustrator"],
    year: 2025,
    images: ["/images/construction-website-process-1.jpg", "/images/construction-website-process-2.jpg"],
  },
  {
    slug: "enterprise-management-system",
    title: "Integrated Enterprise Management System",
    category: "ui-ux",
    description:
      "A comprehensive backend management system with file management, calendar scheduling, and data analytics dashboards.",
    fullDescription:
      "An enterprise-level backend management system designed for long-hour staff usage. A gray-green color scheme was chosen to reduce eye strain, paired with bright but not glaring accent colors. The system features a lightweight card design with intuitive navigation. Key modules include file management with progress tracking, a monthly calendar view with color-coded event statuses and timelines, and data dashboards combining revenue trend charts, transaction records, and sales analytics for comprehensive business monitoring.",
    image: "/images/enterprise-system.jpg",
    tags: ["Backend UI", "Dashboard", "Design System", "Data Viz"],
    role: "UI/UX Designer",
    duration: "4 months",
    tools: ["Figma", "Component Library", "UX Design"],
    year: 2025,
    images: ["/images/enterprise-system-process-1.jpg", "/images/enterprise-system-process-2.jpg"],
  },
  {
    slug: "revival-of-coastal-living",
    title: "The Revival of Coastal Living",
    category: "urban-design",
    description:
      "To Kwa Wan Urban Renewal Project — reconnecting the waterfront corridor with inland communities through strategic node transformation.",
    fullDescription:
      "The core of the To Kwa Wan revitalization plan is to reconnect the previously fragmented waterfront corridor with inland communities by focusing on the transformation of several key nodes and upgrading certain roads. Centered on the daily lives of residents, it aims to create a city that integrates leisure, commerce, and living. The design employs a Density Transfer Protocol — demolishing old tenement buildings and constructing new high-rise residential complexes with green spaces and public areas at ground level. A slow-walking landscape guidance system naturally guides residents through the area, while the new seaside park serves as the spatial climax and ecological anchor. Key interventions include a new living area with vertical communities, a city living room with multifunctional spaces, and a seaside park with diverse activity zones.",
    image: "/images/revival-coastal-living.png",
    tags: ["Urban Renewal", "Waterfront", "Master Planning", "Hong Kong"],
    role: "Urban Design Lead",
    duration: "6 months",
    tools: ["Rhino 3D", "GIS", "Illustrator", "Photoshop"],
    year: 2024,
    images: ["/images/revival-coastal-process-1.jpg", "/images/revival-coastal-process-2.jpg"],
  },
  {
    slug: "revival-of-three-flowers",
    title: "The Revival of the Three Flowers",
    category: "urban-design",
    description:
      "Integrated community redevelopment in Suzhou, reviving the cultural heritage of jasmine, white orchards, and citrus aurantium.",
    fullDescription:
      "A comprehensive community redevelopment program for a 0.51 km² mixed-use community in Suzhou's Wujiang District. Once a thriving bridal business district, the area declined after the COVID-19 pandemic. The design concept centers on the 'Three Flowers Culture' (jasmine, white orchids, and Citrus aurantium — a century-old local heritage). Three major strategies were employed: landscape integration (green space extension, rooftop gardens), industrial restructuring (Three Flowers industry, job creation), and vitality enhancement (event spaces, layout reconfiguration). The master plan includes a Three Flowers Industrial District, Waterfront Commercial District, Characteristic Hotel District, and Lakeside Business District organized around a central water vitality trail.",
    image: "/images/revival-three-flowers.png",
    tags: ["Community Redevelopment", "Cultural Heritage", "Suzhou"],
    role: "Urban Designer",
    duration: "5 months",
    tools: ["Rhino 3D", "AutoCAD", "Illustrator", "Photoshop", "GIS"],
    year: 2024,
    images: ["/images/revival-three-flowers-process-1.jpg", "/images/revival-three-flowers-process-2.jpg"],
  },
  {
    slug: "ties-of-harmony",
    title: "Ties of Harmony",
    category: "urban-design",
    description:
      "A vibrant community embracing diversity — using cultural heritage to strengthen regional links and create a new cultural symbol near Suzhou.",
    fullDescription:
      "Located near the Suzhou Wu Cultural Museum, this project transforms an undeveloped open space into a vibrant comprehensive community. The design uses the area's rich cultural heritage — dating back to the Zhou Dynasty and the Wu State period — to strengthen regional identity. Key strategies include: improving the internal road network with a multi-mobility system (straight fast lanes for efficiency, broken-line streets for interaction), establishing three-dimensional permeability through skywalks and pedestrian corridors, and creating all-age-friendly public spaces that promote inclusivity and social cohesion from children's play areas to cultural exhibition spaces.",
    image: "/images/ties-of-harmony.png",
    tags: ["Public Space", "Cultural Heritage", "Community Design", "Suzhou"],
    role: "Urban Designer",
    duration: "4 months",
    tools: ["Rhino 3D", "GIS", "Illustrator", "InDesign"],
    year: 2024,
    images: ["/images/ties-of-harmony-process-1.jpg", "/images/ties-of-harmony-process-2.jpg"],
  },
  {
    slug: "seeking-warmth-everyday-life",
    title: "Seeking the Warmth of Everyday Life",
    category: "urban-design",
    description:
      "Comprehensive revitalization of a small civic community in Suzhou, reviving the unique late-night snack street culture.",
    fullDescription:
      "A comprehensive plan for revitalizing a mixed-use neighborhood along Ganjiang Road in Suzhou, known for its historic food court culture. The area faced challenges of aging buildings, deteriorating facilities, and declining commercial vitality. The project taps into the unique late-night snack street culture and shared community memories to revive the area's former prosperity. Design strategies include: constructing new dormitory areas with rooftop gardens, creating a youth entrepreneurship zone near the university, establishing a central landscape boulevard, preserving and renovating the existing community fabric, and developing floating market spaces that celebrate the area's street food heritage.",
    image: "/images/seeking-warmth.png",
    tags: ["Community Revitalization", "Street Culture", "Adaptive Reuse"],
    role: "Urban Designer",
    duration: "4 months",
    tools: ["SketchUp", "AutoCAD", "Photoshop", "Illustrator"],
    year: 2024,
    images: ["/images/seeking-warmth-process-1.png", "/images/seeking-warmth-process-2.png"],
  },
  {
    slug: "beyond-the-margins",
    title: "Beyond the Margins",
    category: "urban-design",
    description:
      "Yau Ma Tei inclusive design study — supporting elderly informal workers through spatial solutions and a circular economy hub.",
    fullDescription:
      "A research-driven design project in Yau Ma Tei, Hong Kong, focusing on elderly informal workers — street vendors, waste pickers, and fruit resellers — who remain largely invisible beneath the area's bustling surface. The design proposes a point-line-area system of inclusive spatial solutions: for those wishing to continue informal work, multi-functional modules and revitalized alleyways provide storage, rest, and basic facilities; for those seeking transition, an Integrated Circular Economy Hub offers skill training and pathways to formal employment. The project weaves dignity and circular value back into the urban fabric of Yau Ma Tei.",
    image: "/images/beyond-margins.png",
    tags: ["Inclusive Design", "Social Equity", "Research", "Hong Kong"],
    role: "Urban Design Researcher",
    duration: "3 months",
    tools: ["GIS", "Illustrator", "InDesign", "Photography"],
    year: 2025,
    images: ["/images/beyond-margins-process-1.png", "/images/beyond-margins-process-2.png"],
  },
  {
    slug: "ai-perfume-commercial",
    title: "AI Perfume Commercial Video",
    category: "multimedia",
    description:
      "A fully AI-driven perfume commercial — from concept and visual generation to final editing, exploring the creative potential of AI in advertising.",
    fullDescription:
      "This is a fully AI-driven perfume advertising short film. The entire creative pipeline — from initial concept development and visual asset generation to post-production editing — was completed using AI tools. The project explores the intersection of artificial intelligence and commercial advertising creativity, demonstrating how AI image generation, video synthesis, and intelligent editing can be orchestrated to produce a cohesive brand story. The workflow integrates multiple AI platforms for different stages: text-to-image generation for visual concepts, image-to-video animation for bringing stills to life, and AI-assisted editing for seamless transitions and pacing.",
    image: "/images/Perfume%20commercial%20vedio%20cover%20page.png",
    tags: ["AI Video", "Advertising", "Commercial", "Generative AI"],
    role: "Multimedia Designer",
    duration: "1 week",
    tools: ["Midjourney", "Runway", "Kling", "CapCut"],
    year: 2025,
    images: [],
    mediaType: "video",
    mediaSrc: "/Perfume%20commercial%20vedio.mp4",
    workflowImage: "/images/Perfume%20commercial%20vedio%20work%20flow.png",
  },
  {
    slug: "osmanthus-flowers-fall",
    title: "Osmanthus Flowers Fall",
    category: "multimedia",
    description:
      "An AI micro-film exploring family bonds and unspoken words — when osmanthus flowers fall, they bloom again; some words shouldn't wait until it's too late.",
    fullDescription:
      "\"Osmanthus Flowers Fall\" (桂花落) is an AI-generated micro-film that uses the osmanthus flower as a central metaphor to explore themes of family, memory, and words left unspoken. The story unfolds through a series of AI-generated visuals that trace the delicate, fleeting nature of osmanthus blossoms — mirroring the precious, time-sensitive nature of expressing love and gratitude to those we hold dear. Every stage of production, from scriptwriting and visual concept design to image generation and final editing, was created using AI tools. The film's visual language draws on the warm golden tones of osmanthus blooms, creating a poetic atmosphere that invites reflection on the relationships that matter most.",
    image: "/images/Osmanthus%20flowers%20fall%E5%B0%81%E9%9D%A2.png",
    tags: ["Micro-Film", "AI Generation", "Visual Storytelling", "Short Film"],
    role: "Multimedia Designer",
    duration: "2 weeks",
    tools: ["AI Video Generation", "Storyboarding", "Video Editing", "CapCut"],
    year: 2025,
    images: [],
    mediaType: "video",
    mediaSrc: "/Osmanthus%20flowers%20fall.mp4",
    workflowImage: "/images/Osmanthus%20flowers%20fall%20work%20flow.png",
  },
  {
    slug: "music-festival-poster",
    title: "Music Festival Poster",
    category: "multimedia",
    description:
      "A vibrant promotional poster for a music festival, capturing the energy and rhythm of live performance through bold typography and dynamic composition.",
    fullDescription:
      "A vibrant promotional poster for a music festival, capturing the energy and rhythm of live performance through bold typography and dynamic composition.",
    image: "/images/%E9%9F%B3%E6%A8%82%E7%AF%80%E6%B5%B7%E5%A0%B1.png",
    tags: ["Poster", "Typography", "Print", "Event"],
    role: "Multimedia Designer",
    duration: "1 week",
    tools: ["Photoshop", "Illustrator"],
    year: 2025,
    images: [],
    mediaType: "image",
    mediaSrc: "/images/%E9%9F%B3%E6%A8%82%E7%AF%80%E6%B5%B7%E5%A0%B1.png",
  },
  {
    slug: "vinyl-record-exhibition-poster",
    title: "Vinyl Record Exhibition Poster",
    category: "multimedia",
    description:
      "A poster design for a vinyl record exhibition, blending retro aesthetics with modern layout to celebrate the culture of analog music.",
    fullDescription:
      "A poster design for a vinyl record exhibition, blending retro aesthetics with modern layout to celebrate the culture of analog music.",
    image: "/images/%E5%94%B1%E7%89%87%E5%B1%95%E6%B5%B7%E6%8A%A5.png",
    tags: ["Poster", "Retro", "Print", "Exhibition"],
    role: "Multimedia Designer",
    duration: "1 week",
    tools: ["Photoshop", "Illustrator"],
    year: 2025,
    images: [],
    mediaType: "image",
    mediaSrc: "/images/%E5%94%B1%E7%89%87%E5%B1%95%E6%B5%B7%E6%8A%A5.png",
  },
  {
    slug: "mothers-day-poster",
    title: "Mother's Day Poster",
    category: "multimedia",
    description:
      "A warm and heartfelt Mother's Day poster design, using soft tones and delicate illustrations to convey gratitude and love.",
    fullDescription:
      "A warm and heartfelt Mother's Day poster design, using soft tones and delicate illustrations to convey gratitude and love.",
    image: "/images/%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%B5%B7%E6%8A%A5.png",
    tags: ["Poster", "Illustration", "Print", "Holiday"],
    role: "Multimedia Designer",
    duration: "1 week",
    tools: ["Illustrator", "Photoshop"],
    year: 2025,
    images: [],
    mediaType: "image",
    mediaSrc: "/images/%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%B5%B7%E6%8A%A5.png",
  },
  {
    slug: "skateboard-club-poster",
    title: "Skateboard Club Poster",
    category: "multimedia",
    description:
      "An energetic poster for a skateboard club, featuring street-style graphics and bold colors that reflect the freedom and attitude of skate culture.",
    fullDescription:
      "An energetic poster for a skateboard club, featuring street-style graphics and bold colors that reflect the freedom and attitude of skate culture.",
    image: "/images/%E6%BB%91%E6%9D%BF%E7%A4%BE%E6%B5%B7%E6%8A%A5.png",
    tags: ["Poster", "Street Style", "Print", "Club"],
    role: "Multimedia Designer",
    duration: "1 week",
    tools: ["Photoshop", "Illustrator"],
    year: 2025,
    images: [],
    mediaType: "image",
    mediaSrc: "/images/%E6%BB%91%E6%9D%BF%E7%A4%BE%E6%B5%B7%E6%8A%A5.png",
  },
  {
    slug: "forest-market-banner",
    title: "Forest Market Banner",
    category: "multimedia",
    description:
      "A banner design for a forest market event, combining natural elements with a clean layout to create an inviting and fresh visual identity.",
    fullDescription:
      "A banner design for a forest market event, combining natural elements with a clean layout to create an inviting and fresh visual identity.",
    image: "/images/%E6%A3%AE%E6%9E%97%E5%B8%82%E9%9B%86%E6%A8%AA%E5%B9%85.png",
    tags: ["Banner", "Nature", "Print", "Event"],
    role: "Multimedia Designer",
    duration: "1 week",
    tools: ["Photoshop", "Illustrator"],
    year: 2025,
    images: [],
    mediaType: "image",
    mediaSrc: "/images/%E6%A3%AE%E6%9E%97%E5%B8%82%E9%9B%86%E6%A8%AA%E5%B9%85.png",
  },
];

export const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "multimedia", label: "Multimedia Design" },
  { value: "urban-design", label: "Urban Design" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Palette,
  Building2,
  Box,
  Sparkles,
  Monitor,
  Globe,
  Heart,
  Languages,
  Landmark,
  Briefcase,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FloatingShapes from "@/components/decorative/FloatingShapes";

const skills = [
  {
    category: "Design & Creative",
    icon: Palette,
    color: "bg-secondary",
    items: [
      "Figma",
      "Adobe Creative Suite (Ps, Ai, Id, Pr, Ae)",
      "Canva",
    ],
  },
  {
    category: "3D Modeling & Spatial",
    icon: Box,
    color: "bg-tertiary",
    items: [
      "Rhino 3D",
      "SketchUp",
      "AutoCAD",
      "Lumion",
      "D5 Renderer",
      "ArcGIS Pro",
    ],
  },
  {
    category: "AI & Creative Tech",
    icon: Sparkles,
    color: "bg-accent",
    items: [
      "Vibe Coding (Claude Code)",
      "Kling AI",
      "Nano Banana",
      "GPT Image Generation",
      "Seedance",
      "Midjourney / ComfyUI",
    ],
  },
  {
    category: "Office & Productivity",
    icon: Monitor,
    color: "bg-quaternary",
    items: [
      "Microsoft Office Suite",
      "WPS Office",
    ],
  },
];

const timeline = [
  {
    year: "2025-2027",
    title: "M.Sc. Urban Design",
    org: "The Chinese University of Hong Kong",
    type: "education",
    description:
      "Advanced study in urban design and urban renewal research, focusing on humanistic perspectives and rational analysis for creating vibrant, sustainable public spaces.",
  },
  {
    year: "2024",
    title: "Summer Intern",
    org: "Suzhou Natural Resources and Planning Bureau",
    type: "work",
    description:
      "Assisted in the review and support of planning proposals, blueprint review, and conducted field research in the Land Resources Planning Department.",
  },
  {
    year: "03/2024-05/2024",
    title: "Part-time Designer (Remote)",
    org: "Fu Bafang (Suzhou) Network Technology Company",
    type: "work",
    description:
      "Created APP page prototypes, produced event banners and posters, and edited short videos for events.",
  },
  {
    year: "2023",
    title: "Summer Intern",
    org: "Chengkou County Jia Yangsheng Construction Engineering Consulting Center",
    type: "work",
    description:
      "Supported drawings for the 'Chengkou Village Road Hardening Project', document management, and financial auditing.",
  },
  {
    year: "2021-2025",
    title: "B.A. Urban Planning and Design",
    org: "Xi'an Jiaotong-Liverpool University",
    type: "education",
    description:
      "Foundation in urban planning, spatial design, and visual communication. Developed skills across modeling, GIS, rendering, and design software.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <FloatingShapes count={6} />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-secondary rounded-full" />
              <span className="font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground">
                About Me
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 max-w-3xl">
              Starting with humanistic concern and rational analysis — creating
              public value through design.
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="bg-card border-2 border-foreground rounded-lg p-8 shadow-pop-card">
                <p className="text-lg leading-relaxed mb-4">
                  I&apos;m Wu Mingju (Casper) — currently pursuing a Master of
                  Urban Design at The Chinese University of Hong Kong, building
                  on a Bachelor&apos;s degree in Urban Planning and Design from
                  Xi&apos;an Jiaotong-Liverpool University.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I focus on translating research into implementable solutions
                  through strong analytical thinking, design proficiency, and
                  user-centered methodologies. I&apos;m experienced in managing
                  the complete workflow — from investigation and data analysis
                  to strategy formulation, prototyping, and final delivery.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What sets me apart is the ability to approach problems from
                  multiple perspectives with the same design rigor, creating work
                  that is not only visually compelling but also deeply functional
                  and grounded in real user needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Profile Photo */}
              <div className="bg-card border-2 border-foreground rounded-lg overflow-hidden shadow-pop-card">
                <div className="aspect-square relative">
                  <img
                    src="/images/profile.jpg"
                    alt="Wu Mingju"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 pt-12">
                    <p className="text-white font-heading font-bold text-lg">
                      Wu Mingju
                    </p>
                    <p className="text-white/80 text-sm">Casper</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Location / Education / Languages */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-card border-2 border-foreground rounded-lg p-6 shadow-pop-card h-full">
                <MapPin size={24} className="text-accent mb-3" />
                <h3 className="font-heading font-bold mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Hongkong
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-card border-2 border-foreground rounded-lg p-6 shadow-pop-card h-full">
                <GraduationCap size={24} className="text-secondary mb-3" />
                <h3 className="font-heading font-bold mb-1">Education</h3>
                <p className="text-muted-foreground text-sm">
                  M.Sc. Urban Design @ CUHK (2025-2027)
                  <br />
                  B.A. Urban Planning @ XJTLU (2021-2025)
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-card border-2 border-foreground rounded-lg p-6 shadow-pop-card h-full">
                <Languages size={24} className="text-tertiary mb-3" />
                <h3 className="font-heading font-bold mb-1">Languages</h3>
                <p className="text-muted-foreground text-sm">
                  Chinese (Mother Tongue)
                  <br />
                  English (IELTS 6.5)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Proficiency across design, 3D modeling, AI tools, and office
              software — the hard skills that bring ideas to life.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, i) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div
                    className={`w-10 h-10 ${skillGroup.color} rounded-full border-2 border-foreground flex items-center justify-center mb-4 shadow-pop`}
                  >
                    <skillGroup.icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-base mb-3">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              <span className="text-secondary">Education</span>
              <span className="mx-3 text-muted-foreground">&#183;</span>
              <span className="text-accent">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              My academic journey and professional experience in urban planning,
              design, and research.
            </p>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={`${item.year}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 top-1 w-[30px] h-[30px] border-2 border-foreground rounded-full flex items-center justify-center shadow-pop z-10 ${
                      item.type === "education" ? "bg-secondary" : "bg-accent"
                    }`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <div className="bg-card border-2 border-foreground rounded-lg p-6 shadow-pop-card">
                    <span
                      className={`font-heading font-bold text-sm ${
                        item.type === "education" ? "text-secondary" : "text-accent"
                      }`}
                    >
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-lg mt-1">
                      {item.title}
                    </h3>
                    <p className="font-heading font-medium text-sm text-muted-foreground mb-2">
                      {item.org}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Research */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Academic Research
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Research projects exploring the intersection of urban
              environments, human behavior, and data analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title:
                  "Quantitative Study on the Emotional Value of Human-Wildlife Connections in High-Density Urban Environments",
                icon: Heart,
                color: "bg-secondary",
                description:
                  "Investigating how interactions with wildlife in dense urban settings contribute to emotional well-being and quality of life for city residents.",
              },
              {
                title:
                  "Investigation Project on Cross-Language Plagiarism",
                icon: Globe,
                color: "bg-accent",
                description:
                  "A research study examining cross-language plagiarism detection methods and their application in academic integrity contexts.",
              },
            ].map((research, i) => (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div
                    className={`w-12 h-12 ${research.color} rounded-full border-2 border-foreground flex items-center justify-center mb-4 shadow-pop`}
                  >
                    <research.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-base mb-2">
                    {research.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {research.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Landmark size={40} className="mx-auto mb-4 text-accent" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Want to work together?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              I&apos;m always open to new projects, collaborations, and
              conversations.
            </p>
            <div className="inline-flex flex-col items-center gap-3 bg-card border-2 border-foreground rounded-lg px-8 py-5 shadow-pop-card">
              <span className="font-heading font-bold text-base">
                Mingju.Wu2003@outlook.com
              </span>
              <span className="font-heading font-medium text-sm text-muted-foreground">
                +852-5547 0469
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

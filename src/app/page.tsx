"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Palette, Building2, Film } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FloatingShapes from "@/components/decorative/FloatingShapes";
import SquiggleDivider from "@/components/decorative/SquiggleDivider";
import { projects } from "@/lib/projects";

export default function Home() {
  const featuredSlugs = [
    "mediplus",
    "ai-perfume-commercial",
    "revival-of-coastal-living",
  ];
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <FloatingShapes count={8} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 md:w-48 md:h-48 bg-tertiary rounded-full opacity-20 md:opacity-30 -z-10" />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 bg-muted border-2 border-foreground rounded-full px-4 py-1.5 mb-6 text-sm font-heading font-bold">
                  <Sparkles size={16} className="text-secondary" />
                  Multi-disciplinary Designer
                </div>
                <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  Creating value through{" "}
                  <span className="text-accent relative">
                    people-centered design
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      fill="none"
                    >
                      <path
                        d="M2,10 C50,2 100,2 198,10"
                        stroke="#F472B6"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
                  What sets me apart is the ability to approach problems from
                  multiple perspectives with the same design rigor, creating work
                  that is not only visually compelling but also deeply functional
                  and grounded in real user needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/projects">
                    <Button>
                      View Projects
                      <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowRight size={14} />
                      </span>
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button variant="secondary">Download Portfolio</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="secondary">About Me</Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem]">
                {/* Decorative layers */}
                <div className="absolute inset-0 bg-secondary rounded-blob border-2 border-foreground shadow-pop transform rotate-6" />
                <div className="absolute inset-2 bg-tertiary rounded-blob border-2 border-foreground shadow-pop transform -rotate-3" />
                <div className="absolute inset-4 overflow-hidden rounded-blob border-2 border-foreground shadow-pop">
                  <img
                    src="/images/profile.jpg"
                    alt="Mingju Wu"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating label */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-card border-2 border-foreground rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-pop"
                >
                  <span className="font-heading font-bold text-sm whitespace-nowrap">
                    ✦ City + Digital
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SquiggleDivider className="my-8" />

      {/* Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Three Fields, One Vision
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From digital interfaces to multimedia storytelling to urban spaces,
              I bring integrated design thinking across disciplines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "UI/UX Design",
                description:
                  "User-centered digital products, enterprise systems, and brand experiences that are functional and delightful.",
                icon: Palette,
                color: "bg-secondary",
                items: [
                  "Product Design",
                  "UX Design",
                  "Design Systems",
                  "User Research",
                  "Prototyping",
                  "Visual Design",
                ],
              },
              {
                title: "Multimedia Design",
                description:
                  "AI-driven video production, poster design, and visual storytelling that capture attention and communicate ideas with impact.",
                icon: Film,
                color: "bg-accent",
                items: [
                  "Video Production",
                  "Poster Design",
                  "AI Content Creation",
                  "Visual Storytelling",
                  "Brand Identity",
                  "Motion Graphics",
                ],
              },
              {
                title: "Urban Design",
                description:
                  "Master planning, urban renewal, and community-driven design strategies that create vibrant, sustainable, and inclusive public spaces.",
                icon: Building2,
                color: "bg-tertiary",
                items: [
                  "Master Planning",
                  "Urban Renewal",
                  "Public Space Design",
                  "Community Engagement",
                  "GIS Analysis",
                  "3D Modeling",
                ],
              },
            ].map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="h-full"
              >
                <Card className="p-8 h-full flex flex-col">
                  <div
                    className={`w-14 h-14 ${area.color} rounded-full border-2 border-foreground flex items-center justify-center mb-6 shadow-pop`}
                  >
                    <area.icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {area.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-muted border border-border rounded-full text-xs font-heading font-bold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-2">
                Featured Work
              </h2>
              <p className="text-muted-foreground">
                A selection of recent projects across all three disciplines.
              </p>
            </div>
            <Link href="/projects">
              <Button variant="secondary">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => {
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <Link href={`/projects/${project.slug}`} className="flex-1">
                    <div className="bg-card border-2 border-foreground rounded-lg shadow-pop-card overflow-hidden flex flex-col h-full">
                      <div className="h-44 border-b-2 border-foreground overflow-hidden flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 pb-4 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-heading font-bold border-2 border-foreground ${
                              project.category === "ui-ux"
                                ? "bg-secondary text-white"
                                : project.category === "multimedia"
                                  ? "bg-accent text-white"
                                  : "bg-quaternary text-white"
                            }`}
                          >
                            {project.category === "ui-ux"
                              ? "UI/UX"
                              : project.category === "multimedia"
                                ? "Multimedia"
                                : "Urban Design"}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-lg mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                          {project.description}
                        </p>
                      </div>
                      <div className="px-6 pb-6 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-tertiary/20 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
              Let&apos;s Create Together
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Whether it&apos;s a digital product or an urban intervention, I&apos;d
              love to hear about your project.
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

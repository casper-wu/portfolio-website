"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Building2, Film } from "lucide-react";
import Card from "@/components/ui/Card";
import FloatingShapes from "@/components/decorative/FloatingShapes";
import { projects, categories, type ProjectCategory } from "@/lib/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <FloatingShapes count={6} />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Palette size={16} className="text-secondary" />
              <Building2 size={16} className="text-quaternary" />
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">
              Projects
            </h1>
            <p className="text-muted-foreground">
              A collection of work spanning UI/UX design, urban design, and
              multimedia design — exploring the intersection of people, technology, and place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-6 py-2.5 font-heading font-bold text-sm rounded-full border-2 border-foreground transition-all duration-300 ${
                  activeFilter === cat.value
                    ? "bg-accent text-white shadow-pop"
                    : "bg-card text-foreground hover:bg-tertiary hover:-translate-y-0.5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-8 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const isVideo = project.mediaType === "video";
                return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Card
                    {...(isVideo && project.mediaSrc
                      ? { onClick: () => window.open(project.mediaSrc, "_blank") }
                      : { href: `/projects/${project.slug}` }
                    )}
                    shadowColor={["pink", "yellow", "green", "violet"][i % 4] as any}
                    className="h-full flex flex-col"
                  >
                    {/* Project Thumbnail */}
                    <div
                      className={`h-40 border-b-2 border-foreground overflow-hidden rounded-t-lg ${
                        project.image && !project.image.startsWith("/images/placeholder-")
                          ? ""
                          : project.category === "ui-ux"
                          ? "bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center"
                          : "bg-gradient-to-br from-quaternary/20 to-tertiary/20 flex items-center justify-center"
                      }`}
                    >
                      {project.image && !project.image.startsWith("/images/placeholder-") ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : project.category === "ui-ux" ? (
                        <Palette
                          size={48}
                          className="text-secondary"
                          strokeWidth={1.5}
                        />
                      ) : project.category === "multimedia" ? (
                        <Film
                          size={48}
                          className="text-accent"
                          strokeWidth={1.5}
                        />
                      ) : (
                        <Building2
                          size={48}
                          className="text-quaternary"
                          strokeWidth={1.5}
                        />
                      )}
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
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
                        <span className="text-xs text-muted-foreground">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-heading font-bold">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

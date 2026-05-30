"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  User,
  Wrench,
  Building2,
  Palette,
  Film,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FloatingShapes from "@/components/decorative/FloatingShapes";
import { getProjectBySlug, projects } from "@/lib/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="font-heading font-extrabold text-3xl mb-4">
          Project not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/projects">
          <Button>
            <ArrowLeft size={16} /> Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const related = projects
    .filter(
      (p) => p.slug !== slug && p.category === project.category
    )
    .slice(0, 2);

  return (
    <>
      {/* Back button */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-heading font-bold text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-12">
        <FloatingShapes count={4} />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-heading font-bold border-2 border-foreground flex items-center gap-1 ${
                  project.category === "ui-ux"
                    ? "bg-secondary text-white"
                    : project.category === "multimedia"
                      ? "bg-accent text-white"
                      : "bg-quaternary text-white"
                }`}
              >
                {project.category === "ui-ux" ? (
                  <Palette size={12} />
                ) : project.category === "multimedia" ? (
                  <Film size={12} />
                ) : (
                  <Building2 size={12} />
                )}
                {project.category === "ui-ux"
                  ? "UI/UX Design"
                  : project.category === "multimedia"
                    ? "Multimedia Design"
                    : "Urban Design"}
              </span>
              <span className="text-sm text-muted-foreground">
                {project.year}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 max-w-3xl">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Media */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-lg border-2 border-foreground shadow-pop-card overflow-hidden"
          >
            {project.mediaType === "video" && project.mediaSrc ? (
              <video
                src={project.mediaSrc}
                controls
                className="w-full max-h-[70vh] bg-black"
              />
            ) : project.image && !project.image.startsWith("/images/placeholder-") ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[70vh] object-contain bg-muted/30"
              />
            ) : (
              <div className={`h-64 md:h-80 flex items-center justify-center ${
                project.category === "ui-ux"
                  ? "bg-gradient-to-br from-secondary/20 via-accent/10 to-tertiary/20"
                  : project.category === "multimedia"
                    ? "bg-gradient-to-br from-accent/20 via-secondary/10 to-tertiary/20"
                    : "bg-gradient-to-br from-quaternary/20 via-tertiary/10 to-secondary/20"
              }`}>
                <div className="text-center">
                  {project.category === "ui-ux" ? (
                    <Palette size={64} className="text-secondary mx-auto mb-4" strokeWidth={1.5} />
                  ) : project.category === "multimedia" ? (
                    <Film size={64} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
                  ) : (
                    <Building2 size={64} className="text-quaternary mx-auto mb-4" strokeWidth={1.5} />
                  )}
                  <p className="font-heading font-bold text-muted-foreground">
                    Add your image
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Replace with screenshot or rendering
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-1 space-y-6"
            >
              <div className="bg-card border-2 border-foreground rounded-lg p-6 shadow-pop-card">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-xs uppercase tracking-wide text-muted-foreground">
                        Role
                      </p>
                      <p className="text-sm">{project.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-xs uppercase tracking-wide text-muted-foreground">
                        Duration
                      </p>
                      <p className="text-sm">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench size={18} className="text-tertiary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-xs uppercase tracking-wide text-muted-foreground">
                        Tools
                      </p>
                      <p className="text-sm">{project.tools.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-foreground rounded-lg p-6 shadow-pop-card">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted border border-border rounded-full text-xs font-heading font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2"
            >
              <div className="bg-card border-2 border-foreground rounded-lg p-8 shadow-pop-card">
                <h3 className="font-heading font-bold text-xl mb-4">
                  About This Project
                </h3>
                <div className="prose prose-slate max-w-none leading-relaxed text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
              </div>

              {/* Workflow Image */}
              {"workflowImage" in project && project.workflowImage && (
                <div className="mt-6">
                  <h3 className="font-heading font-bold text-xl mb-4">
                    Workflow
                  </h3>
                  <div className="border-2 border-foreground rounded-lg overflow-hidden shadow-pop-card">
                    <img
                      src={project.workflowImage}
                      alt={`${project.title} workflow`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}

              {/* Process gallery */}
              {project.images.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="h-40 overflow-hidden border-2 border-foreground rounded-lg"
                    >
                      <img
                        src={img}
                        alt={`${project.title} process image ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-extrabold text-2xl md:text-3xl mb-8"
            >
              More{" "}
              {project.category === "ui-ux"
                ? "UI/UX"
                : project.category === "multimedia"
                  ? "Multimedia"
                  : "Urban Design"}{" "}
              Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {related.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/projects/${p.slug}`}>
                    <div className="bg-card border-2 border-foreground rounded-lg p-6 shadow-pop-card hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-heading font-bold border-2 border-foreground ${
                            p.category === "ui-ux"
                              ? "bg-secondary text-white"
                              : p.category === "multimedia"
                                ? "bg-accent text-white"
                                : "bg-quaternary text-white"
                          }`}
                        >
                          {p.category === "ui-ux"
                            ? "UI/UX"
                            : p.category === "multimedia"
                              ? "Multimedia"
                              : "Urban Design"}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              {prevProject && (
                <Link href={`/projects/${prevProject.slug}`}>
                  <Button variant="secondary">
                    <ArrowLeft size={16} /> Previous
                  </Button>
                </Link>
              )}
            </div>
            <div>
              {nextProject && (
                <Link href={`/projects/${nextProject.slug}`}>
                  <Button>
                    Next <ArrowLeft size={16} className="rotate-180" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

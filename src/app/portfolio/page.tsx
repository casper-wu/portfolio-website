"use client";

import { motion } from "framer-motion";
import { Eye, Palette, Building2 } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import FloatingShapes from "@/components/decorative/FloatingShapes";
import { portfolioFiles } from "@/lib/portfolio";

const categoryIcons: Record<string, typeof Palette> = {
  "ui-ux": Palette,
  "urban-design": Building2,
};

const categoryColors: Record<string, string> = {
  "ui-ux": "bg-secondary",
  "urban-design": "bg-quaternary",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <FloatingShapes count={6} />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">
              Portfolio
            </h1>
            <p className="text-muted-foreground">
              Browse my full portfolio directly in your browser.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioFiles.map((file, i) => {
              const Icon = categoryIcons[file.slug] || Palette;
              const color = categoryColors[file.slug] || "bg-accent";

              return (
                <motion.div
                  key={file.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/portfolio/${file.slug}`}>
                    <Card className="p-8 h-full flex flex-col">
                      <div
                        className={`w-14 h-14 ${color} rounded-full border-2 border-foreground flex items-center justify-center mb-6 shadow-pop`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>

                      <h2 className="font-heading font-bold text-xl mb-3">
                        {file.title}
                      </h2>
                      <p className="text-muted-foreground text-sm flex-1 mb-6">
                        {file.description}
                      </p>

                      <div className="flex items-center gap-2 text-accent font-heading font-bold text-sm group">
                        <Eye size={16} />
                        View Portfolio
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

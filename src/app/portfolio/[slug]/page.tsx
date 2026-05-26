"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Palette, Building2, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import { portfolioFiles } from "@/lib/portfolio";

const categoryIcons: Record<string, typeof Palette> = {
  "ui-ux": Palette,
  "urban-design": Building2,
};

export default function PortfolioViewerPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const file = portfolioFiles.find((f) => f.slug === slug);
  const Icon = file ? categoryIcons[file.slug] || Palette : Palette;

  if (!file) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="font-heading font-extrabold text-3xl mb-4">
          Portfolio not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The portfolio you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button onClick={() => router.push("/portfolio")}>
          <ArrowLeft size={16} /> Back to Portfolio
        </Button>
      </div>
    );
  }

  const pdfUrl = `/${encodeURI(file.fileName)}`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-foreground">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => router.push("/portfolio")}
            className="inline-flex items-center gap-2 font-heading font-bold text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <div className="flex items-center gap-2">
            <Icon size={18} className="text-accent" />
            <span className="font-heading font-bold">{file.title}</span>
          </div>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm text-accent hover:text-accent/80 transition-colors"
          >
            Open in new tab
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 bg-muted/30"
      >
        <iframe
          src={pdfUrl}
          className="w-full h-[calc(100vh-4rem)] border-none"
          title={file.title}
        />
      </motion.div>

      {/* Fallback for mobile */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full justify-center shadow-pop-hover">
            <ExternalLink size={16} />
            Open PDF to View
          </Button>
        </a>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "circle" | "triangle" | "square";
  color: string;
  size: number;
  x: number;
  y: number;
  rotation: number;
  duration: number;
  delay: number;
}

const colors = ["#F472B6", "#FBBF24", "#34D399", "#8B5CF6", "#FB923C"];

function generateShapes(count: number): Shape[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: (["circle", "triangle", "square"] as const)[
      Math.floor(Math.random() * 3)
    ],
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    duration: Math.random() * 4 + 4,
    delay: Math.random() * 2,
  }));
}

export default function FloatingShapes({
  count = 6,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setShapes(generateShapes(count));
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, [count]);

  if (reducedMotion || shapes.length === 0) return null;

  const renderShape = (shape: Shape) => {
    const style = {
      width: shape.size,
      height: shape.size,
      backgroundColor: shape.color,
    };

    switch (shape.type) {
      case "circle":
        return <div key={shape.id} style={style} className="rounded-full" />;
      case "square":
        return (
          <div
            key={shape.id}
            style={style}
            className="rounded-sm"
          />
        );
      case "triangle":
        return (
          <div
            key={shape.id}
            style={{
              ...style,
              backgroundColor: "transparent",
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
            }}
          />
        );
    }
  };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [shape.rotation, shape.rotation + 10, shape.rotation],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: "pink" | "yellow" | "green" | "violet";
  href?: string;
  onClick?: () => void;
}

const shadowMap = {
  pink: "shadow-pop-card-pink",
  yellow: "shadow-pop-card-yellow",
  green: "shadow-pop-card-green",
  violet: "shadow-pop-card-violet",
};

export default function Card({
  children,
  className = "",
  shadowColor,
  href,
  onClick,
}: CardProps) {
  const shadow = shadowColor
    ? shadowMap[shadowColor]
    : "shadow-pop-card";
  const baseClass = `
    bg-card border-2 border-foreground rounded-lg
    ${shadow} transition-all duration-300
    ${href || onClick ? "cursor-pointer" : ""}
    ${className}
  `;
  const content = (
    <motion.div
      whileHover={{
        rotate: -1,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className={baseClass}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}

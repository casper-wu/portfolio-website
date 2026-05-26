"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className = "", ...props }, ref) => {
    const base =
      "inline-flex items-center gap-2 px-8 py-3 font-heading font-bold text-base border-2 border-foreground rounded-full transition-all duration-300 active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-accent text-accent-foreground shadow-pop hover:shadow-pop-hover hover:translate-x-[-2px] hover:translate-y-[-2px]",
      secondary:
        "bg-transparent text-foreground hover:bg-tertiary hover:border-tertiary",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${variants[variant]} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;

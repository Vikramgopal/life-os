"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AuthCardProps = {
  children: ReactNode;
};

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        w-full
        max-w-md
        rounded-2xl
        border
        border-border1
        bg-bg2/80
        p-5
        shadow-2xl
        backdrop-blur-xl
        sm:p-7
      "
    >
      {children}
    </motion.section>
  );
}

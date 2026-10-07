"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AuthShellProps = {
  children: ReactNode;
};

export default function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-bg1 text-text-primary">
      {/* Background glow */}
      <motion.div
        className="
          absolute
          -left-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-primary/20
          blur-3xl
        "
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          -bottom-40
          -right-32
          h-96
          w-96
          rounded-full
          bg-info/10
          blur-3xl
        "
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small decorative dots */}
      <div className="absolute left-[15%] top-[20%] h-1.5 w-1.5 rounded-full bg-primary/60" />
      <div className="absolute right-[20%] top-[25%] h-1 w-1 rounded-full bg-text-secondary/40" />
      <div className="absolute bottom-[25%] left-[20%] h-1 w-1 rounded-full bg-primary/50" />
      <div className="absolute bottom-[20%] right-[15%] h-1.5 w-1.5 rounded-full bg-info/50" />

      {/* Content */}
      <div className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-8 sm:px-6">
        {children}
      </div>
    </main>
  );
}

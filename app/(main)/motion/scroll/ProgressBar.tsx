"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleXSpring = useSpring(scrollYProgress);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-0.5 bg-red-500 fixed top-0 left-0 right-0 origin-left !z-50"
      />
      <motion.div
        className="h-0.5 bg-blue-500 fixed left-0 right-0 top-0.5 origin-left !z-50"
        style={{ scaleX: scaleXSpring }}
      />
    </>
  );
}

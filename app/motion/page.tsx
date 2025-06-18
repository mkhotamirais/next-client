"use client";

import React from "react";
import { motion } from "motion/react";

export default function Motion() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="h2">Usage</h2>
        <div className="flex gap-4">
          <motion.div animate={{ rotate: 360 }} className="size-34 border">
            motion
          </motion.div>
          <motion.div
            animate={{
              scale: 1.2,
              transition: { duration: 2 },
            }}
            className="border size-34"
          />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="h3">Enter Animation</h3>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="border size-34" />
      </div>
      <div className="mb-4">
        <h3 className="h3">Gesture</h3>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="border size-34"
        >
          hover or click me
        </motion.div>
      </div>
      <div className="mb-4">
        <h3 className="h3">Scroll animation</h3>
        <motion.div
          initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
          whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
          className="border size-34"
        />
      </div>
    </section>
  );
}

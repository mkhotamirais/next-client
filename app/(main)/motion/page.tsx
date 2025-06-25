"use client";

import React from "react";
import { motion } from "motion/react";
import Gesture from "./Gesture";

export default function Motion() {
  return (
    <section>
      <div className="mb-4">
        <p>4 pin utama dasar animasi web</p>
        <ul>
          <li>
            properti yang dianimasi: properti visual yang sering dianimasi: opacity, transform (scale, translatex/y,
            rotate), color, width height
          </li>
          <li>durasi dan delay</li>
          <li>easing (gaya gerakan)</li>
          <li>trigger (pemicu animasi)</li>
        </ul>
        <Gesture />
        <h2 className="h2">Usage</h2>
        <div className="flex flex-wrap gap-4">
          <motion.div animate={{ rotate: 360 }} className="size-32 border">
            motion
          </motion.div>
          <motion.div
            animate={{
              scale: 1.2,
              transition: { duration: 2 },
            }}
            className="border size-32"
          />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="h3">Enter Animation</h3>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="border size-32" />
      </div>
      <div className="mb-4">
        <h3 className="h3">Gesture</h3>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="border size-32"
        >
          hover or click me
        </motion.div>
      </div>
      <div className="mb-4">
        <h3 className="h3">Scroll animation</h3>
        <motion.div
          initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
          whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
          className="border size-32"
        />
      </div>
    </section>
  );
}

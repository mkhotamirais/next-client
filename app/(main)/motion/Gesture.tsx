"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const MButton = motion(Button);

export default function Gesture() {
  return (
    <section>
      <h2 className="h2">Gesture</h2>
      <MButton whileTap={{ scale: 0.9 }}>Gesture 1</MButton>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function SectionHero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-xl space-y-4 border">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl lg:text-6xl font-bold">
            What do you do?
          </motion.h1>
          <p className="text-lg">
            How can you help me? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, omnis fuga eveniet
            perferendis sapiente facilis.
          </p>
          <div className="flex gap-4">
            <Button size={"lg"}>Button</Button>
            <Button size={"lg"}>Cta</Button>
          </div>
          <div>
            <Link href="/company-profile-1">Company Profile 1</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

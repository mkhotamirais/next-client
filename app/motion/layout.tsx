import Section from "@/components/Section";
import React from "react";
import c from "@/lib/content.json";

export default function MotionLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section title="Motion" menu={c.motion_menu}>
      {children}
    </Section>
  );
}

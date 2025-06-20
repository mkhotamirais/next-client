import Section from "@/components/Section";
import React from "react";
import c from "@/lib/content.json";

export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section title="Web Desgin" menu={c.web_design_menu}>
      {children}
    </Section>
  );
}

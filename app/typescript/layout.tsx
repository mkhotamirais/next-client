import Section from "@/components/Section";
import React from "react";
import c from "@/lib/content.json";

export default function TypescriptLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section title="Typescript" menu={c.typescript_menu}>
      {children}
    </Section>
  );
}

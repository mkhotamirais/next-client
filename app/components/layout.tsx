import Section from "@/components/Section";
import React from "react";
import c from "@/lib/content.json";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section title="Components" menu={c.components_menu}>
      {children}
    </Section>
  );
}

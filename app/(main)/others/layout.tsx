import Section from "@/components/Section";
import React from "react";
import c from "@/lib/content.json";

export default function OthersLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section title="Others" menu={c.others_menu}>
      {children}
    </Section>
  );
}

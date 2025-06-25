import Section from "@/components/Section";
import React from "react";
import c from "@/lib/content.json";

export default function PublicApiLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section title="Public Api" menu={c.public_api_menu}>
      {children}
    </Section>
  );
}

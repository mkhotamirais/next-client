"use client";

import Section from "@/components/Section";
import React, { useEffect, useState } from "react";
import c from "@/lib/content.json";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;
  return (
    <Section title="Components" menu={c.components_menu}>
      {children}
    </Section>
  );
}

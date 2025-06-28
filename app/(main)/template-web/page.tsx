"use client";

import React from "react";
import SectionHeader from "./(home-section)/SectionHeader";
import SectionFooter from "./(home-section)/SectionFooter";
import SectionHero from "./(home-section)/SectionHero";
import SectionProducts from "./(home-section)/SectionProducts";
import SectionAbout from "./(home-section)/SectionAbout";
import SectionCta from "./(home-section)/SectionCta";
import SectionTestimoni from "./(home-section)/SectionTestimoni";

export default function TemplateWeb() {
  return (
    <>
      <SectionHeader />
      <SectionHero />
      <SectionProducts />
      <SectionAbout />
      {/* Penggugah: testimoni, review, studi kasus, portfolio, brand yang bekerja sama denganmu buat 1 - 4 */}
      <SectionTestimoni />
      <SectionCta />
      <SectionFooter />
    </>
  );
}

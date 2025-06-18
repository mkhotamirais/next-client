import React from "react";
import Sheet2 from "./ui/Sheet2";

interface ISection {
  title: string;
  menu?: { label: string; url: string }[];
  children: React.ReactNode;
}

export default function Section({ title, menu, children }: ISection) {
  return (
    <section className="min-h-y py-4">
      <div className="container">
        <div className="flex gap-3 items-center mb-4">
          <Sheet2 title={title} menu={menu} />
          <h1 className="h1">{title}</h1>
        </div>
        {children}
      </div>
    </section>
  );
}

import React from "react";
import MultiSelect from "./MultiSelect";

export default function MultiselectPage() {
  return (
    <section className="max-w-sm mx-auto min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h1 className="h1">Multiselect</h1>
        <MultiSelect />
      </div>
    </section>
  );
}

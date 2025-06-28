import React from "react";
import Tiptap from "./Tiptap";

export default function TiptapPage() {
  return (
    <section className="min-h-screen mx-auto max-w-sm flex items-center justify-center">
      <div className="w-full">
        <h1 className="h1">Tiptap</h1>
        <Tiptap />
      </div>
    </section>
  );
}

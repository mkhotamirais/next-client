import { CodeBlockWithCopy } from "@/components/ui/CodeBlockWithCopy";
import React from "react";

export default function Codeblock() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="h1">Codeblock with Copy</h1>
        <CodeBlockWithCopy code={`npx create-next-app@latest`} />
      </div>
    </section>
  );
}

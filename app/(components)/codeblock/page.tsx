import { CodeBlockWithCopy } from "@/components/ui/CodeBlockWithCopy";
import React from "react";

export default function Codeblock() {
  return (
    <div>
      <h2 className="h2 mb-3">Codeblock with Copy</h2>
      <CodeBlockWithCopy code={`npx create-next-app@latest`} />
    </div>
  );
}

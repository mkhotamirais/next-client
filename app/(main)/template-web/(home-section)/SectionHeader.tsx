import { Button } from "@/components/ui/button";
import React from "react";

export default function SectionHeader() {
  return (
    <header className="h-16 shadow sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <div>logo</div>
        <div>
          <div>Logo: Who are you?</div>
          <nav>nav</nav>
          <Button>halo</Button>
        </div>
      </div>
    </header>
  );
}

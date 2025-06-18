import React from "react";
import c from "@/lib/content.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavDesktop() {
  return (
    <nav className="hidden md:flex">
      {c.main_menu.map((item, i) => (
        <Link key={i} href={item.url}>
          <Button variant="ghost" className="capitalize">
            {item.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}

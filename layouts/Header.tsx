import React from "react";
import Logo from "../components/Logo";
import NavDesktop from "./NavDesktop";
import { ThemeToggle } from "./ThemeToggle";
import Sheet2 from "@/components/ui/Sheet2";
import c from "@/lib/content.json";

export default function Header() {
  return (
    <header className="h-16 bg-background sticky top-0 z-50 shadow">
      <div className="container flex items-center justify-between">
        {/* <div className="flex items-center gap-2"> */}
        <Logo />
        {/* </div> */}
        <div className="flex items-center gap-2">
          <NavDesktop />
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet2 title={<Logo />} side="right" menu={c.main_menu} />
          </div>
        </div>
      </div>
    </header>
  );
}

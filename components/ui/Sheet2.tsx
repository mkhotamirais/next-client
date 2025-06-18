import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

interface ISheet2 {
  title: string | React.ReactNode;
  menu?: { label: string; url: string }[];
  side?: "top" | "right" | "bottom" | "left" | undefined;
}

export default function Sheet2({ title = "Title", menu = [], side = "left" }: ISheet2) {
  return (
    <div className={menu.length > 0 ? "" : "hidden"}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-64" side={side}>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription className="hidden"></SheetDescription>
          </SheetHeader>
          <nav className="px-3 flex flex-col gap-1">
            {menu.map((item, i) => (
              <SheetClose key={i} asChild>
                <Link key={i} href={item.url}>
                  <Button variant="outline" className="capitalize w-full justify-start">
                    {item.label}
                  </Button>
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

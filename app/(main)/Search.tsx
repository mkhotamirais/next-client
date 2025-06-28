"use client";

import { useState } from "react";
import { Home, Search, X } from "lucide-react";
import Link from "next/link";

const menu = [
  // front-end
  { label: "Public Api List", url: "/public-api-list", cat: "front-end" },
  { label: "Dummyjson", url: "/dummyjson", cat: "front-end" },
  { label: "Youtube", url: "/youtube", cat: "front-end" },
  { label: "Scrollmagic", url: "/scrollmagic", cat: "front-end" },
  // components
  { label: "Codeblock", url: "/codeblock", cat: "components" },
  { label: "Sticky", url: "/sticky", cat: "components" },
  { label: "Pagination", url: "/pagination", cat: "components" },
  { label: "Multiselect", url: "/multiselect", cat: "components" },
  { label: "Tiptap", url: "/tiptap", cat: "components" },
  // others
  { label: "Ts1", url: "/ts1", cat: "others" },
  { label: "Ts2", url: "/ts2", cat: "others" },
  { label: "Ts3", url: "/ts3", cat: "others" },
  { label: "Clock", url: "/clock", cat: "others" },
  { label: "Stopwatch", url: "/stopwatch", cat: "others" },
  { label: "Symbol Color", url: "/symbol-color", cat: "others" },
];

const category = ["front-end", "components", "others"];

export default function ExpandingCircle() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("");

  const filteredMenu = menu.filter(
    (item) => item.label.toLowerCase().includes(search.toLowerCase()) && (cat === "" || item.cat === cat)
  );

  const toggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      setSearch("");
      setCat("");
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 !z-50">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-white p-3 rounded-full border bg-black/50 opacity-30"
        >
          <Home />
        </Link>
        <button
          type="button"
          aria-label="search"
          onClick={toggleOpen}
          className={`text-white p-3 rounded-full border bg-black/50 opacity-30`}
        >
          {isOpen ? <X /> : <Search />}
        </button>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 bg-black/70 transition-all backdrop-blur-xs`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="space-y-2 p-4 text-white max-w-sm mx-auto px-3 min-h-screen"
        >
          <input
            type="search"
            placeholder="Search"
            className="border-b w-full py-2 px-3 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2">
            <button type="button" onClick={() => setCat("")} className="block text-sm py-1 px-2 rounded-md">
              All
            </button>
            {category.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => setCat(c)}
                className={`${
                  c === cat ? "bg-white/20" : ""
                } text-sm block py-1 px-2 capitalize rounded-md hover:bg-white/10`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="overflow-y-scroll h-[calc(100vh-8rem)] rounded">
            {filteredMenu.map((item) => (
              <Link
                href={item.url}
                key={item.label}
                // onClick={() => setIsOpen(false)}
                className="block py-2 px-3 rounded-md hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

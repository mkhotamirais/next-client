"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const menu = [
  { label: "Home", url: "/dummyjson" },
  { label: "Posts", url: "/dummyjson/posts" },
  { label: "Products", url: "/dummyjson/products" },
];

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <>
      <header className="h-16 flex items-center justify-between border-b">
        <div>Dummyjson</div>
        <nav className="hidden md:flex">
          {menu.map((item, i) => (
            <Link key={i} href={item.url} className="px-3 py-2 text-gray-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setIsOpenNav(!isOpenNav)}
          aria-label="open nav mobile"
          className="flex md:hidden"
        >
          <Menu />
        </button>
      </header>

      <motion.nav
        initial={{ height: 0 }}
        animate={{ height: isOpenNav ? "auto" : 0 }}
        transition={{ ease: "easeOut" }}
        className="overflow-hidden flex md:hidden"
      >
        <div className="py-2 flex flex-col w-full">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              onClick={() => setIsOpenNav(false)}
              className="px-3 py-2 text-gray-600 block hover:bg-gray-100 w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.nav>
    </>
  );
}

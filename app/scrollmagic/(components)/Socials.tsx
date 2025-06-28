"use client";

import Link from "next/link";
import React from "react";
import { FaPatreon, FaFacebookF, FaYoutube, FaInstagram, FaTelegramPlane } from "react-icons/fa";
const socialsIcon = [FaYoutube, FaInstagram, FaFacebookF, FaPatreon, FaTelegramPlane];

export default function Socials() {
  return (
    <div id="socials" className="flex gap-4">
      {socialsIcon.map((Icon, i) => (
        <Link href="#" key={i}>
          <Icon className="text-[3vw]" />
        </Link>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/logo-mkhotami.png" alt="Logo" width={32} height={32} />
      <span className="font-semibold text-lg">NextClient</span>
    </Link>
  );
}

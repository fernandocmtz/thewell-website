"use client";

import Link from "next/link";

export default function BackButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="mb-6">
      <Link
        href={href}
        className="
          inline-flex items-center gap-2
          text-xs sm:text-sm
          px-3 py-1.5
          rounded-full
          bg-black/5 hover:bg-black/10
          text-black/70 hover:text-black
          transition-all duration-200
          tracking-tight
        "
      >
        ← {label}
      </Link>
    </div>
  );
}
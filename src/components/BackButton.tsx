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
    <div className="mb-8">
      <Link
        href={href}
        className="text-sm text-black/60 hover:text-black transition flex items-center gap-2 tracking-tight"
      >
        ← {label}
      </Link>
    </div>
  );
}
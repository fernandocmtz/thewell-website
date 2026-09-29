"use client";

import Link from "next/link";
import { KIDS_BOOKS } from "@/data/kids";

const ADULT_CLASSES = [
  { title: "Acts", href: "/resources/adult-classes/acts" },
  { title: "Psalm 23", href: "/resources/adult-classes/psalm23" },
  { title: "Philemon", href: "/resources/adult-classes/philemon" },
  { title: "Ruth", href: "/resources/adult-classes/ruth" },
  { title: "Psalm 16", href: "/resources/adult-classes/psalm16" },
  { title: "Psalm 119", href: "/resources/adult-classes/psalm119" },
];

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen bg-[rgb(var(--sand))] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/images/thewell-banner.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24">

        {/* Back */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-black/60 hover:text-black transition"
          >
            ← Back Home
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-[#1a1a1a] mb-12">
          Resources
        </h1>

        <p className="text-gray-600 mb-12 -mt-8">
          Bible study notes and teaching resources.
        </p>

        {/* ADULT CLASSES */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">
            Adult Classes
          </h2>

          <div className="flex flex-wrap gap-6">
            {ADULT_CLASSES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-[#2F3E34] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>

        {/* KIDS */}
        <div className="mt-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                Kids
              </h2>
              <p className="text-gray-600 mt-1">
                Sunday lessons for parents to read with their kids at home.
              </p>
            </div>

            <Link
              href="/resources/kids"
              className="text-sm font-semibold text-[#2F3E34] underline underline-offset-4 hover:text-black transition"
            >
              See all kids lessons
            </Link>
          </div>

          <div className="flex flex-wrap gap-6">
            {KIDS_BOOKS.map((b) => (
              <Link
                key={b.slug}
                href={`/resources/kids#${b.slug}`}
                className="text-white px-6 py-3 rounded-lg hover:scale-105 transition"
                style={{ backgroundColor: b.color }}
              >
                {b.book}
              </Link>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}
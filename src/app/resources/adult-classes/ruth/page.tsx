"use client";

import { RUTH_SERIES } from "@/data/ruth";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RuthPage() {
  return (
    <main className="relative min-h-screen bg-[rgb(var(--sand))] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/images/thewell-banner.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24">

        {/* BACK */}
        <div className="mb-6">
          <Link
            href="/resources"
            className="text-sm text-black/60 hover:text-black transition"
          >
            ← Back to Resources
          </Link>
        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-[#1a1a1a] mb-12">
          Ruth Study Series
        </h1>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {RUTH_SERIES.map((lesson, i) => (

            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >

              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/thewell-banner.jpg"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h2 className="font-bold text-lg mb-4">
                  {lesson.title}
                </h2>

                <div className="flex gap-3">

                  {/* NOTES */}
                  <a
                    href={lesson.pdf}
                    target="_blank"
                    className="bg-[#2F3E34] text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                  >
                    📄 Notes
                  </a>

                  {/* WATCH */}
                  <a
                    href={lesson.youtube}
                    target="_blank"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                  >
                    ▶ Watch
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </main>
  );
}
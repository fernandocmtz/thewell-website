"use client";

import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen bg-[rgb(var(--sand))] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/images/thewell-banner.jpg"
        alt="The Well Bible Church"
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

        {/* CARD */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8">

          <h2 className="text-xl font-semibold mb-6">
            Adult Classes
          </h2>

          <div className="flex flex-wrap gap-6">

            {/* PHILEMON */}
            <Link
              href="/resources/adult-classes/philemon"
              className="bg-[#2F3E34] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Philemon
            </Link>

            {/* RUTH */}
            <Link
              href="/resources/adult-classes/ruth"
              className="bg-[#2F3E34] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Ruth
            </Link>

            {/* PSALM 16 */}
            <Link
              href="/resources/adult-classes/psalm16"
              className="bg-[#2F3E34] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Psalm 16
            </Link>

            {/* PSALM 119 */}
            <Link
              href="/resources/adult-classes/psalm119"
              className="bg-[#2F3E34] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Psalm 119
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}
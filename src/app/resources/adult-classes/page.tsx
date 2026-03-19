"use client";

import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND (SIN -z-10) */}
      <div className="absolute inset-0">

        <Image
          src="/images/background/resources-background.jpg"
          alt="Resources Background"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />

        {/* OVERLAY (igual que Home) */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      </div>


      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 py-24 text-white">

        <BackButton href="/" label="Back Home" />

        <h1 className="text-5xl font-bold mb-2">
          Resources
        </h1>

        <p className="text-white/80 mb-12">
          Bible study notes and teaching resources.
        </p>


        {/* CARD */}
        <div className="bg-white/90 text-black backdrop-blur-xl rounded-3xl shadow-xl p-8">

          <h2 className="text-xl font-semibold mb-6">
            Adult Classes
          </h2>

          <div className="flex gap-6">

            <Link
              href="/resources/adult-classes/psalm119"
              className="bg-[#2F3E34] text-white px-6 py-3 rounded-lg hover:bg-[#243128] hover:scale-105 transition"
            >
              Psalm 119
            </Link>

            <Link
              href="/resources/adult-classes/psalm16"
              className="bg-[#2F3E34] text-white px-6 py-3 rounded-lg hover:bg-[#243128] hover:scale-105 transition"
            >
              Psalm 16
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}
"use client";

import Image from "next/image";
import { useState } from "react";
import { SOCIAL } from "@/data/site";
import Link from "next/link";

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[rgb(var(--sand))] text-[rgb(var(--ink))]">

      {/* HERO */}
      <section className="bg-[rgb(var(--sand))] py-24 relative border-b border-[rgb(var(--line))]">

        <div className="absolute top-6 left-4 sm:left-6 lg:left-1/2 lg:-translate-x-[640px] z-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--muted))] hover:text-[rgb(var(--ink))] transition"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-[rgb(var(--ink))]">
            About The Well
          </h1>

          <p className="mt-6 text-lg text-[rgb(var(--muted))] max-w-3xl mx-auto leading-relaxed">
            A church committed to teaching Scripture verse-by-verse,
            building community, and growing together in Christ.
          </p>
        </div>

      </section>


      {/* WHO WE ARE */}
      <section id="who-we-are" className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold text-[rgb(var(--ink))] tracking-tight">
              Who We Are
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              The Well began as a small Bible study among friends, later named
              <strong className="text-[rgb(var(--ink))]"> Well Digger Bible Book Club</strong>. What started as a simple gathering quickly grew into a weekly study meeting every Thursday at Semilla Coffee Lab.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              As the group continued to grow, the study expanded into two weekly gatherings to accommodate those attending.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Over time, that same community of believers developed into what is now
              <strong className="text-[rgb(var(--ink))]"> The Well Bible Church</strong>—a church committed to the faithful, verse-by-verse teaching of Scripture and to growing together in Christ.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              The Well Bible Church is led by a team of elders and is pastored by
              <strong className="text-[rgb(var(--ink))]"> David Hermosillo</strong>, alongside his wife
              <strong className="text-[rgb(var(--ink))]"> Ana</strong>, who faithfully serves and supports the Children’s and Women’s Ministries.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="text-center">
              <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden shadow-xl ring-4 ring-[rgb(var(--latte))]">
                <Image
                  src="/images/pastors/pastor-david-hermosillo.jpg"
                  alt="Pastor David Hermosillo"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[rgb(var(--ink))]">
                David Hermosillo
              </h3>

              <p className="text-[rgb(var(--muted))] text-sm font-medium mt-1">
                Lead Pastor
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* KIDS MINISTRY */}
      <section id="kids" className="py-24 bg-[rgb(var(--sand))] border-y border-[rgb(var(--line))]">

        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold text-[rgb(var(--ink))] tracking-tight">
            Kids Ministry
          </h2>

          <p className="mt-6 text-lg text-[rgb(var(--muted))] max-w-3xl mx-auto leading-relaxed">
            Our kids ministry focuses on teaching the Word of God in a clear,
            engaging, and age-appropriate way. Children learn biblical truth
            through Scripture, activities, and fellowship.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-md rotate-[-2deg] border-2 border-white">
            <Image src="/images/kids/kids1.0.png" alt="Kids Ministry" fill className="object-cover" />
          </div>

          <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-md rotate-[2deg] border-2 border-white">
            <Image src="/images/kids/kids2.0.png" alt="Kids Ministry" fill className="object-cover" />
          </div>

          <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-md rotate-[-1deg] border-2 border-white">
            <Image src="/images/kids/kids3.0.png" alt="Kids Ministry" fill className="object-cover" />
          </div>
        </div>

      </section>


      {/* SMALL GROUPS */}
      <section id="small-groups" className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold text-center text-[rgb(var(--ink))] tracking-tight">
            Small Groups
          </h2>

          <p className="text-center text-[rgb(var(--muted))] mt-4 max-w-2xl mx-auto">
            Small groups are where deeper discipleship and community
            happen throughout the week.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {/* FAMILIES */}
            <div
              onClick={() => setSelectedImage("/images/small-groups/families.png")}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[rgb(var(--sand))] shadow-sm border border-[rgb(var(--line))] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[380px] bg-black">
                <Image 
                  src="/images/small-groups/families.png" 
                  alt="Families Small Group" 
                  fill 
                  className="object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-[rgb(var(--ink))]">Families Small Groups</h3>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p><strong className="text-[rgb(var(--ink))]">#1 McAllen:</strong> Wednesdays @ 6:30 PM</p>
                  <p><strong className="text-[rgb(var(--ink))]">#2 Pharr:</strong> Thursdays @ 6:30 PM</p>
                </div>
              </div>
            </div>

            {/* MEN'S */}
            <div
              onClick={() => setSelectedImage("/images/small-groups/menswomens.png")}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[rgb(var(--sand))] shadow-sm border border-[rgb(var(--line))] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[380px] bg-black">
                <Image 
                  src="/images/small-groups/menswomens.png" 
                  alt="Men's Small Groups" 
                  fill 
                  className="object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-[rgb(var(--ink))]">Men's Small Groups</h3>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p><strong className="text-[rgb(var(--ink))]">#1 McAllen (10th St):</strong> Tuesdays @ 7:00 PM</p>
                  <p><strong className="text-[rgb(var(--ink))]">#2 McAllen (Camellia Ave):</strong> Wednesdays @ 6:30 PM</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* LOCATION */}
      <section id="location" className="bg-[rgb(var(--sand))] py-24 border-t border-[rgb(var(--line))]">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[rgb(var(--ink))] tracking-tight">
            Visit Us
          </h2>

          <p className="mt-6 text-lg text-[rgb(var(--muted))]">
            Join us this Sunday at The Well Bible Church.
          </p>

          <a
            href={SOCIAL.location}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-[rgb(var(--ink))] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[rgb(var(--accent))] transition duration-200 shadow-md"
          >
            Get Directions
          </a>

        </div>

      </section>


      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <img
            src={selectedImage}
            alt="Small Group Flyer"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}

    </div>
  );
}
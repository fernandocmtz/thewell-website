"use client";

import Image from "next/image";
import { useState } from "react";
import { SOCIAL } from "@/data/site";

export default function AboutPage() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>

      {/* HERO */}
      <section className="bg-[rgb(var(--sand))] py-24 relative">

        <a
        href="/"
        className="absolute left-1/2 -translate-x-[640px] top-10 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition z-20"
        >
        ← Back to Home
      </a>

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold text-[rgb(var(--ink))]">
            About The Well
          </h1>

          <p className="mt-6 text-lg text-[rgb(var(--muted))] max-w-3xl mx-auto">
            A church committed to teaching Scripture verse-by-verse,
            building community, and growing together in Christ.
          </p>

        </div>

      </section>


      {/* WHO WE ARE */}
      <section
        id="who-we-are"
        className="bg-white py-24"
      >

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              The Well began as a small Bible study among friends, later named
              <strong> Well Digger Bible Book Club</strong>. What started as a simple gathering quickly grew into a weekly study meeting every Thursday at Semilla Coffee Lab.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              As the group continued to grow, the study expanded into two weekly gatherings to accommodate those attending.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Over time, that same community of believers developed into what is now
              <strong> The Well Bible Church</strong>—a church committed to the faithful, verse-by-verse teaching of Scripture and to growing together in Christ.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              The Well Bible Church is led by a team of elders and is pastored by
              <strong> David Hermosillo</strong>, alongside his wife
              <strong> Ana</strong>, who faithfully serves and supports the Children’s and Women’s Ministries.
            </p>

          </div>


          {/* PASTOR */}
          <div className="flex justify-center">

            <div className="text-center">

              <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden shadow-lg">

                <Image
                  src="/images/pastors/pastor-david-hermosillo.jpg"
                  alt="Pastor David Hermosillo"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                />

              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                David Hermosillo
              </h3>

              <p className="text-gray-500">
                Lead Pastor
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* KIDS MINISTRY */}
      <section
        id="kids"
        className="py-24 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100"
      >

        <div className="mx-auto max-w-6xl px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Kids Ministry
          </h2>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Our kids ministry focuses on teaching the Word of God in a clear,
            engaging, and age-appropriate way. Children learn biblical truth
            through Scripture, activities, and fellowship.
          </p>

        </div>

        <div className="mt-16 mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">

          <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg rotate-[-2deg]">
            <Image src="/images/kids/kids1.0.png" alt="Kids Ministry" fill className="object-cover" />
          </div>

          <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg rotate-[2deg]">
            <Image src="/images/kids/kids2.0.png" alt="Kids Ministry" fill className="object-cover" />
          </div>

          <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg rotate-[-1deg]">
            <Image src="/images/kids/kids3.0.png" alt="Kids Ministry" fill className="object-cover" />
          </div>

        </div>

      </section>


      {/* SMALL GROUPS */}
      <section id="small-groups" className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold text-center text-gray-900">
            Small Groups
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Small groups are where deeper discipleship and community
            happen throughout the week.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <div
              onClick={() => setSelectedImage("/images/small-groups/families.png")}
              className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition"
            >
              <div className="relative h-[420px]">
                <Image src="/images/small-groups/families.png" alt="Families Small Group" fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900">Families Small Group</h3>
                <p className="text-gray-600 mt-2">Thursday • 7:30 PM</p>
                <p className="text-gray-500 text-sm">McAllen, TX</p>
              </div>
            </div>

            <div
              onClick={() => setSelectedImage("/images/small-groups/menswomens.png")}
              className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition"
            >
              <div className="relative h-[420px]">
                <Image src="/images/small-groups/menswomens.png" alt="Men and Women Small Groups" fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900">Men & Women Groups</h3>
                <p className="text-gray-600 mt-2">Tuesday • 6:30 PM</p>
                <p className="text-gray-600">Saturday • 11:30 AM</p>
                <p className="text-gray-500 text-sm">McAllen & Edinburg</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* LOCATION */}
      <section id="location" className="bg-[rgb(var(--sand))] py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-[rgb(var(--ink))]">
            Visit Us
          </h2>

          <p className="mt-6 text-lg text-[rgb(var(--muted))]">
            Join us this Sunday at The Well Bible Church.
          </p>

          <a
            href={SOCIAL.location}
            target="_blank"
            className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Get Directions
          </a>

        </div>

      </section>


      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
          <img
            src={selectedImage}
            alt="Small Group"
            className="max-h-[92vh] max-w-[92vw] rounded-xl shadow-2xl"
          />
        </div>
      )}

    </div>
  );
}
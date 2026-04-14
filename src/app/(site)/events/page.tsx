"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type EventItem = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  status: "upcoming" | "past";
  image?: string;
};

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events: EventItem[] = [
    {
      title: "Camp McAllen – Community Outdoor Fellowship",
      date: "April 25",
      time: "8:30 AM",
      location: "20-Acre Park, McAllen, TX",
      status: "upcoming",
      image: "/events/CAMPMCALLEN.jpeg",
    },

    // 🔽 EVENTOS PASADOS
    {
      title: "Walking Through Museum Exhibit — Psalm 119",
      date: "March 12 & 13",
      time: "6:00 PM",
      location: "At The Well",
      status: "past",
      image: "/events/psalms119.png",
    },
    {
      title: "Brotherhood Prayer, Devotional & Sports Event",
      date: "February 7",
      time: "6:00 PM",
      location: "The Well Bible Church",
      status: "past",
      image: "/events/brotherhood-prayer-sports.png",
    },
    {
      title: "Prayer Board Night — Girls Fellowship",
      date: "January 31",
      time: "5:00 PM",
      location: "The Well Bible Church",
      status: "past",
      image: "/events/prayer-board-night.png",
    },
    {
      title: "Christian Trivia Night",
      date: "January 17",
      time: "6:00 PM",
      location: "The Well Bible Church",
      status: "past",
      image: "/events/christian-trivia-night.png",
    },
  ];

  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setSelectedImage(null);
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="container-pad py-12">

      {/* BACK BUTTON */}
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black mb-8 transition"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        Back to Home
      </Link>

      {/* HEADER */}
      <div className="rounded-[2.5rem] border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur">
        <h1 className="text-4xl font-extrabold tracking-tight">Events</h1>
        <p className="mt-3 max-w-3xl text-black/65">
          Upcoming events and highlights from past gatherings.
        </p>
      </div>

      {/* UPCOMING */}
      <section className="mt-12">
        <h2 className="text-3xl font-extrabold">Upcoming</h2>

        <div className="mt-6 grid gap-8 md:grid-cols-3">

          {upcoming.length === 0 && (
            <p className="text-black/60">No upcoming events at the moment.</p>
          )}

          {upcoming.map((e) => (
            <div
              key={e.title}
              className="group rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm flex flex-col items-center text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {e.image && (
                <button onClick={() => setSelectedImage(e.image!)}>
                  <div className="aspect-[3/4] w-[220px] overflow-hidden rounded-2xl shadow-md mx-auto">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </button>
              )}

              <div className="mt-4 text-xs font-bold tracking-wide text-black/40">
                UPCOMING
              </div>

              <div className="mt-1 text-lg font-extrabold">
                {e.title}
              </div>

              <div className="mt-2 text-sm text-black/65">
                {e.date} {e.time ? `• ${e.time}` : ""}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="mt-16">
        <h2 className="text-3xl font-extrabold">Past Events</h2>

        <div className="mt-6 grid gap-8 md:grid-cols-3">

          {past.map((e) => (
            <div
              key={e.title}
              className="group rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm flex flex-col items-center text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {e.image && (
                <button onClick={() => setSelectedImage(e.image!)}>
                  <div className="aspect-[3/4] w-[220px] overflow-hidden rounded-2xl shadow-md mx-auto">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </button>
              )}

              <div className="mt-4 text-xs font-bold tracking-wide text-black/40">
                PAST EVENT
              </div>

              <div className="mt-1 text-lg font-extrabold">
                {e.title}
              </div>

              <div className="mt-2 text-sm text-black/65">
                {e.date} {e.time ? `• ${e.time}` : ""}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* IMAGE VIEWER */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Event"
            className="max-h-[92vh] max-w-[92vw] rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}

    </div>
  );
}
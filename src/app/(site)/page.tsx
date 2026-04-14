import { SOCIAL } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <Image
            src="/images/background/church-hero-background.jpg"
            alt="The Well worship background"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "48% 20%" }}
          />

          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-center">

            {/* LEFT SIDE */}
            <div>

              <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                Verse-by-verse teaching • Community • Worship
              </p>

              <h1 className="mt-6 text-5xl font-extrabold text-white leading-tight">
                Welcome to{" "}
                <span className="text-[#8B5A3C] drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]">
                  The Well
                </span>
                <br />
                Bible Church
              </h1>

              <p className="mt-6 max-w-xl text-lg text-white/90">
                We are a church devoted to faithfully teaching God’s Word, verse by verse, equipping people to become and grow as disciples for the glory of God.
              </p>

              {/* BUTTONS (CONSISTENT) */}
              <div className="flex flex-wrap items-center gap-6 mt-8">

                {/* PRIMARY */}
                <Link
                  href="/resources"
                  className="bg-[#9c6b4f] text-white px-7 py-3.5 rounded-2xl font-medium shadow-md hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
                >
                  Weekly Resources
                </Link>

                {/* SECONDARY */}
                <Link
                  href={SOCIAL.location}
                  className="bg-[#9c6b4f] text-white px-7 py-3.5 rounded-2xl font-medium shadow-md hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
                >
                  Get Directions
                </Link>

                {/* SECONDARY (IGUAL) */}
                <Link
                  href="/events"
                  className="bg-[#9c6b4f] text-white px-7 py-3.5 rounded-2xl font-medium shadow-md hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
                >
                  Upcoming Events
                </Link>

              </div>

              {/* SERVICE INFO (CLEAN SIN LÍNEA) */}
              <div className="mt-14 flex flex-wrap items-center gap-8 text-white/60 text-sm tracking-wide">

                <div>
                  <span className="text-white font-medium">Sunday Service</span>
                  <span className="mx-2 text-white/30">•</span>
                  11:00 AM
                </div>

                <div>
                  <span className="text-white font-medium">Small Groups</span>
                  <span className="mx-2 text-white/30">•</span>
                  Weekly gatherings
                </div>

              </div>

            </div>

            {/* RIGHT PANEL */}
            <div className="mt-10 lg:mt-0 ml-auto max-w-[420px] px-4 md:px-2 lg:px-0 lg:mr-[-120px] xl:mr-[-200px]">

              <div className="rounded-[32px] border border-white/20 bg-white/20 p-8 backdrop-blur-xl shadow-xl">

                <div className="text-white font-bold mb-6 pl-2">
                  This week at The Well
                </div>

                <div className="space-y-6">

                  <div className="bg-white rounded-2xl p-5">
                    <div className="text-xs font-semibold text-gray-500">
                      ADULT CLASS
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      Discipleship to Healthy Finances
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Learning biblical stewardship and financial wisdom.
                    </p>
                    <div className="mt-3 text-sm font-semibold text-[#2F3E34]">
                      Sundays at 10:00 AM • Before Service
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/images/feature/worship-feature.jpg"
                        alt="Worship"
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center 35%" }}
                      />
                    </div>

                    <div className="p-5">
                      <div className="font-bold text-gray-900">
                        Worship • Fellowship • Word
                      </div>
                      <p className="text-sm text-gray-600 mt-2 italic">
                        “Behold, how good and how pleasant it is for brethren to dwell together in unity!” — Psalm 133:1
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5">
                    <div className="grid grid-cols-[1fr_120px] gap-4 items-center">
                      <div>
                        <div className="text-xs text-gray-500 font-semibold">
                          GIVING
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          Tithes & Offerings
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          1. Click Diezmos y Ofrendas <br/>
                          2. Select “Ofrenda The Well” <br/>
                          3. Type Amount and Send
                        </p>

                        <a
                          href="https://familiasemilla.churchcenter.com/giving"
                          className="inline-block mt-3 bg-black text-white px-4 py-2 rounded-lg text-sm"
                        >
                          Open Giving Page
                        </a>
                      </div>

                      <div className="relative w-[110px] h-[110px]">
                        <Image
                          src="/qr-tithes.png"
                          alt="QR Giving"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT US */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              About The Well
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

          {/* PASTOR IMAGE */}
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

    </div>
  );
}
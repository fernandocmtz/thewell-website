import Link from "next/link";
import { KIDS_BOOKS } from "@/data/kids";
import { getKidsFiles } from "@/lib/kids-files";

export const metadata = {
  title: "Kids Resources | The Well Bible Church",
  description:
    "Take-home Bible lessons from The Well Kids so parents can keep the conversation going at home.",
};

export default function KidsResourcesPage() {
  const books = KIDS_BOOKS.map((book) => ({
    ...book,
    ...getKidsFiles(book.slug),
  }));

  return (
    <main className="relative min-h-screen bg-[rgb(var(--sand))]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Back */}
        <Link
          href="/resources"
          className="text-sm text-black/60 transition hover:text-black"
        >
          ← Back to Resources
        </Link>

        {/* HERO */}
        <header className="mt-6 rounded-[32px] bg-[#2F3E34] shadow-lg">
          <div className="px-8 py-14 md:px-12 md:py-20">
            <h1 className="text-5xl font-extrabold text-white md:text-6xl">
              The Well Kids
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
              Every Sunday your kids learn a Bible story in class. Here you can
              read the same lesson at home, ask the same questions, and keep the
              conversation going during the week.
            </p>

            <nav aria-label="Books" className="mt-8 flex flex-wrap gap-3">
              {books.map((b) => (
                <Link
                  key={b.slug}
                  href={`#${b.slug}`}
                  className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ backgroundColor: b.color }}
                >
                  {b.book}
                  <span className="ml-2 text-white/70">{b.lessons.length}</span>
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* HOW TO USE */}
        <section className="mt-10 grid gap-4 rounded-3xl bg-white/90 p-6 shadow-sm md:grid-cols-3 md:p-8">
          <div>
            <h2 className="font-bold text-[#1a1a1a]">Read it together</h2>
            <p className="mt-1 text-sm text-gray-600">
              Open the lesson your child had on Sunday and read the Bible verses
              out loud.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[#1a1a1a]">Ask the questions</h2>
            <p className="mt-1 text-sm text-gray-600">
              Each lesson includes the questions asked in class. Let your child
              answer in their own words.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[#1a1a1a]">Pray as a family</h2>
            <p className="mt-1 text-sm text-gray-600">
              Close by thanking God for what you learned about Him in the story.
            </p>
          </div>
        </section>

        {/* BOOKS */}
        <div className="mt-14 space-y-14">
          {books.map((b) => (
            <section
              key={b.slug}
              id={b.slug}
              className="scroll-mt-8 overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              {/* Color band */}
              <div
                className="flex h-36 items-end md:h-44"
                style={{ backgroundColor: b.color }}
              >
                <div className="px-8 pb-6">
                  <h2 className="text-4xl font-extrabold text-white md:text-5xl">
                    {b.book}
                  </h2>
                  <p className="mt-1 max-w-xl text-white/90">{b.summary}</p>
                </div>
              </div>

              {/* Lessons */}
              {b.lessons.length > 0 ? (
                <ol className="divide-y divide-black/5 px-4 py-2 md:px-6">
                  {b.lessons.map((lesson) => (
                    <li
                      key={`${lesson.number}-${lesson.title}`}
                      className="flex flex-wrap items-center gap-4 py-4"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: b.color }}
                      >
                        {lesson.number}
                      </span>

                      <div className="min-w-0 flex-1 font-semibold text-[#1a1a1a]">
                        {lesson.title}
                      </div>

                      {lesson.href ? (
                        // Single file: one "Open lesson" button
                        <a
                          href={lesson.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-[#2F3E34] px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F3E34]"
                        >
                          Open lesson
                        </a>
                      ) : (
                        // Folder with several files: one button per file
                        <div className="flex w-full flex-wrap gap-2 pl-14 md:w-auto md:pl-0">
                          {lesson.files?.map((f) => (
                            <a
                              key={f.href}
                              href={f.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-black/5"
                              style={{ borderColor: b.color, color: b.color }}
                            >
                              {f.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="px-8 py-6 text-gray-500">
                  Lessons for {b.book} are coming soon.
                </p>
              )}

              {/* Activities and printables */}
              {b.activities.length > 0 && (
                <div className="border-t border-black/5 bg-black/[0.02] px-6 py-6 md:px-8">
                  <h3 className="font-bold text-[#1a1a1a]">
                    Activities and printables
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Coloring pages, cutouts, and games to do at home.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {b.activities.map((a) => (
                      <a
                        key={a.href}
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-white"
                        style={{ borderColor: b.color, color: b.color }}
                      >
                        {a.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
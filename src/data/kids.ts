// Book info only. Lessons are read automatically from:
// public/resources/kids/<slug>/
//   "1. Title.pdf"   -> lesson (sorted by number)
//   anything else    -> activity / printable

export type KidsBook = {
  slug: string;
  book: string;
  summary: string;
  color: string;
};

export const KIDS_BOOKS: KidsBook[] = [
  {
    slug: "genesis",
    book: "Genesis",
    summary: "How God made the world and began His promise to His people.",
    color: "#4F7A5A",
  },
  {
    slug: "exodus",
    book: "Exodus",
    summary: "God rescues Israel from Egypt and leads them through the wilderness.",
    color: "#B5703A",
  },
  {
    slug: "joshua",
    book: "Joshua",
    summary: "God keeps His promise and brings Israel into the Promised Land.",
    color: "#3F6B8C",
  },
  {
    slug: "judges",
    book: "Judges",
    summary: "Israel forgets God again and again, and God rescues them again and again.",
    color: "#8A4F6B",
  },
];
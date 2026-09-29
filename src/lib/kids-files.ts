import fs from "fs";
import path from "path";

export type KidsLink = { title: string; href: string };

export type KidsLesson = {
  number: number;
  title: string;
  href?: string;        // single file lesson
  files?: KidsLink[];   // lesson folder with several files
};

const ALLOWED = /\.(pdf|docx)$/i;
const NUMBERED = /^(\d+)\.\s*(.+)$/;

const cleanName = (file: string) => file.replace(ALLOWED, "").trim();
const toHref = (parts: string[]) => "/" + parts.map(encodeURIComponent).join("/");

export function getKidsFiles(slug: string) {
  const dir = path.join(process.cwd(), "public", "resources", "kids", slug);
  const lessons: KidsLesson[] = [];
  const activities: KidsLink[] = [];

  if (!fs.existsSync(dir)) return { lessons, activities };

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;

    // Lesson folder, e.g. "1. Adam and Eve/"
    if (entry.isDirectory()) {
      const files = fs
        .readdirSync(path.join(dir, entry.name))
        .filter((f) => ALLOWED.test(f))
        .sort()
        .map((f) => ({
          title: cleanName(f),
          href: toHref(["resources", "kids", slug, entry.name, f]),
        }));

      if (files.length === 0) continue;

      const match = entry.name.match(NUMBERED);
      if (match) {
        lessons.push({
          number: Number(match[1]),
          title: match[2].trim(),
          ...(files.length === 1 ? { href: files[0].href } : { files }),
        });
      } else {
        activities.push(...files);
      }
      continue;
    }

    // Single file, e.g. "1. Birth of Moses.docx"
    if (!ALLOWED.test(entry.name)) continue;

    const name = cleanName(entry.name);
    const href = toHref(["resources", "kids", slug, entry.name]);
    const match = name.match(NUMBERED);

    if (match) {
      lessons.push({ number: Number(match[1]), title: match[2].trim(), href });
    } else {
      activities.push({ title: name, href });
    }
  }

  lessons.sort((a, b) => a.number - b.number);
  activities.sort((a, b) => a.title.localeCompare(b.title));

  return { lessons, activities };
}
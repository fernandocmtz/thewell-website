import fs from "fs";
import path from "path";

export type KidsFile = {
  number: number | null;
  title: string;
  href: string;
};

export function getKidsFiles(slug: string) {
  const dir = path.join(process.cwd(), "public", "resources", "kids", slug);

  if (!fs.existsSync(dir)) {
    return { lessons: [] as KidsFile[], activities: [] as KidsFile[] };
  }

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".pdf"));

  const lessons: KidsFile[] = [];
  const activities: KidsFile[] = [];

  for (const file of files) {
    const name = file.replace(/\.pdf$/i, "").replace(/\.docx$/i, "").trim();
    const href = `/resources/kids/${slug}/${encodeURIComponent(file)}`;
    const match = name.match(/^(\d+)\.\s*(.+)$/);

    if (match) {
      lessons.push({ number: Number(match[1]), title: match[2].trim(), href });
    } else {
      activities.push({ number: null, title: name, href });
    }
  }

  lessons.sort((a, b) => (a.number ?? 0) - (b.number ?? 0));
  activities.sort((a, b) => a.title.localeCompare(b.title));

  return { lessons, activities };
}
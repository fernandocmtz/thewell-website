import Link from "next/link";
import { SOCIAL } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-[rgb(var(--sand))]/55">
      <div className="container-pad grid gap-10 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-extrabold tracking-tight">The Well Bible Church</div>
          <p className="mt-2 text-sm text-black/60">
            Verse-by-verse Bible teaching, community, and a place to grow together in Christ.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-bold">Quick Links</div>
          <div className="mt-3 grid gap-2 text-black/70">
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <Link href="/giving" className="hover:underline">Giving</Link>
            <Link href="/events" className="hover:underline">Events</Link>
            <a href={SOCIAL.location} target="_blank" rel="noreferrer" className="hover:underline">
              Location (Maps)
            </a>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-bold">Follow</div>
          <div className="mt-3 grid gap-2 text-black/70">
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="hover:underline">
              Instagram
            </a>
            <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" className="hover:underline">
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-4">
        <div className="container-pad text-xs text-black/50">
          © {new Date().getFullYear()} The Well Bible Church. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SOCIAL } from "../data/site";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Icon({ name }: { name: "youtube" | "instagram" | "chev" }) {
  switch (name) {

    case "youtube":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.5.6A3 3 0 0 0 2.4 7.2 31.7 31.7 0 0 0 2 12s.1 2.9.4 4.8a3 3 0 0 0 2.1 2.1c1.9.6 7.5.6 7.5.6s5.6 0 7.5-.6a3 3 0 0 0 2.1-2.1c.3-1.9.4-4.8.4-4.8s-.1-2.9-.4-4.8Z" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M10.5 9.5v5l5-2.5-5-2.5Z" fill="currentColor"/>
        </svg>
      );

    case "instagram":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );

    case "chev":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24">
          <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
  }
}

export default function Navbar() {

  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null);

  function handleOpen(menu: string) {
    if (closeTimer) clearTimeout(closeTimer);
    setOpenMenu(menu);
  }

  function handleClose() {
    const timer = setTimeout(() => {
      setOpenMenu(null);
    }, 250); // delay para evitar que desaparezca rápido

    setCloseTimer(timer);
  }

  return (

    <header className="absolute top-0 left-0 w-full z-50">

      {/* SOCIAL */}
      <div className="border-b border-white/10">

        <div className="container-pad flex items-center gap-3 py-1 text-xs text-white">

          <a
            href={SOCIAL.youtube}
            target="_blank"
            className="flex items-center gap-1 opacity-80 hover:opacity-100"
          >
            <Icon name="youtube"/> YouTube
          </a>

          <a
            href={SOCIAL.instagram}
            target="_blank"
            className="flex items-center gap-1 opacity-80 hover:opacity-100"
          >
            <Icon name="instagram"/> Instagram
          </a>

        </div>

      </div>


      {/* NAV */}
      <div className="container-pad flex items-center justify-between py-2 text-white">

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/brand/thewell-logo.png"
            alt="The Well"
            width={48}
            height={48}
          />

          <div>
            <div className="font-semibold text-sm">The Well</div>
            <div className="text-[11px] opacity-80">Bible Church</div>
          </div>

        </Link>


        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">

          {NAV.map((item)=>{

            const hasKids = "children" in item && item.children?.length;

            if(!hasKids){

              if(item.label === "Giving"){
                return (
                  <a
                    key={item.label}
                    href="https://familiasemilla.churchcenter.com/giving"
                    target="_blank"
                    className="px-4 py-2 rounded-full hover:bg-white/10 transition"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-full hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>
              );
            }


            return(
              <div
                key={item.label}
                className="relative"
                onMouseEnter={()=>handleOpen(item.label)}
                onMouseLeave={handleClose}
              >

                <button className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-white/10 transition">

                  {item.label}
                  <Icon name="chev"/>

                </button>


                {openMenu===item.label && (

                  <div
                    className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white text-black shadow-xl py-2"
                    onMouseEnter={()=>handleOpen(item.label)}
                    onMouseLeave={handleClose}
                  >

                    {item.children!.map((c:any)=>(
                      <a
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-2 hover:bg-black/5"
                      >
                        {c.label}
                      </a>
                    ))}

                  </div>

                )}

              </div>
            );

          })}


          {/* YOUTUBE BUTTON */}
          <a
            href={SOCIAL.youtubeSearch}
            target="_blank"
            className="bg-[#C4302B] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#a72823] transition"
          >
            Watch on YouTube
          </a>

        </nav>

      </div>

    </header>
  );
}
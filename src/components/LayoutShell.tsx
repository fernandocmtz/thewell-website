"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const isSpecialPage =
    pathname.startsWith("/about") ||
    pathname.startsWith("/events");

  return (
    <>
      {!isSpecialPage && <Navbar />}

      <main>{children}</main>

      {!isSpecialPage && <Footer />}
    </>
  );
}
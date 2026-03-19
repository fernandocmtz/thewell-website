import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Well Bible Church",
  description:
    "Verse-by-verse Bible teaching, community, and events at The Well Bible Church.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[rgb(var(--sand))] text-[rgb(var(--ink))]">
        {children}
      </body>
    </html>
  );
}

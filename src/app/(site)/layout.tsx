import LayoutShell from "@/components/LayoutShell";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutShell>{children}</LayoutShell>;
}
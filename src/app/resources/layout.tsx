export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[rgb(var(--sand))] text-[rgb(var(--ink))]">
      {children}
    </main>
  );
}
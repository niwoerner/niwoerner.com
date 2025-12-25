export function Mark({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-primary/10 text-foreground rounded px-1 py-0.5">
      {children}
    </mark>
  );
}

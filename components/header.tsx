import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold transition-colors hover:text-primary"
        >
          Nicolas Wörner
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}

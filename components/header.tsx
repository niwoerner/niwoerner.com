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
        <div className="flex items-center gap-1">
          <Link
            href="/posts"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Posts
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Contact
          </Link>
          <div className="mx-1 h-5 w-px bg-border" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

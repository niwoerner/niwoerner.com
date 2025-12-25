import Link from "next/link";
import { IconBrandX, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/niwoerner",
    icon: IconBrandGithub,
  },
  {
    name: "X",
    href: "https://x.com/niwoerner",
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nicolas-woerner",
    icon: IconBrandLinkedin,
  },
];

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
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
          <div className="mx-1 h-5 w-px bg-border" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

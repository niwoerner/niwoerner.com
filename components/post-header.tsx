import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";

interface PostHeaderProps {
  title: string;
  date: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostHeader({ title, date }: PostHeaderProps) {
  return (
    <header className="space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <IconArrowLeft className="size-4" />
        Back
      </Link>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{formatDate(date)}</p>
      </div>
      <Separator />
    </header>
  );
}

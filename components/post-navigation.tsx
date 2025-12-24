import Link from "next/link";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { PostMeta } from "@/lib/posts";

interface PostNavigationProps {
  prev: PostMeta | null;
  next: PostMeta | null;
}

export function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-16">
      <Separator className="mb-8" />
      <div className="flex items-center justify-between gap-4">
        {prev ? (
          <Button variant="ghost" asChild>
            <Link href={`/posts/${prev.slug}`} className="gap-2">
              <IconArrowLeft className="size-4" />
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}
        {next ? (
          <Button variant="ghost" asChild>
            <Link href={`/posts/${next.slug}`} className="gap-2">
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Next</span>
              <IconArrowRight className="size-4" />
            </Link>
          </Button>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}

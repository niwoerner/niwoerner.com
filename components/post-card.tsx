import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { PostMeta } from "@/lib/posts";

interface PostCardProps {
  post: PostMeta;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <Card className="transition-colors hover:bg-accent/50">
        <CardContent className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
          <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

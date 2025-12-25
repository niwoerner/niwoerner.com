import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import Link from "next/link";

type PostListProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function PostList({ limit, showViewAll = false }: PostListProps) {
  const allPosts = getAllPosts();

  if (allPosts.length === 0) {
    return (
      <p className="text-muted-foreground py-8">No posts yet. Check back soon.</p>
    );
  }

  const posts = limit ? allPosts.slice(0, limit) : allPosts;
  const hasMore = allPosts.length > 3;

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
      {showViewAll && hasMore && (
        <Link
          href="/posts"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          View all posts →
        </Link>
      )}
    </div>
  );
}

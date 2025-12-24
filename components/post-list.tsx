import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export function PostList() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground py-8">No posts yet. Check back soon.</p>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

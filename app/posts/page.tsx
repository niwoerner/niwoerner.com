import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="py-10">
            <h1 className="text-2xl font-bold tracking-tight mb-8">All Posts</h1>
            {posts.length === 0 ? (
              <p className="text-muted-foreground">No posts yet.</p>
            ) : (
              <div className="space-y-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="block group"
                  >
                    <Card
                      size="sm"
                      className="transition-colors hover:bg-accent/50"
                    >
                      <CardContent className="flex items-baseline justify-between gap-4">
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {post.title}
                        </span>
                        <time className="text-sm text-muted-foreground shrink-0">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Container>
      </main>
    </>
  );
}

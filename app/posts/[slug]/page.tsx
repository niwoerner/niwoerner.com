import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { PostHeader } from "@/components/post-header";
import { Prose } from "@/components/prose";
import { PostNavigation } from "@/components/post-navigation";
import { getPostBySlug, getAllPosts, getAdjacentPosts } from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Nicolas Wörner`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);

  const { default: Content } = await import(`@/content/posts/${slug}.mdx`);

  return (
    <>
      <Header />
      <main>
        <Container className="py-12">
          <article>
            <PostHeader title={post.title} date={post.date} />
            <Prose className="mt-8">
              <Content />
            </Prose>
            <PostNavigation prev={prev} next={next} />
          </article>
        </Container>
      </main>
    </>
  );
}

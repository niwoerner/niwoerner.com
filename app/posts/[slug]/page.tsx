import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { PostHeader } from "@/components/post-header";
import { Prose } from "@/components/prose";
import { PostNavigation } from "@/components/post-navigation";
import { getPostBySlug, getAllPosts, getAdjacentPosts } from "@/lib/posts";
import {
  SplitSection,
  SplitContent,
  SplitPlayground,
} from "@/components/split-section";
import { CounterPlayground } from "@/components/playgrounds/counter-playground";
import { Mark } from "@/components/mark";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const components = {
  SplitSection,
  SplitContent,
  SplitPlayground,
  CounterPlayground,
  Mark,
};

const options = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          keepBackground: false,
        },
      ],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ] as any,
  },
};

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

  return (
    <>
      <Header />
      <main>
        <Container className="py-12">
          <article>
            <PostHeader title={post.title} date={post.date} />
            <Prose className="mt-8">
              <MDXRemote
                source={post.content}
                components={components}
                options={options}
              />
            </Prose>
            <PostNavigation prev={prev} next={next} />
          </article>
        </Container>
      </main>
    </>
  );
}

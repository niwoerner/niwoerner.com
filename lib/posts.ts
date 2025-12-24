import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        date: data.date ? String(data.date) : "",
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    date: data.date ? String(data.date) : "",
    content,
  };
}

export function getAdjacentPosts(
  currentSlug: string
): { prev: PostMeta | null; next: PostMeta | null } {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === currentSlug);

  return {
    prev: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    next: currentIndex > 0 ? posts[currentIndex - 1] : null,
  };
}

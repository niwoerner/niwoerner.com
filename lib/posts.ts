import fs from "fs";
import path from "path";

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

function parseFrontmatter(fileContent: string): {
  meta: Omit<Post, "slug" | "content">;
  content: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    throw new Error("Invalid frontmatter format");
  }

  const frontmatterBlock = match[1];
  const content = match[2];

  const meta: Record<string, string> = {};
  frontmatterBlock.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      const value = valueParts.join(":").trim();
      meta[key.trim()] = value.replace(/^["']|["']$/g, "");
    }
  });

  return {
    meta: {
      title: meta.title || "",
      excerpt: meta.excerpt || "",
      date: meta.date || "",
    },
    content,
  };
}

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
      const { meta } = parseFrontmatter(fileContents);

      return {
        slug,
        ...meta,
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
  const { meta, content } = parseFrontmatter(fileContents);

  return {
    slug,
    ...meta,
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

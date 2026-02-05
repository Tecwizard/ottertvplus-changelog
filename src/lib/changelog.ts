import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ChangelogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
};

const changelogDir = path.join(process.cwd(), "content/changelog");

export function getAllPosts(): ChangelogPost[] {
  const files = fs.readdirSync(changelogDir);

  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(changelogDir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");

      const { data, content } = matter(raw);

      return {
        slug: filename.replace(".md", ""),
        title: data.title ?? "Untitled",
        date: data.date ?? new Date().toISOString(),
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        content
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): ChangelogPost | null {
  const filePath = path.join(changelogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? new Date().toISOString(),
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    content
  };
}

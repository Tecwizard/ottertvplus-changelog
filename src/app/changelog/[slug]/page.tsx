import Link from "next/link";
import Tag from "@/components/Tag";
import { markdownToHtml } from "@/lib/markdown";
import { getAllPosts } from "@/lib/changelog";

export async function generateStaticParams() {
  // Read all posts at build time
  const posts = getAllPosts();

  // Pass both slug and full content to the page
  return posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    tags: p.tags,
    content: p.content,
  }));
}

type ChangelogParams = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
};

export default function ChangelogPostPage({ params }: { params: ChangelogParams }) {
  // Use the content passed from generateStaticParams
  const html = markdownToHtml(params.content);

  return (
    <main>
      <header className="mb-10">
        <Link
          href="/"
          className="text-white/60 hover:text-jellyfinBlue transition text-sm"
        >
          ← Back to changelog
        </Link>

        <h1 className="text-4xl font-bold tracking-tight mt-4">
          {params.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="text-sm text-white/50">
            {new Date(params.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="flex gap-2 flex-wrap">
            {params.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>
      </header>

      <article
        className="bg-deepPanel border border-deepBorder rounded-2xl p-7 sm:p-10 prose max-w-none otter-card"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}

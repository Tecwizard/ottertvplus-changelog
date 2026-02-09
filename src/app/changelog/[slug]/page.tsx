import Link from "next/link";
import Tag from "@/components/Tag";
import { markdownToHtml } from "@/lib/markdown";
import { getAllPosts } from "@/lib/changelog";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export default function ChangelogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const html = markdownToHtml(post.content);

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
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="text-sm text-white/50">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="flex gap-2 flex-wrap">
            {post.tags.map((t) => (
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

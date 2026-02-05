import Link from "next/link";
import { getAllPosts } from "@/lib/changelog";
import Tag from "@/components/Tag";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main>
      <header className="mb-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            OtterTV+ Changelog
          </h1>

          <p className="text-white/70 text-lg max-w-2xl">
            Updates, fixes, improvements, and maintenance logs for the OtterTV+
            Jellyfin server.
          </p>

          <div className="flex gap-3 text-sm text-white/60">
            <a
              href="/ottertvplus-changelog/rss.xml"
              className="hover:text-jellyfinBlue transition"
            >
              RSS Feed →
            </a>
            <span className="text-white/30">•</span>
            <a
              href="https://jellyfin.arctic-fox.xyz/"
              target="_blank"
              className="hover:text-jellyfinPurple transition"
            >
              Return to OtterTV+ →
            </a>
          </div>
        </div>
      </header>

      <section className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-deepPanel border border-deepBorder rounded-2xl p-6 hover:border-jellyfinPurple/50 transition"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm text-white/50">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                {post.title}
              </h2>

              <p className="text-white/70 leading-relaxed">{post.excerpt}</p>

              <div>
                <Link
                  href={`/changelog/${post.slug}`}
                  className="text-jellyfinBlue hover:text-jellyfinPurple transition font-semibold"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

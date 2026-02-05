import { getAllPosts } from "@/lib/changelog";

export async function GET() {
  const posts = getAllPosts();

  const siteUrl = "https://Tecwizard.github.io/ottertvplus-changelog";

  const rssItems = posts
    .map((post) => {
      const url = `${siteUrl}/changelog/${post.slug}/`;

      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.excerpt}]]></description>
        </item>
      `;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>OtterTV+ Changelog</title>
      <link>${siteUrl}</link>
      <description>Changelog updates for the OtterTV+ Jellyfin server.</description>
      ${rssItems}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml"
    }
  });
}

CMS.registerPreviewStyle("./posts.css");

CMS.registerPreviewTemplate("changelog", ({ entry }) => {
  const title = entry.getIn(["data", "title"]) || "Untitled";
  const date = entry.getIn(["data", "date"]) || "";
  const excerpt = entry.getIn(["data", "excerpt"]) || "";
  const tags = entry.getIn(["data", "tags"]) || [];
  const body = entry.getIn(["data", "body"]) || "";

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    : "";

  // Convert markdown into HTML
  const html = window.marked.parse(body);

  const tagHtml = tags
    .map(
      (t) => `
      <span style="
        background: rgba(0, 164, 220, 0.15);
        border: 1px solid rgba(0, 164, 220, 0.35);
        padding: 0.25rem 0.6rem;
        border-radius: 999px;
        font-size: 0.75rem;
        color: #e6f4ff;
      ">
        ${t}
      </span>
    `
    )
    .join("");

  return `
    <main style="padding: 3rem; min-height: 100vh;">
      <article class="otter-card prose max-w-none">

        <h1>${title}</h1>

        <div style="
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          align-items: center;
          margin-top: -0.75rem;
          margin-bottom: 1.5rem;
        ">
          <span style="opacity: 0.6; font-size: 0.9rem;">
            ${formattedDate}
          </span>

          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            ${tagHtml}
          </div>
        </div>

        <p style="opacity: 0.9;">${excerpt}</p>

        <hr />

        <div>${html}</div>
      </article>
    </main>
  `;
});

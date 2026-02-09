CMS.registerPreviewStyle("/styles/globals.css");

CMS.registerPreviewTemplate("changelog", ({ entry }) => {
  const title = entry.getIn(["data", "title"]);
  const date = entry.getIn(["data", "date"]);
  const excerpt = entry.getIn(["data", "excerpt"]);
  const body = entry.getIn(["data", "body"]);

  return `
    <div style="padding: 2rem; font-family: system-ui;">
      <h1 style="font-size: 2.2rem; font-weight: 700;">${title}</h1>
      <p style="opacity: 0.7;">${date}</p>
      <p style="margin-top: 1rem;">${excerpt}</p>
      <hr style="margin: 2rem 0; opacity: 0.3;" />
      <div>${body}</div>
    </div>
  `;
});

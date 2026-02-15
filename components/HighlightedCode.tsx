import { codeToHtml } from "shiki";

export async function HighlightedCode({
  code,
  lang = "txt",
}: {
  code: string;
  lang?: string;
}) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark-high-contrast",
    },
  });

  return (
    <div
      className="codeblock"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

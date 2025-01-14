import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

// Items that are the default, but here for documentation, are marked by // d
const site = lume({
  src: ".", // d
  location: new URL("https://thisguy.codes"),

  dest: "_site", // d
  emptyDest: true, // d
  prettyUrls: true, // d
  caseSensitiveUrls: false, // d
  includes: "_includes", // d

  server: {
    open: true,
    middlewares: [], // d
  },

  watcher: {
    debounce: 100, // d
    ignore: [], // d
  },

  components: {
    variable: "comp", // d
    cssFile: "/components.css", // d
    jsFile: "/components.js", // d
  },
});

site.use(blog());

const hljsPath = "/css/code_theme.css";
site.use(codeHighlight({
  theme: {
    name: "a11y-light",
    path: hljsPath,
  },
}));

site.copy(hljsPath);
site.data("extra_head", [
  `<link rel="stylesheet" href=${JSON.stringify(hljsPath)}>`,
  `<link rel="preload" href=${JSON.stringify(hljsPath)} as="style">`,
  `<link rel="preload" href="/styles.css" as="style">`,
  `<link rel="preload" href="/js/main.js" as="script">`,
  `<link rel="preload" href="/js/comments.js" as="script">`,
  `<link rel="preload" href="https://unpkg.com/@lumeland/ds@0.5.2/ds.css" as="style">`,
  `<link rel="preload" href="https://rsms.me/inter/inter.css" as="style">`,
  `<link rel="preload" href="https://rsms.me/inter/font-files/InterVariable.woff2?v=4.1" as="font">`,
  `<link rel="preload" href="https://rsms.me/inter/font-files/InterDisplay-SemiBold.woff2?v=4.1" as="font">`,
  `<link rel="preload" href="/pagefind/pagefind-ui.css" as="style">`,
  `<link rel="preload" href="/pagefind/pagefind-ui.js" as="script">`,
  `<link rel="prefetch" href="https://giscus.app/client.js" as="script">`,
]);

const giscusScript = (document: Document) => {
  const script = document.createElement("script");
  new Map<string, string | boolean>([
    ["type", "text/javascript"],
    ["src", "https://giscus.app/client.js"],
    ["crossOrigin", "anonymous"],
    ["async", true],

    ["data-repo", "thisguycodes/me"],
    ["data-repo-id", "R_kgDOGjM4Kg"],
    ["data-category", "Posts"],
    ["data-category-id", "DIC_kwDOGjM4Ks4Cl6zQ"],
    ["data-mapping", "og:title"],
    ["data-strict", "1"],
    ["data-reactions-enabled", "1"],
    ["data-emit-metadata", "0"],
    ["data-input-position", "top"],
    ["data-theme", "preferred_color_scheme"],
    ["data-lang", "en"],
    ["data-loading", "lazy"],
  ]).forEach((v, k) => {
    switch (v) {
      case true:
        script.setAttribute(k, "");
        break;
      case false:
        script.removeAttribute(k);
        break;
      default:
        script.setAttribute(k, v as string);
    }
  });

  const aside = document.createElement("aside");
  aside.classList.add("giscus");
  return [aside, script];
};

site.process([".md"], (pages) => {
  for (const page of pages) {
    if (page.src.path.includes("posts")) {
      const post = page.document!.querySelector(".body-post")!;
      giscusScript(page.document!).forEach((el) => {
        post.appendChild(el);
      });
    }
  }
});

export default site;

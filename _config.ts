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
    ["data-theme", "light"],
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

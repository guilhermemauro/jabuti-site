import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../lib/blog";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: "Jabuti blog",
    description: "SEO, AEO and GEO with AI agents that work from your own data.",
    site: context.site ?? "https://getjabuti.com",
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
    })),
  });
}

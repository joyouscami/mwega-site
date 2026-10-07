import { caseStudies, solutions } from "@/content/site";
import { siteUrl } from "@/lib/seo";

/* Placeholder pages (insights, privacy, terms, unpublished case studies) are left out until they have real content. */
export default function sitemap() {
  const paths = ["", "/about", "/solutions", ...solutions.map((s) => "/solutions/" + s.slug), "/industries", "/resources", "/case-studies",
    ...caseStudies.filter((c) => c.status === "published").map((c) => "/case-studies/" + c.slug), "/contact"];
  return paths.map((path) => ({ url: siteUrl + path, lastModified: new Date() }));
}

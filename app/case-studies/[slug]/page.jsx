import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/pages";
import { caseStudies } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const find = (slug) => caseStudies.find((c) => c.slug === slug);

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = find(slug);
  if (!study) return {};
  if (study.status !== "published") return pageMeta("/case-studies/" + slug, { title: "Case study coming soon | Mwega", noindex: true });
  return pageMeta("/case-studies/" + slug, { title: study.title + " | Mwega", description: study.challenge });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const study = find(slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}

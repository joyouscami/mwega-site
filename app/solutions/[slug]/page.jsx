import { notFound } from "next/navigation";
import { SolutionPage } from "@/components/pages";
import { getSolution, solutions } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  return solution ? pageMeta("/solutions/" + slug, { description: solution.description }) : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return <SolutionPage solution={solution} />;
}

import { CaseStudiesPage } from "@/components/interactive";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/case-studies");

export default function Page() {
  return <CaseStudiesPage />;
}

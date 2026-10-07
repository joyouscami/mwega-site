import { SolutionsPage } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/solutions");

export default function Page() {
  return <SolutionsPage />;
}

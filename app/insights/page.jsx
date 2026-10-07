import { InsightsPage } from "@/components/interactive";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/insights", { noindex: true });

export default function Page() {
  return <InsightsPage />;
}

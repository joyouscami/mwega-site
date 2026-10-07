import { ResourcesPage } from "@/components/interactive";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/resources");

export default function Page() {
  return <ResourcesPage />;
}

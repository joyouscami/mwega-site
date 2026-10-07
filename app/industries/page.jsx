import { IndustriesPage } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/industries");

export default function Page() {
  return <IndustriesPage />;
}

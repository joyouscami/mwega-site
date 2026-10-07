import { AboutPage } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/about");

export default function Page() {
  return <AboutPage />;
}

import { HomePage } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/");

export default function Page() {
  return <HomePage />;
}

import { LegalPage } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/terms", { title: "Terms of Service | Mwega", noindex: true });

export default function Page() {
  return <LegalPage title="Terms of Service" />;
}

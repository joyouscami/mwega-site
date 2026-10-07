import { ContactPage } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/contact");

export default function Page() {
  return <ContactPage />;
}

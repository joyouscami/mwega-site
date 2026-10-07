import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui";
import { Navbar, StickyCta } from "@/components/interactive";
import { brand, siteConfig } from "@/content/site";
import { siteUrl } from "@/lib/seo";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.companyName + " | " + siteConfig.tagline,
  description: siteConfig.description,
};
export const viewport = { themeColor: "#07102A" };

/* Scroll-reveal content starts hidden and is shown by a script. This keeps it visible when scripts are off. */
const withoutScripts = ".mw .reveal,.mw .flow-step,.mw .step-name,.mw .step-text{opacity:1!important;transform:none!important}.mw .flow-track,.mw .steps-track>span{transform:none!important}";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="mw" style={brand.src ? { "--logo": 'url("' + brand.src + '")' } : undefined}>
        <noscript><style dangerouslySetInnerHTML={{ __html: withoutScripts }} /></noscript>
        <a href="#mw-main" className="skip">Skip to content</a>
        <Navbar />
        <main id="mw-main" tabIndex={-1}>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}

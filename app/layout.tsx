import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Yuzi - Timeless Healing, Modern Comforts",
  description:
    "Yuzi is a haven designed specifically for moms during one of the most challenging periods of their lives—the postnatal journey. Our retreat offers a nurturing and supportive environment where mothers can find solace, rejuvenation, and connection as they navigate the joys and demands of early motherhood.",
  twitter: {
    card: "summary_large_image",
    title: "Yuzi - Timeless Healing, Modern Comforts",
    description:
      "Yuzi is a haven designed specifically for moms during one of the most challenging periods of their lives—the postnatal journey. Our retreat offers a nurturing and supportive environment where mothers can find solace, rejuvenation, and connection as they navigate the joys and demands of early motherhood.",
    creator: "Stephiney Y. Foley",
  },
  metadataBase: new URL("https://www.yuzicare.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

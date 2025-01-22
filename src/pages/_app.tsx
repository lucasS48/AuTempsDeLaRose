import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Au Temps de la Rose</title>
        <meta
          name="description"
          content="Découvrez nos conseils pour entretenir vos plantes et les garder en pleine santé."
        />
        <meta property="og:image" content="/images/preview.jpg" />
      </Head>
      <Header />
      <div className="pt-16">
          <Component {...pageProps} key={router.route} />
      </div>

      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

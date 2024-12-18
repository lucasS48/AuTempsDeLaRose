import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return  <>
  <Header />
  <div className="pt-16">
  <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
      </div>
  <Footer />
</>;
}

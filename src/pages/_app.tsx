import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return  <>
  <Header />
  <div className="pt-20">
        <Component {...pageProps} />
      </div>
  <Footer />
</>;
}

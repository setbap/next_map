import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import AsideMenu from "../template/AsideMenu";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  const closeFn = () => setOpen(false);
  return (
    <div lang="fa" dir="rtl">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="سامانه مکان محور nitenviro" />
      </Head>
      <AnimateSharedLayout type="switch">
        <div
          style={{ height: "100%" }}
          className="sm:relative fixed top-0 bottom-0"
        >
          <AsideMenu closeFn={closeFn} open={open} />
          <section className="h-full sm:h-screen w-screen bg-skin-base flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
              <AnimatePresence exitBeforeEnter initial={false}>
                <Component {...pageProps} />
              </AnimatePresence>
            </main>
          </section>
        </div>

        <div
          className="fixed top-2 start-5 w-12 h-10 z-50 border-2 transition-colors text-orange-600 duration-200 border-gray-300 hover:bg-gray-200 cursor-pointer bg-white rounded-md  flex items-center justify-center "
          onClick={() => setOpen((val) => !val)}
        >
          <HiOutlineMenuAlt3 size={24} />
        </div>
      </AnimateSharedLayout>
    </div>
  );
}

export default MyApp;

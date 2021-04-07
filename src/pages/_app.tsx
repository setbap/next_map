import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import AsideMenu from "../template/AsideMenu";
import { ThemeProvider } from "../context/themeProvider";
import "../../styles/globals.css";
import ThemeChanger from "~/components/ThemeChanger";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  const closeFn = () => setOpen(false);
  return (
    <div lang="fa" dir="rtl">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  var storageKey = 'dark';
                  var classNameDark = 'dark';
                  var classNameLight = 'light';
                  var d = document.querySelector('html');
                  //set class on html doc
                  function setClassOnDocumentBody(dark) {
                    d.classList.add(dark ? classNameDark : classNameLight);
                    d.classList.remove(dark ? classNameLight : classNameDark);
                  }
                  //media query
                  var preferDarkQuery = '(prefers-color-scheme: dark)';
                  var mql = window.matchMedia(preferDarkQuery);
                  var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                  //log media query result
                  console.log("[Initialization] supportsColorSchemeQuery:%s and prefersDark:%s",supportsColorSchemeQuery,mql.matches);
                  
                  //local storage
                  var localStorageTheme = null;
                  try {
                    localStorageTheme = localStorage.getItem(storageKey);
                  } catch (err) {}
                  var localStorageExists = localStorageTheme !== null;
                  //log local storage result
                  console.log("[Initialization] localStorageExists:%s and localStorageDark:%s",localStorageExists,JSON.parse(localStorageTheme));
                  // if localStorage Exists update the value of localStorageTheme
                  if (localStorageExists) {
                    localStorageTheme = JSON.parse(localStorageTheme);
                  }
                  if (localStorageExists) {
                    setClassOnDocumentBody(localStorageTheme);
                    console.log("[Initial Theme] Setting theme from Local Storage");       
                  } else if (supportsColorSchemeQuery) {
                    setClassOnDocumentBody(mql.matches);  //added to remove flicker
                    console.log("[Initial Theme] Setting theme from Media Query");
                    // localStorage.setItem(storageKey, mql.matches);
                  }else {
                    var isDarkMode = d.classList.contains(classNameDark);
                    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                    console.log("setting theme from class")
                  }
                })();
              `,
          }}
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="سامانه مکان محور nitenviro" />
      </Head>
      <ThemeProvider>
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
            className="fixed top-2 start-5 w-12 h-10 z-50 border-2 transition-colors text-skin-primary duration-200 border-skin-muted hover:bg-skin-muted cursor-pointer bg-skin-base rounded-md  flex items-center justify-center "
            onClick={() => setOpen((val) => !val)}
          >
            <HiOutlineMenuAlt3 size={24} />
          </div>

          <ThemeChanger />
        </AnimateSharedLayout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;

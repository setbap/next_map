import "ol/ol.css";
import { motion } from "framer-motion";
import MapNav from "~/template/MapNav";
import dynamic from "next/dynamic";
import Head from "next/head";
import { NextSeo } from "next-seo";

const MapWrapper = dynamic(() => import("~/components/map/mapWrapper"), {
  ssr: false,
});

const App = () => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0, transition },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.85,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <>
      <Head>
        <meta property="og:locale " content="fa_IR" />
        <NextSeo
          title="نقشه استان مازندران"
          description="نمایش نقشه استان مازندران به همراه لایه ها"
          openGraph={{
            url: "https://www.nitenviro.com/map",
            title: "نقشه استان مازندران",
            description: "نمایش نقشه استان مازندران به همراه لایه ها",
            images: [
              {
                url: "https://www.nitenviro.ir/og/map.png",
                width: 400,
                height: 400,
              },
            ],
            site_name: "NitEnviro",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
      </Head>
      <MapNav />
      <div className="flex flex-1 overflow-hidden ">
        <motion.div
          variants={thumbnailVariants}
          className="flex relative flex-1"
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <MapWrapper />
        </motion.div>
      </div>
    </>
  );
};
export default App;

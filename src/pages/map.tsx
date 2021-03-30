import "ol/ol.css";
import { motion } from "framer-motion";
import MapNav from "~/template/MapNav";
import dynamic from "next/dynamic";
import Head from "next/head";

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
        <title>{"نقشه"}</title>
        <meta property="og:title" content={"نقشه استان مازندران"} />
        <meta property="og:url" content={`https://www.nitenviro.com/map`} />
        <meta property="og:image" content={"/og/map.png"} />
        <meta property="og:description" content={"نقشه جزیی استان مازندران"} />
        <meta property="og:locale " content="fa_IR" />
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

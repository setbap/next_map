import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Nav from "~/template/Nav";

interface Props {}

const WasteItem = (props: Props) => {
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
        <title>{"محاسبه زباله های  بازیافتی"}</title>
        <meta property="og:title" content={"محاسبه زباله های  بازیافتی"} />
        <meta property="og:url" content={`https://www.nitenviro.com/waste`} />
        <meta property="og:image" content={"/og/map.png"} />
        <meta
          property="og:description"
          content={"محاسبه زباله های  بازیافتی"}
        />
        <meta property="og:locale " content="fa_IR" />
      </Head>
      <Nav />
      <div className="flex flex-1 overflow-hidden ">
        <motion.div
          variants={thumbnailVariants}
          className={` relative
          overflow-auto
         w-full`}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="container">
            <div></div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default WasteItem;

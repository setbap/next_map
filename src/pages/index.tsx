// interface Props {}

import { motion } from "framer-motion";
import Footer from "~/template/Footer";
import GetStarted from "@components/home/get_started";
import HomeTwo from "@components/home/home";
import Head from "next/head";
import { NextSeo } from "next-seo";
// import MapNav from "~/template/MapNav";

const Home = () => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <>
      <Head>
        <NextSeo
          title="nitEnviro"
          description="nitEnviroکوششی است جهت افزایش آگاهی‌ و کمک به بهبود وضعیت محیط زیست کشور"
          openGraph={{
            url: "https://www.nitenviro.ir",
            title: "nitEnviro",
            description:
              "nitEnviroکوششی است جهت افزایش آگاهی‌ و کمک به بهبود وضعیت محیط زیست کشور",
            images: [
              {
                url: "https://www.nitenviro.ir/og/home.png",
                width: 400,
                height: 400,
                alt: "تصویر خانه",
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
      {/* <MapNav />  */}
      <div className="flex flex-1 overflow-hidden ">
        <motion.div
          variants={thumbnailVariants}
          className="w-full bg-fixed  flex-wrap flex flex-row overflow-auto"
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="w-full">
            <GetStarted />
          </div>
          <HomeTwo />
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default Home;

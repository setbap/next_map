import { motion } from "framer-motion";
import Head from "next/head";
import Nav from "~/template/Nav";
import Footer from "~/template/Footer";
import CitiesButtons from "~/components/landfill/CitiesButton";
import { GetStaticProps, NextPage } from "next";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const LandFill: NextPage<{
  cities: {
    Name: string;
    id: number;
  }[];
}> = ({ cities }) => {
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
        <title>{"لندفیل ها"}</title>
        <meta property="og:title" content={"لندفیل ها"} />
        <meta
          property="og:url"
          content={`https://www.nitenviro.com/landfill`}
        />
        <meta property="og:image" content={"/og/landfil.png"} />
        <meta property="og:description" content={"لندفیل ها "} />
        <meta property="og:locale " content="fa_IR" />
      </Head>
      <Nav />
      <div className="flex  overflow-hidden ">
        <motion.div
          layout
          className="w-full bg-skin-landfill   overflow-auto"
          variants={thumbnailVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className=" max-w-7xl   mx-auto w-full  mt-3 space-y-6 md:space-y-4 sm:space-y-6 relative">
            <div className="w-full flex flex-row">
              <div className="hidden md:block w-full md:w-1/2  text-center rounded-xl">
                <div className=" aspect-w-16 aspect-h-9 rounded-lg shadow-lg">
                  <iframe
                    className="   rounded-lg"
                    src="https://www.aparat.com/video/video/embed/videohash/zHq5a/vt/frame"
                    title="لندفیلهای مازندران"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full md:w-1/2  text-center rounded-xl ms-2">
                <div className=" aspect-w-16 aspect-h-9  text-center rounded-lg overflow-hidden ">
                  <img src="/new_mazandaran.png" className="object-fill" />
                </div>
              </div>
            </div>
            <CitiesButtons cities={cities} currentId={"-1"} />
            <div className="     w-full text-center rounded-xl flex-wrap md:flex-nowrap flex-row  ">
              <div className=" text-center md:shadow-none rounded-xl">
                <div className=" md:aspect-h-2    aspect-w-16 aspect-h-9   rounded-lg ">
                  <iframe
                    className="md:hidden block  rounded-lg"
                    src="https://www.aparat.com/video/video/embed/videohash/zHq5a/vt/frame"
                    title="لندفیلهای مازندران"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="h-8" />
          </div>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default LandFill;

export const getStaticProps: GetStaticProps = async () => {
  const rawCities = await fetch(
    `https://geonitenviro.nit.ac.ir/api/landfillNames`
  );

  const cities = await rawCities.json();

  return {
    props: {
      cities: cities,
    },
    revalidate: 10,
  };
};

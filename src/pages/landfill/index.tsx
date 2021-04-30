import { AnimatePresence, motion } from "framer-motion";
import Img from "next/image";
import Head from "next/head";
import Nav from "~/template/Nav";
import chartData from "~/../public/chart_data.json";
import ChartBox from "~/components/ChartBox";
import Footer from "~/template/Footer";
import ChartBoxAIO from "~/components/ChartBoxAIO";
import { FC, MutableRefObject, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { pagesLinks } from "~/utils/links";

enum LandFillInfoState {
  Moarefi = 0,
  Nemodar = 1,
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const LandFill = () => {
  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  const [infoState, setInfoState] = useState<LandFillInfoState>(
    LandFillInfoState.Moarefi
  );
  const myRef = useRef<HTMLDivElement>(null);
  const scrollTo = (ref: MutableRefObject<HTMLDivElement>) => {
    console.log(ref.current.offsetTop);

    return;
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
          <div className=" max-w-7xl   mx-auto w-full  -mt-3 space-y-6 relative">
            <div className="  w-full aspect-w-2 aspect-h-1  text-center ">
              <img
                src="/landfill/mazandaran.jpg"
                // width={472}
                className="object-fill"
                // height={400}
              />
            </div>

            <div className=" h-36 sm:h-32 w-full mx-auto text-center rounded-xl flex flex-wrap items-center justify-center">
              <CityButton cityName="sari" name="ساری" />
              <CityButton cityName="babol" name="بابل" />
              <CityButton cityName="amol" name="آمل" />
              <CityButton cityName="qaemshahr" name="قائمشهر" />
            </div>
            <div className=" w-full mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full mx-2 text-center rounded-xl">
                <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg">
                  <iframe
                    className="   rounded-lg"
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

const CityButton = ({ name, cityName }: { name: string; cityName: string }) => {
  return (
    <Link scroll={true} href={pagesLinks.landfillsItem({ city: cityName })}>
      <a>
        <button type="button" className="shadow-lg">
          <div>
            <div className=" w-16 h-12 bg-green-100 text-skin-primary flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
              {name}
            </div>
          </div>
        </button>
      </a>
    </Link>
  );
};

const InfoCard: FC<{ key2: string; height?: number; className?: string }> = ({
  children,
  key2,
  className,
  height,
}) => {
  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0, height: 0 },
    enter: { scale: 1, height: height, opacity: 1, transition },
    exit: {
      height: 0,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };

  return (
    <motion.div
      key={key2}
      variants={thumbnailVariants}
      initial="exit"
      animate="enter"
      exit="exit"
      className={`bg-skin-base   rounded-lg  font-bold shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default LandFill;

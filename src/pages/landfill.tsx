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

enum LandFillInfoState {
  Moarefi = 0,
  Gallery = 1,
  Nemodar = 2,
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
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
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
            <div className="  w-full  text-center ">
              <img
                src="/mazandaran.png"
                // width={472}
                className=" w-full"
                // height={400}
              />
            </div>

            <div className=" h-36 sm:h-32 w-full mx-auto text-center rounded-xl flex flex-wrap items-center justify-center">
              <CityButton name="نکا" />
              <CityButton name="ساری" />
              <CityButton name="بابل" />
              <CityButton name="بهشهر" />
              <CityButton name="بابل" />
              <CityButton name="تنکابن" />
              <CityButton name="بابلسر" />
              <CityButton name="ساری" />
              <CityButton name="بابلسر" />
            </div>

            <div className=" w-full mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row space-y-2 flex md:space-y-0 md:space-x-3">
              <div className="w-full  h-64 rounded-lg shadow-lg">
                <iframe
                  className=" h-full w-full rounded-lg"
                  src="https://www.aparat.com/video/video/embed/videohash/zHq5a/vt/frame"
                  title="لندفیلهای مازندران"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className=" w-full mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row space-y-2 flex md:space-y-0 md:space-x-3">
              <div className="  h-64 rounded-lg md:w-5/12 w-full flex   font-bold shadow-lg">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.464658707638!2d52.693889550728535!3d36.30803777995501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDE4JzI4LjkiTiA1MsKwNDEnNDUuOSJF!5e1!3m2!1sen!2s!4v1617477248784!5m2!1sen!2s"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="flex-1 w-4" />

              <div className=" bg-green-100 w-full h-64 rounded-lg md:w-7/12   font-extrabold shadow-lg">
                {/* <iframe  src="https://www.aparat.com/video/video/embed/videohash/zHopl/vt/frame" title="انجیلسی" ></iframe> */}
                <iframe
                  src="https://www.aparat.com/video/video/embed/videohash/BtvlS/vt/frame"
                  title="محل دفن زباله های بابل- سایت انجیلسی"
                  className=" h-full w-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="sticky text-black  flex justify-start space-x-3 items-center z-40 border-b-2 border-skin-secondary top-0 w-full h-11 bg-skin-landfill mx-auto">
              <button
                className={`${
                  infoState === LandFillInfoState.Moarefi
                    ? "text-skin-primary border-skin-primary"
                    : "border-transparent"
                } h-full px-3 mt-1 outline-none focus:outline-none border-b-4 
                `}
                onClick={() => {
                  scrollTo(myRef);
                  return setInfoState(LandFillInfoState.Moarefi);
                }}
              >
                معرفی
              </button>
              <div className="md:mx-24 sm:hidden md:block" />
              <button
                className={`${
                  infoState === LandFillInfoState.Gallery
                    ? "text-skin-primary border-skin-primary"
                    : "border-transparent"
                } h-full px-3 mt-1 outline-none focus:outline-none border-b-4 
              `}
                onClick={() => {
                  scrollTo(myRef);
                  return setInfoState(LandFillInfoState.Gallery);
                }}
              >
                گالری
              </button>
              <div className="md:mx-24 sm:hidden md:block" />
              <button
                className={`${
                  infoState === LandFillInfoState.Nemodar
                    ? "text-skin-primary border-skin-primary"
                    : "border-transparent"
                } h-full px-3 mt-1 outline-none focus:outline-none border-b-4 
              `}
                onClick={() => {
                  scrollTo(myRef);
                  return setInfoState(LandFillInfoState.Nemodar);
                }}
              >
                جزییات
              </button>
            </div>
            <div ref={myRef} />
            <motion.div className="w-full mx-auto ">
              <AnimatePresence>
                {infoState === LandFillInfoState.Moarefi && (
                  <motion.div className=" w-full mx-auto grid md:grid-cols-4 grid-cols-1 space-y-2 md:space-y-0  md:gap-4">
                    <div className="col-span-3 ">
                      <InfoCard
                        key2={"1z"}
                        className="prose-sm flex-col justify-center items-center  p-4 text-start"
                      >
                        <h3 className="text-center">انجیلسی</h3>
                      </InfoCard>
                    </div>
                    <div className="w-full">
                      <InfoCard height={120} key2={"3z"}>
                        <a
                          className="w-full h-full"
                          target="_blank"
                          href="https://www.booked.net/weather/babol-w262798"
                        >
                          <img
                            className="w-full h-full overflow-hidden  rounded-lg "
                            src="https://w.bookcdn.com/weather/picture/2_w262798_1_1_009fde_250_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=99031"
                            alt="booked.net"
                          />
                        </a>
                      </InfoCard>
                      <div className="h-5" />
                      <InfoCard height={180} key2={"2z"}>
                        Image View
                      </InfoCard>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {infoState === LandFillInfoState.Gallery && (
                  <motion.div className=" w-full mx-auto grid grid-cols-4   gap-4">
                    <div
                      dir="lrt"
                      style={{ direction: "ltr" }}
                      className="col-span-4"
                    >
                      <InfoCard height={320} key2="che">
                        <Carousel
                          className="p-4"
                          infiniteLoop
                          swipeable
                          autoFocus
                          interval={1500}
                          useKeyboardArrows={true}
                          showThumbs={false}
                        >
                          <div className=" h-64 object-contain">
                            <img
                              src="/images/landfill/anjilsi1.jpg"
                              className="object-contain h-60"
                            />
                            <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle w-56">
                              عکس های انجیلسی
                            </p>
                          </div>
                          <div className="h-64 object-contain ">
                            <img
                              src="/images/landfill/anjilsi2.jpg"
                              className="object-contain h-60"
                            />
                            <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle w-56">
                              عکس های انجیلسی
                            </p>
                          </div>
                          <div className="h-64">
                            <img
                              src="/images/landfill/anjilsi3.jpg"
                              className="object-contain h-60"
                            />
                            <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle w-56">
                              عکس های انجیلسی
                            </p>
                          </div>
                        </Carousel>
                      </InfoCard>
                    </div>

                    <div className="col-span-4 md:col-span-4 overflow-hidden">
                      <InfoCard key2={"1y"}>
                        <iframe
                          allowFullScreen
                          className=" h-full w-full rounded-lg"
                          src="https://www.aparat.com/video/video/embed/videohash/WOKbB/vt/frame"
                          title="انجیلسی"
                        ></iframe>
                      </InfoCard>
                    </div>
                    <div className="col-span-4 md:col-span-2 overflow-hidden">
                      <InfoCard
                        className="w-full relative overflow-hidden"
                        key2={"1y"}
                      >
                        <Img
                          className="h-full  rounded-lg overflow-hidden"
                          layout="fill"
                          objectFit="fill"
                          loading="lazy"
                          src="/landfill/live.gif"
                        />
                      </InfoCard>
                    </div>
                    <div className="col-span-4 md:col-span-2 overflow-hidden">
                      <InfoCard
                        className="w-full relative overflow-hidden"
                        key2={"123y"}
                      >
                        <Img
                          className="h-full  rounded-lg overflow-hidden"
                          layout="fill"
                          objectFit="fill"
                          loading="lazy"
                          src="/landfill/plate_recog.gif"
                        />
                      </InfoCard>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {infoState === LandFillInfoState.Nemodar && (
                  <motion.div className=" w-full mx-auto grid md:grid-cols-2 grid-cols-1  gap-4">
                    <InfoCard key2="1x">
                      <ChartBox
                        title="نمودار میزان بارش در طی ماه های سال"
                        data={chartData}
                        areaDataKey="rain"
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard key2={"2x"}>
                      <ChartBox
                        title="نمودار میزان تبخیر در طی ماه های سال"
                        data={chartData}
                        areaDataKey="eva"
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard key2={"1y"}>
                      <ChartBox
                        title="نمودار میزان دما در طی ماه های سال"
                        data={chartData}
                        areaDataKey="temp"
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard key2={"2y"}>
                      <ChartBoxAIO
                        title="نمودار  ماه های سال"
                        data={chartData}
                        areaDataKey={[
                          { name: "temp", persian: "دما" },
                          { name: "eva", persian: "تبخیر" },
                          { name: "rain", persian: "بارش" },
                        ]}
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="h-8" />
          </div>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

const CityButton = ({ name }: { name: string; link?: string }) => {
  return (
    <button type="button" className="shadow-lg">
      <div>
        <div className=" w-12 h-12 bg-green-100 text-skin-primary flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
          {name}
        </div>
      </div>
    </button>
  );
};

const InfoCard: FC<{ key2: string; height?: number; className?: string }> = ({
  children,
  key2,
  className,
  height = 320,
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
      className={`bg-skin-base overflow-hidden w-full h-80 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default LandFill;

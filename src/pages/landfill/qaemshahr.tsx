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
import CitiesButtons from "~/components/landfill/CitiesButton";

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
        <title>{" لندفیل قائمشهر "}</title>
        <meta property="og:title" content={"لندفیل ها"} />
        <meta
          property="og:url"
          content={`https://www.nitenviro.com/landfill`}
        />
        <meta property="og:image" content={"/og/landfil.png"} />
        <meta
          property="og:description"
          content={"معرفی لندفیل قائمشهر به همراه ویدیو و عکس "}
        />
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
          <div className=" max-w-7xl   mx-auto w-full   space-y-6 relative">
            <div className=" w-full mt-4 mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full md:w-1/2 mx-2 text-center rounded-xl">
                <div className="aspect-w-16 aspect-h-9  overflow-hidden bg-black  rounded-lg shadow-lg">
                  <img
                    src="/landfill/qaemshahr/qaemshahr.jpg"
                    className="object-fill"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mx-2 text-center rounded-xl my-2 md:my-0 ">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                  <Img
                    src="/landfill/qaemshahr/qaemshahr.gif"
                    layout="fill"
                    className="object-fill"
                  />
                </div>
              </div>
            </div>

            <CitiesButtons />

            <div className=" w-full mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full md:w-4/12 md:mb-0 mb-4  mx-2 text-center rounded-xl">
                <div className="aspect-w-8 aspect-h-9  rounded-lg shadow-lg">
                  <iframe
                    className=" rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3714.42281012479!2d52.81776836183384!3d36.489565270088676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snl!4v1619826639694!5m2!1sen!2snl"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className=" bg-green-100 w-full  rounded-lg md:w-8/12   font-extrabold shadow-lg">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden  rounded-lg shadow-lg">
                  <iframe
                    src="https://www.aparat.com/video/video/embed/videohash/6PbRu/vt/frame"
                    title="محل دفن زباله های قائمشهر"
                    className="rounded-lg overflow-hidden"
                    allowFullScreen
                  ></iframe>
                </div>
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
                  <motion.div className=" w-full ">
                    <motion.div
                      className="my-4 bg-skin-base rounded-lg font-bold shadow-lg
                      text-justify prose-sm flex-col justify-center items-center   p-4 "
                    >
                      <h2>معرفی لندفیل قائمشهر </h2>
                      <p
                        className="
                      "
                      >
                        قائمشهر از شهرهای مهم و بزرگ استان مازندارن بوده که در
                        ناحیه البرز مرکزی واقع شده است. این شهرستان با جمعینی
                        افزون بر 310000 نفر از طریق دو جاده فیروزکوه و هراز در
                        مسیر ارتباطی تهران با شمال و شمال‌شرق کشور می باشد. قریب
                        به 50 سال است که زباله های این شهر در مجاورت رودخانه
                        تلار به صورت تلمبار سطحی دپو شده و این موضوع مشکلات
                        بهداشتی و محیط زیستی زیادی برای مناطق حاشیه به دنبال
                        داشته است. اخیرا در مجاورت محل دپوی زباله لندفیل بهداشتی
                        به مساحت 4 هکتار احداث شده است. این محل دفن در حال حاضر
                        قریب به 300 تن زباله شهرها و روستاهای مجاور و صنایع
                        منطقه را دریافت می کند.
                      </p>
                    </motion.div>

                    <motion.div className=" w-full mx-auto grid md:grid-cols-4 grid-cols-1 space-y-2 md:space-y-0  md:gap-4">
                      <div className="col-span-4 md:col-span-2 overflow-hidden">
                        <InfoCard
                          className="aspect-w-16 aspect-h-9"
                          key2={" 1y"}
                        >
                          <iframe
                            allowFullScreen
                            className="rounded-lg"
                            src="https://www.aparat.com/video/video/embed/videohash/6PbRu/vt/frame"
                            title="محل دفن زباله های قائمشهر                            "
                          ></iframe>
                        </InfoCard>
                      </div>
                      <div className="col-span-4 md:col-span-2 overflow-hidden">
                        <InfoCard
                          className="aspect-w-16 aspect-h-9"
                          key2={"3z"}
                        >
                          <a
                            className="aspect-w-16 aspect-h-9"
                            target="_blank"
                            href="https://www.booked.net/weather/savad-kuh-w263041"
                          >
                            <img
                              className=" overflow-hidden  rounded-lg "
                              src="https://w.bookcdn.com/weather/picture/1_w263041_1_1_137AE9_240_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=2&domid=&anc_id=96149"
                              alt="booked.net"
                            />
                          </a>
                        </InfoCard>
                      </div>
                      <div
                        style={{ direction: "ltr" }}
                        className="col-span-4 md:col-span-2 "
                      >
                        <InfoCard
                          className="aspect-w-16  aspect-h-10"
                          key2="che"
                        >
                          <Carousel
                            className=" rounded-lg "
                            infiniteLoop
                            swipeable
                            interval={1500}
                            useKeyboardArrows={true}
                            showThumbs={false}
                          >
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div key={"gallery" + i} className="p-2  ">
                                <div className="aspect-w-16 aspect-h-9">
                                  <img
                                    src={`/landfill/qaemshahr/gallery/${i}.jpg`}
                                    className=""
                                  />
                                </div>
                                <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle w-56">
                                  محل دفن زباله های قائمشهر
                                </p>
                              </div>
                            ))}
                          </Carousel>
                        </InfoCard>
                      </div>
                      <div className="col-span-4 md:col-span-2 ">
                        <InfoCard
                          className="aspect-w-16 rounded-lg overflow-hidden  aspect-h-10"
                          key2={"1y"}
                        >
                          <iframe
                            src="https://www.aparat.com/video/video/embed/videohash/SLlad/vt/frame"
                            title="تایم لپس محل دفن زباله های "
                            className="  rounded-lg overflow-hidden"
                            allowFullScreen
                          ></iframe>
                        </InfoCard>
                      </div>
                      <div className="col-span-4 md:col-span-2 ">
                        <InfoCard
                          className="aspect-w-16 rounded-lg overflow-hidden  aspect-h-10"
                          key2={"1y"}
                        >
                          <Img
                            className="  rounded-lg overflow-hidden"
                            layout="fill"
                            loading="lazy"
                            src="/landfill/live.gif"
                          />
                        </InfoCard>
                      </div>
                      <div className="col-span-4 md:col-span-2 ">
                        <InfoCard
                          className="aspect-w-16 rounded-lg overflow-hidden  aspect-h-10"
                          key2={"1y"}
                        >
                          <Img
                            className="  rounded-lg overflow-hidden"
                            layout="fill"
                            loading="lazy"
                            src="/landfill/plate_recog.gif"
                          />
                        </InfoCard>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {infoState === LandFillInfoState.Nemodar && (
                  <motion.div className=" w-full mx-auto grid md:grid-cols-2 grid-cols-1  gap-4">
                    <InfoCard
                      className="aspect-w-16 aspect-h-10 col-span-1"
                      key2="1x "
                    >
                      <ChartBox
                        title="نمودار میزان بارش در طی ماه های سال"
                        data={chartData}
                        areaDataKey="rain"
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard
                      key2={"2x"}
                      className="aspect-w-16 aspect-h-10 col-span-1"
                    >
                      <ChartBox
                        title="نمودار میزان تبخیر در طی ماه های سال"
                        data={chartData}
                        areaDataKey="eva"
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard
                      className="aspect-w-16 aspect-h-10 col-span-1"
                      key2={"1y"}
                    >
                      <ChartBox
                        title="نمودار میزان دما در طی ماه های سال"
                        data={chartData}
                        areaDataKey="temp"
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard
                      className="aspect-w-16 aspect-h-10 col-span-1"
                      key2={"2y"}
                    >
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

                    <InfoCard
                      className="aspect-w-9 aspect-h-2 md:col-span-2 col-span-1 rounded-lg overflow-hidden  "
                      key2={"1wy"}
                    >
                      <Img
                        className="aspect-w-9 aspect-h-2 w-full  rounded-lg overflow-hidden"
                        layout="fill"
                        loading="lazy"
                        src="/landfill/mohasebe.png"
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

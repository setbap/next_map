import { AnimatePresence, motion } from "framer-motion";
import Img from "next/image";
import Head from "next/head";
import Nav from "~/template/Nav";
import chartData from "~/../public/chart_data.json";
import ChartBox from "~/components/ChartBox";
import Footer from "~/template/Footer";
import ChartBoxAIO from "~/components/ChartBoxAIO";
import { FC, useState } from "react";
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

  return (
    <>
      <Head>
        <title>{" لندفیل آمل "}</title>
        <meta property="og:title" content={"لندفیل ها"} />
        <meta
          property="og:url"
          content={`https://www.nitenviro.com/landfill`}
        />
        <meta property="og:image" content={"/og/landfil.png"} />
        <meta
          property="og:description"
          content={"معرفی لندفیل آمل به همراه ویدیو و عکس "}
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
          <div className=" max-w-7xl   mx-auto w-full space-y-6 relative">
            <div className=" w-full mt-4 mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full md:w-1/2 mx-2 text-center rounded-xl">
                <div className="aspect-w-16 aspect-h-9  overflow-hidden bg-black  rounded-lg shadow-lg">
                  <img src="/landfill/amol/amol.png" className="object-fill" />
                </div>
              </div>
              <div className="w-full md:w-1/2 mx-2 text-center rounded-xl my-2 md:my-0 ">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                  <Img
                    src="/landfill/amol/amol.gif"
                    layout="fill"
                    className="object-fill"
                  />
                </div>
              </div>
            </div>

            <div className=" w-full mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full md:w-4/12 md:mb-0 mb-4   mx-2 text-center rounded-xl">
                <div className="aspect-w-8 aspect-h-9  rounded-lg shadow-lg">
                  <iframe
                    className=" rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14920.833134140797!2d52.36111!3d36.2182!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snl!4v1619826436410!5m2!1sen!2snl"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className=" bg-green-100 w-full  rounded-lg md:w-8/12   font-extrabold shadow-lg">
                <div className="aspect-w-16 aspect-h-9  rounded-lg shadow-lg">
                  <iframe
                    src="https://www.aparat.com/video/video/embed/videohash/kOHda/vt/frame"
                    title="محل دفن زباله های آمل"
                    className="rounded-lg"
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
                  return setInfoState(LandFillInfoState.Nemodar);
                }}
              >
                جزییات
              </button>
            </div>
            <div />
            <motion.div className="w-full mx-auto ">
              <AnimatePresence>
                {infoState === LandFillInfoState.Moarefi && (
                  <motion.div className=" w-full ">
                    <motion.div
                      className="my-4 bg-skin-base rounded-lg font-bold shadow-lg
                      text-justify prose-sm flex-col justify-center items-center   p-4 "
                    >
                      <h2>معرفی لندفیل آمل </h2>
                      <p className="">
                        شهرستان آمل با مساحت 3185 کیلومتر‌مربع و جمعیتی بالغ بر
                        450000 نفر دارای شش شهر آمل، رینه، گزنک، دابودشت، بابکان
                        و امام‌زاده عبدالله و پنج بخش مرکزی، لاریجان، دابودشت،
                        دشت سر و امامزاده عبدالله است. شهر آمل مرکز شهرستان با
                        ارتفاع 76 متر از سطح دریا دارای جمعیت بیش از 200000 نفر
                        است. فاصله آمل تا مرکز استان 70 کیلومتر بوده و بیش از 30
                        سال است که زباله شهرستان‌های آمل، نور، محمودآباد،
                        فریدونکنار و روستا‌های اطراف به محل دفن عمارت واقع در ۳۰
                        کیلومتری جنوب شهرستان آمل منتقل می کردد. در حال حاضر
                        میلیونها تن زباله در این محل تجمع یافته است که کوهی به
                        بلندای 30 زباله ایجاد نموده است. این کوه با آبگیری سد
                        منگل هراز در کنار دریاچه سد قرار گرفته و این به یکی از
                        بزرگترین مشکلات محیط زیستی این شهر تبدیل شده است.این
                        منطقه در زمینی به مساحت ۹ هکتار، روزانه میزبان ۴۱۰ تن
                        زباله از شهرها و روستاهای اطراف است.
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
                            className=""
                            src="https://www.aparat.com/video/video/embed/videohash/kOHda/vt/frame"
                            title="محل دفن زباله های آمل                            "
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
                            href="https://www.booked.net/weather/amol-w262797"
                          >
                            <img
                              className=" overflow-hidden  rounded-lg "
                              src="https://w.bookcdn.com/weather/picture/1_w262797_1_1_137AE9_240_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=2&domid=w209&anc_id=81720"
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
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                              <div key={"gallery" + i} className="p-2  ">
                                <div className="aspect-w-16 aspect-h-9">
                                  <img
                                    src={`/landfill/amol/gallery/${i}.jpg`}
                                    className=""
                                  />
                                </div>
                                <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle w-56">
                                  محل دفن زباله های آمل
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
                            className="  rounded-lg overflow-hidden"
                            src="https://www.aparat.com/video/video/embed/videohash/eBhQZ/vt/frame"
                            title="تایم لپس محل دفن زباله های آمل"
                            allowFullScreen
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
                        className="  rounded-lg overflow-hidden"
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

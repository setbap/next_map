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
        <title>{" لندفیل ساری "}</title>
        <meta property="og:title" content={"لندفیل ها"} />
        <meta
          property="og:url"
          content={`https://www.nitenviro.com/landfill`}
        />
        <meta property="og:image" content={"/og/landfil.png"} />
        <meta
          property="og:description"
          content={"معرفی لندفیل ساری به همراه ویدیو و عکس "}
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
                  <img src="/landfill/sari/sari.jpg" className="object-fill" />
                </div>
              </div>
              <div className="w-full md:w-1/2 mx-2 text-center rounded-xl my-2 md:my-0 ">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                  <Img
                    src="/landfill/sari/sari.gif"
                    layout="fill"
                    className="object-fill"
                  />
                </div>
              </div>
            </div>

            <div className="  w-full mx-auto text-center rounded-xl flex flex-wrap items-center justify-center">
              <CityButton cityName="sari" name="ساری" />
              <CityButton cityName="babol" name="بابل" />
              <CityButton cityName="amol" name="آمل" />
              <CityButton cityName="qaemshahr" name="قائمشهر" />
            </div>

            <div className=" w-full mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full md:w-4/12 md:mb-0 mb-4 mx-2 text-center rounded-xl">
                <div className="aspect-w-8 aspect-h-9  rounded-lg shadow-lg">
                  <iframe
                    className=" rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8711.262160066999!2d53.74685816081104!3d36.15139472243679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1619804055159!5m2!1sen!2s"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className=" bg-green-100 w-full  rounded-lg md:w-8/12   font-extrabold shadow-lg">
                <div className="aspect-w-16 aspect-h-9  rounded-lg shadow-lg">
                  <iframe
                    src="https://www.aparat.com/video/video/embed/videohash/peGtN/vt/frame"
                    title="محل دفن زباله های ساری"
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
                      <h2>معرفی لندفیل ساری </h2>
                      <p
                        className="
                      "
                      >
                        ساری مرکز استان و بزرگترین شهر مازندران می باشد. شهرستان
                        ساری از پنج شهر ساری، کیاسر، فریم، پایین هولار، فرح آباد
                        و شش بخش مرکزی، دودانگه، چهاردانگه، کلیجان رستاق، رودپی
                        و رودپی شمالی تشکیل شده‌است. طبق سرشماری سال ۹۵ شهرستان
                        ساری ۵۰۴ هزار و ۲۹۸ نفر جمعیت دارد. شهر ساری با جمعیت
                        ۳۰۹۸۲۰ نفر و وسعت ۳۰ کیلومتر مربع پرجمعیت‌ترین شهر این
                        استان است. ارتفاع ساری از سطح دریا ۴۰ متر است. از سال
                        1383زباله های شهرستان ساری که در حال حاضر میزان آن به
                        300 تن می رسد در منطقه پشت کوه چهاردانگه ساری دفن می
                        شود. دفن غیراصولی زباله و فاصله زیاد این محل از شهر ساری
                        مشکلات بسیار زیادی را برای اهالی منطقه و مسیرهای تردد
                        این ناحیه به وجود آورده است.
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
                            src="https://www.aparat.com/video/video/embed/videohash/peGtN/vt/frame"
                            title="محل دفن زباله های ساری                            "
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
                            href="https://www.booked.net/weather/kiasar-w262836"
                          >
                            <img
                              className=" overflow-hidden  rounded-lg "
                              src="https://w.bookcdn.com/weather/picture/1_w262836_1_1_137AE9_240_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=2&domid=w209&anc_id=81720"
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
                            autoFocus
                            interval={1500}
                            useKeyboardArrows={true}
                            showThumbs={false}
                          >
                            {[1, 2, 3, 4].map((i) => (
                              <div key={"gallery" + i} className="p-2  ">
                                <div className="aspect-w-16 aspect-h-9">
                                  <img
                                    src={`/landfill/sari/gallery/${i}.jpg`}
                                    className=""
                                  />
                                </div>
                                <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle w-56">
                                  محل دفن زباله های ساری
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
                          <Img
                            className="  rounded-lg overflow-hidden"
                            layout="fill"
                            loading="lazy"
                            src="/landfill/sari/timelaps_sari_kiasar.gif"
                          />
                        </InfoCard>
                      </div>
                      <div className="col-span-4 md:col-span-2 overflow-hidden">
                        <InfoCard
                          className="aspect-w-16 rounded-lg overflow-hidden  aspect-h-10"
                          key2={" 1y"}
                        >
                          <iframe
                            allowFullScreen
                            className=""
                            src="https://www.aparat.com/video/video/embed/videohash/XH68M/vt/frame"
                            title="محل دفن قدیمی زباله های شهر ساری                            "
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
                            src="/landfill/sari/timelaps_sari_tat.gif"
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

const CityButton = ({ name, cityName }: { name: string; cityName: string }) => {
  return (
    <Link scroll={true} href={pagesLinks.landfillsItem({ city: cityName })}>
      <a className="m-2">
        <button type="button" className="shadow-lg">
          <div>
            <div
              className=" w-16 h-12 bg-green-100 
            text-skin-primary flex flex-grow items-center justify-center
            shadow-lg  rounded-md"
            >
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

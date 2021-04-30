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
            <div className="  w-full aspect-w-3 aspect-h-2  text-center ">
              <img
                src="/mazandaran.png"
                // width={472}
                className="object-fill"
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

            <div className=" w-full mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full md:w-2/3 mx-2 text-center rounded-xl">
                <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg">
                  <iframe
                    className="   rounded-lg"
                    src="https://www.aparat.com/video/video/embed/videohash/zHq5a/vt/frame"
                    title="لندفیلهای مازندران"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="hidden md:block   me-2  md:w-1/3">
                <div className=" aspect-w-8 aspect-h-9 bg-black  rounded-lg shadow-lg"></div>
              </div>
            </div>
            <div className=" w-full mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full md:w-4/12  mx-2 text-center rounded-xl">
                <div className="aspect-w-8 aspect-h-9  rounded-lg shadow-lg">
                  <iframe
                    className=" rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.464658707638!2d52.693889550728535!3d36.30803777995501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDE4JzI4LjkiTiA1MsKwNDEnNDUuOSJF!5e1!3m2!1sen!2s!4v1617477248784!5m2!1sen!2s"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className=" bg-green-100 w-full  rounded-lg md:w-8/12   font-extrabold shadow-lg">
                <div className="aspect-w-16 aspect-h-9  rounded-lg shadow-lg">
                  <iframe
                    src="https://www.aparat.com/video/video/embed/videohash/BtvlS/vt/frame"
                    title="محل دفن زباله های بابل- سایت انجیلسی"
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
                    <div
                      className="my-4 bg-skin-base rounded-lg font-bold shadow-lg
                      text-justify prose-sm flex-col justify-center items-center   p-4 "
                    >
                      <h2>معرفی لندفیل انجیلسی</h2>
                      <p
                        className="
                      "
                      >
                        شهرستان بابل با جمعیت 250 هزار نفر در سطح شهر بابل و
                        افزون بر 500 هزار نفر در سطح شهرستان پرجمعیت ترین
                        شهرستان مازندران است. شهرستان بابل به مركزیت شهر بابل
                        دارای 7 شهر به نامهای بابل، امیركلا، زرگرشهر، گتاب،
                        خوشرودپی، گلوگاه ، مرزیكلا بوده كه هر یک دارای شهرداری
                        مستقل میباشند. از سال 1380 زباله های این شهرها و
                        روستاهای اطراف در سایت انجیلسی دپو و امحا می گردد. به
                        این ترتیب طی 20 سال گذشته قریب به 1.5 میلیون تن زباله
                        شهرستان بابل در مرکز آنجیلسی دپو و دفن شده است. مرکز
                        آنجیلسی به مساحت قریب به 29هکتار که در منطقه جنگلی در
                        فاصله 32 کیلومتری از محدوده شهر و فاصله 35 کیلومتر از
                        مرکز دانشگاه واقع شده است. ارتفاع این سایت از سطح دریای
                        آزاد در بالاترین نقطه 440 متر و در پایینترین نقطه، 350
                        متر است. جنس خاک منطقه از نوع رسی و شیب عمومی محل دفن در
                        حدود 30% است. مدیریت زباله به روش تولید کمپوست و تلبمار
                        سطحی و ترانشه ای انجام می گیرد. در حال حاضر، از مجموع
                        حدود 280 تن زبالهای كه به سایت انجیلسی وارد میشود، 185
                        تن مربوط به شهر بابل، 65 تن مربوط به شهرداریهای 6 گانه
                        شهرستان و 30 تن مربوط به روستاهای اطراف می باشد.
                      </p>
                    </div>

                    <motion.div className=" w-full mx-auto grid md:grid-cols-4 grid-cols-1 space-y-2 md:space-y-0  md:gap-4">
                      <div className="col-span-4 md:col-span-2 overflow-hidden">
                        <InfoCard
                          className="aspect-w-16 aspect-h-9"
                          key2={" 1y"}
                        >
                          <iframe
                            allowFullScreen
                            className=""
                            src="https://www.aparat.com/video/video/embed/videohash/WOKbB/vt/frame"
                            title="انجیلسی"
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
                            href="https://www.booked.net/weather/babol-w262798"
                          >
                            <img
                              className=" overflow-hidden  rounded-lg "
                              src="https://w.bookcdn.com/weather/picture/2_w262798_1_1_009fde_250_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=99031"
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
                            <div className="p-2  ">
                              <div className="aspect-w-16 aspect-h-9">
                                <img
                                  src="/images/landfill/anjilsi1.jpg"
                                  className=""
                                />
                              </div>
                              <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle w-56">
                                عکس های انجیلسی
                              </p>
                            </div>
                            <div className="p-2  ">
                              <div className="aspect-w-16 aspect-h-9">
                                <img
                                  src="/images/landfill/anjilsi2.jpg"
                                  className=""
                                />
                              </div>
                              <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle w-56">
                                عکس های انجیلسی
                              </p>
                            </div>
                            <div className="p-2  ">
                              <div className="aspect-w-16 aspect-h-9">
                                <img
                                  src="/images/landfill/anjilsi3.jpg"
                                  className=""
                                />
                              </div>
                              <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle w-56">
                                عکس های انجیلسی
                              </p>
                            </div>
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

                      <div className="col-span-3 ">
                        <InfoCard
                          key2={"1z"}
                          className="prose-sm flex-col justify-center items-center  p-4 text-start"
                        >
                          <h3 className="text-center">انجیلسی</h3>
                        </InfoCard>
                      </div>
                      <div className="w-full">
                        <div className="h-5" />
                        <InfoCard height={180} key2={"2z"}>
                          Image View
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

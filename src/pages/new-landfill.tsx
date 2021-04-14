import { motion } from "framer-motion";
import Head from "next/head";
import Nav from "~/template/Nav";
import chartData from "~/../public/chart_data.json";
import ChartBox from "~/components/ChartBox";
import Footer from "~/template/Footer";
const LandFill = () => {
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
          variants={thumbnailVariants}
          className="w-full bg-green-300    overflow-auto"
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className=" max-w-7xl  mx-auto w-full  pt-2 space-y-6 relative">
            <div className="  w-11/12 mx-auto text-center rounded-xl shadow-md">
              <p className=" font-semibold flex items-center justify-center text-xl h-full">
                <iframe
                  className=" w-full h-full rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642889.422987805!2d51.273040753513214!3d36.463152822196044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f84eec7feec6407%3A0x52436f1e076b159!2sMazandaran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1617477736015!5m2!1sen!2s"
                  loading="lazy"
                ></iframe>
              </p>
            </div>

            <div className=" h-36 sm:h-32 w-11/12 mx-auto text-center rounded-xl flex flex-wrap items-center justify-center">
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-100 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    بابل
                  </div>
                </div>
              </button>
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-100 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    ساری
                  </div>
                </div>
              </button>
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-100 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    بابل
                  </div>
                </div>
              </button>
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-100 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    بهشهر
                  </div>
                </div>
              </button>
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-100 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    بابل
                  </div>
                </div>
              </button>
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-100 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    تنکابن
                  </div>
                </div>
              </button>
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-100 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    بابل
                  </div>
                </div>
              </button>
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-100 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    بابلسر
                  </div>
                </div>
              </button>
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-600 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    بابل
                  </div>
                </div>
              </button>
              <button type="button" className="shadow-lg">
                <div>
                  <div className=" w-12 h-12 bg-green-100 flex flex-grow items-center justify-center shadow-lg me-1 rounded-md">
                    ساری
                  </div>
                </div>
              </button>
            </div>

            <div className=" w-11/12 mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row space-y-2 flex md:space-y-0 md:space-x-3">
              <div className="  h-64 rounded-lg md:w-5/12 w-full flex   font-bold shadow-lg">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.464658707638!2d52.693889550728535!3d36.30803777995501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDE4JzI4LjkiTiA1MsKwNDEnNDUuOSJF!5e1!3m2!1sen!2s!4v1617477248784!5m2!1sen!2s"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="flex-1 w-4" />

              <div className=" bg-green-100 w-full h-64 rounded-lg md:w-7/12   font-extrabold shadow-lg">
                {/* <iframe className=" h-full w-full rounded-lg" src="https://www.aparat.com/video/video/embed/videohash/zHopl/vt/frame" title="انجیلسی" ></iframe> */}
                <iframe
                  className=" h-full w-full rounded-lg"
                  src="https://www.aparat.com/video/video/embed/videohash/WOKbB/vt/frame"
                  title="انجیلسی"
                ></iframe>
              </div>
            </div>

            <div className="  w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1  gap-4">
              <div className="bg-skin-base w-full h-80 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                <ChartBox
                  title="نمودار میزان بازش در طی ماه های سال"
                  data={chartData}
                  areaDataKey="rain"
                  xAxisDataKey="month"
                />
              </div>

              <div className=" bg-skin-base w-full h-80 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                <ChartBox
                  title="نمودار میزان تبخیر در طی ماه های سال"
                  data={chartData}
                  areaDataKey="eva"
                  xAxisDataKey="month"
                />
              </div>

              <div className=" bg-skin-base w-full h-80 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                <ChartBox
                  title="نمودار میزان دما در طی ماه های سال"
                  data={chartData}
                  areaDataKey="temp"
                  xAxisDataKey="month"
                />
              </div>

              <div className="h-56 bg-green-100 w-full  rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                Live View
              </div>
              <div className=" bg-green-100 w-full h-56 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                Image View
              </div>
              <div className=" bg-green-100 w-full h-56 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                Image View
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

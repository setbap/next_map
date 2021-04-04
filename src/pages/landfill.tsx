import { motion } from "framer-motion";
import Head from "next/head";
import Nav from "~/template/Nav";

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
      <div className="flex flex-1 overflow-hidden ">
        <motion.div
          variants={thumbnailVariants}
          className="w-full   overflow-auto"
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className=" bg-green-300 w-full md:w-full h-heightParent py-2 space-y-6 relative">
            <div className=" bg-green-100 h-mapHeight w-11/12 mx-auto text-center rounded-xl shadow-md">
              <p className=" font-semibold flex items-center justify-center text-xl h-full">
                Map View
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

            <div className=" h-96 md:h-64 xl:h-80 w-11/12 mx-auto text-center rounded-xl flex-grow  space-y-2 md:flex md:space-y-0 md:space-x-3">
              <div className=" bg-green-100 w-full h-28 rounded-lg md:w-5/12 md:h-full flex flex-grow items-center justify-center font-bold shadow-lg">
                Map View
              </div>
              <div className="flex-1 w-4" />
              <div className=" bg-green-100 w-full h-64 rounded-lg md:w-7/12 md:h-full flex flex-grow items-center justify-center font-extrabold shadow-lg">
                Film View
              </div>
            </div>

            <div className=" h-99 md:h-99 w-11/12 mx-auto text-center rounded-xl flex-grow space-y-2 md:flex md:space-y-0 md:space-x-3">
              <div className=" w-full h-3/6 md:h-5/6 md:w-7/12">
                <div className=" bg-green-100 w-full h-full rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                  Chart View
                </div>
              </div>
              <div className="flex-1 w-4" />
              <div className=" w-full h-3/6 md:h-full md:w-5/12 space-y-1 md:space-y-3">
                <div className=" bg-green-100 w-full h-1/2 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                  Live View
                </div>
                <div className=" bg-green-100 w-full h-1/2 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                  Image View
                </div>
              </div>
            </div>

            <div className="h-8" />
            <div className=" bg-green-100 h-48 w-10/12 mx-auto rounded-xl shadow-lg md:h-56  md:mb-4   lg:w-11/12  xl:w-10/12">
              <div className=" h-2/6 ps-10 pt-5 font-bold">🧭 Sari, Iran</div>
              <div className=" h-2/6 ps-10 pt-5 font-bold">📞 011-3550</div>
              <div className=" h-2/6 ps-10 pt-5 font-bold">📊 Enviro.NIT</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LandFill;

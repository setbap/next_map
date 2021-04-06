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

            <div className=" h-mapHeight w-11/12 mx-auto text-center rounded-xl shadow-md">
              <p className=" font-semibold flex items-center justify-center text-xl h-full">
              <iframe className=" w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642889.422987805!2d51.273040753513214!3d36.463152822196044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f84eec7feec6407%3A0x52436f1e076b159!2sMazandaran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1617477736015!5m2!1sen!2s" loading="lazy"></iframe>
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

            <div className=" h-99 md:h-64 xl:h-80 w-11/12 mx-auto text-center rounded-xl flex-grow  space-y-2 md:flex md:space-y-0 md:space-x-3">

              <div className=" w-full h-48 rounded-lg md:w-5/12 md:h-full flex flex-grow items-center justify-center font-bold shadow-lg">
                <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.464658707638!2d52.693889550728535!3d36.30803777995501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDE4JzI4LjkiTiA1MsKwNDEnNDUuOSJF!5e1!3m2!1sen!2s!4v1617477248784!5m2!1sen!2s" loading="lazy"></iframe>
              </div>

              <div className="flex-1 w-4" />

              <div className=" bg-green-100 w-full h-56 rounded-lg md:w-7/12 md:h-full flex flex-grow items-center justify-center font-extrabold shadow-lg">
                <iframe className=" h-full w-full rounded-lg" src="https://www.aparat.com/video/video/embed/videohash/zHopl/vt/frame" title="انجیلسی" ></iframe>
              </div>
            </div>

            <div className=" h-99 md:h-99 w-11/12 mx-auto text-center rounded-xl flex-grow space-y-2 md:flex md:space-y-0 md:space-x-3">
              <div className=" w-full h-3/6 md:h-5/6 md:w-7/12">
                <div className=" bg-green-100 w-full h-full rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                  {/* Chart View */}

                  <img className=" h-full w-full" src="/images/velo1.jpg" />

                </div>
              </div>
              <div className="flex-1 w-4" />
              <div className=" w-full h-3/6 md:h-full md:w-5/12 space-y-1 md:space-y-3">
                <div className=" bg-green-100 w-full h-1/2 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                  Live View
                </div>
                <div className=" bg-green-100 w-full h-1/2 rounded-lg flex flex-grow items-center justify-center font-bold shadow-lg">
                  {/* Image View */}


                  <a href="#img1" className=" no-underline">
                    <img className="max-h-0 border-8 border-yellow-400" src="/images/thumbs/velo1_risultato.jpg" />
                  </a>

                  <div className=" fixed z-50 h-0 w-0 text-center top-0 left-0" id="img1">
                    <a href="#img3" className=" border-4 border-black-400 px-4 py-0.5 rounded-sm no-underline cursor-pointer align-middle absolute top-1/2 z-50 no-underline">prev</a>
                    <a href="#_" className=" absolute border-4 py-3 px-4 rounded-sm no-underline">X</a>
                    <img src="/images/velo1.jpg" />
                    <a href="#img2" className=" border-4 border-black-400 px-4 py-0.5 rounded-sm no-underline cursor-pointer align-middle absolute top-1/2 z-50 no-underline">next</a>
                  </div>


                  <a href="#img2" className=" no-underline">
                    <img className="max-h-0 border-8 border-yellow-400" src="/images/thumbs/velo2_risultato.jpg" />
                  </a>

                  <div className=" fixed z-50 h-0 w-0 text-center top-0 left-0" id="img2">
                    <a href="#img1" className=" border-4 border-black-400 px-4 py-0.5 rounded-sm no-underline cursor-pointer align-middle absolute top-1/2 z-50 no-underline">prev</a>
                    <a href="#_" className=" absolute border-4 py-3 px-4 rounded-sm no-underline">X</a>
                    <img src="/images/velo2.jpg" />
                    <a href="#img3" className=" border-4 border-black-400 px-4 py-0.5 rounded-sm no-underline cursor-pointer align-middle absolute top-1/2 z-50 no-underline">next</a>
                  </div>

                  <a href="#img3" className=" no-underline" >
                    <img className="max-h-0 border-8 border-yellow-400" src="/images/thumbs/velo3_risultato.jpg" />
                  </a>

                  <div className=" fixed z-50 h-0 w-0 text-center top-0 left-0" id="img3">
                    <a href="#img2" className=" border-4 border-black-400 px-4 py-0.5 rounded-sm no-underline cursor-pointer align-middle absolute top-1/2 z-50 no-underline">prev</a>
                    <a href="#_" className=" absolute border-4 py-3 px-4 rounded-sm no-underline">X</a>
                    <img src="/images/velo3.jpg" />
                    <a href="#img1" className=" border-4 border-black-400 px-4 py-0.5 rounded-sm no-underline cursor-pointer align-middle absolute top-1/2 z-50 no-underline">next</a>
                  </div>






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

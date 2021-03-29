import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import Nav from "~/template/Nav";
import Footer from "~/template/Footer";

interface Props {}

const Blog = ({}: Props) => {
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
    <Nav /> 
    <div className="flex flex-1 overflow-hidden ">
    
    <motion.div
      variants={thumbnailVariants}
      className="w-full h-full relative overflow-auto flex flex-col"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <section className="text-gray-600 body-font flex-1">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="text-2xl font-medium text-green-700  mb-1">
              سامانه مکان محور مدیریت محیط زیست
            </h1>
            <h1 className="text-sm font-medium text-green-700  mb-1">
              زیر مجموعه دانشگاه صنعتی نوشیروانی بابل و انجمن علمی GIS مازندران
            </h1>

            <h2 className="sm:text-2xl text-xl mt-8 font-medium text-gray-900">
              درباره سامانه
            </h2>
            <h3 className="  mt-2 text-center px-4 font-medium text-gray-900">
              سامانه جامع مکان محور محیط زیست با حمایت دانشگاه صنعتی نوشیروانی
              بابل و انجمن علمی GIS مازندران با اهداف زیر طراحی و پیاده سازی شده
              است:
            </h3>
          </div>
          <div className="flex text-center flex-wrap justify-center sm:-m-4">
            <div className="p-4 w-full md:w-5/12">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center justify-center mb-3">
                  <div className=" text-3xl p-3 text-center inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    <GiTestTubes />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-xl w-full">
                    ارزیابی جامع زیست محیطی سایت های دفن پسماند
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 w-full  md:w-5/12">
              <div className="flex items-center rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center justify-center mb-3">
                  <div className=" text-3xl p-3 text-center inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    <FaSearch />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-xl w-full">
                    مکانیابی احداث سایت دفن زباله جدید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
    </div>
    </>
  );
};

export default Blog;

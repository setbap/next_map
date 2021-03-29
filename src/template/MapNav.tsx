import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { CgUserlane } from "react-icons/cg";

// interface Props {}

const MapNav = () => {
  const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };

  const variants = {
    initial: { y: "-100%", opacity: 0 },
    enter: { y: "0%", opacity: 1, transition },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { ...transition, duration: 0.2 },
    },
  };
  return (
    <motion.nav
      exit="exit"
      initial="initial"
      animate="enter"
      variants={variants}
      className=" absolute top-0 z-20 w-full   bg-transparent justify-between text-white px-4 py-2 flex items-center min-w-0 h-14"
    >
      <h1 className="font-semibold text-lg"> </h1>

      {/* input */}
      <div className="relative">
        <div className="absolute cursor-pointer flex border border-transparent end-1 h-9 top-1  w-9">
          <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-transparent text-gray-600 text-lg h-full w-full">
            <AiOutlineSearch className="w-5 h-5" size={20} />
          </div>
        </div>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="جست و جو"
          className="text-sm sm:text-base relative w-full border-2 rounded-xl placeholder-gray-400 text-black focus:border-blue-500 focus:outline-none py-2 ps-2 pe-10"
        />
      </div>
      {/* input */}

      <button className=" border rounded-full p-1  text-center leading-none text-orange-400  bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
        <CgUserlane size={28} className="m-px" />
      </button>
    </motion.nav>
  );
};

export default MapNav;

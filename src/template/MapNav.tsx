import { motion } from "framer-motion";
import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgUserlane } from "react-icons/cg";
import ThemeContext from "~/context/themeProvider";

// interface Props {}

const MapNav = () => {
  const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
  const { toggleDark } = useContext(ThemeContext);

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
      className=" absolute top-0 z-20 w-full   bg-transparent justify-center text-skin-on-primary px-4 py-2 flex items-center min-w-0 h-14"
    >
      {/* input */}
      <div className="relative h-11">
        <div className="absolute cursor-pointer flex border border-transparent end-1 h-9 top-1  w-9">
          <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-transparent text-skin-muted text-lg h-full w-full">
            <AiOutlineSearch className="w-5 h-5" size={20} />
          </div>
        </div>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="جست و جو"
          className="text-sm bg-skin-card h-11  border-skin-muted  outline-none  text-skin-muted  px-1 leading-8 transition-colors duration-200 ease-in-out  sm:text-base relative w-full border-2 rounded-xl placeholder-gray-400  focus:border-skin-primary-relaxed focus:outline-none p-0 py-2 ps-2 sm:pe-10"
        />
      </div>
      {/* input */}
    </motion.nav>
  );
};

export default MapNav;

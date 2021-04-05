import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";
import { CgUserlane } from "react-icons/cg";
import ThemeContext from "~/context/themeProvider";
import { useContext } from "react";

// interface Props {}

const Nav = () => {
  const transition = { duration: 0.15, ease: [0.43, 0.13, 0.23, 0.96] };
  const { toggleDark } = useContext(ThemeContext);

  const variants = {
    initial: { y: "-100%", opacity: 0 },
    enter: { y: "0%", opacity: 1, transition },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { ...transition, duration: 0.1 },
    },
  };
  return (
    <motion.nav
      exit="exit"
      initial="initial"
      animate="enter"
      variants={variants}
      className=" bg-skin-card px-6 py-2 flex items-center min-w-0 h-14"
    >
      <IoMdArrowForward
        className="mx-5"
        onClick={() => {
          // history.goBack();
        }}
      />
      <h1 className="font-semibold text-skin-base text-lg">
        {" "}
        مدیریت محیط زیست
      </h1>
      <span className="flex-1"></span>

      <button
        onClick={() => toggleDark()}
        className=" border border-skin-muted rounded-full p-1  text-center leading-none text-skin-primary  bg-skin-card focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      >
        <CgUserlane size={28} className="m-px" />
      </button>
    </motion.nav>
  );
};

export default Nav;

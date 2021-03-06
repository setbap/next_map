import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";

const Nav = () => {
  const transition = { duration: 0.15, ease: [0.43, 0.13, 0.23, 0.96] };

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
      className=" relative bg-skin-card px-6 py-2 flex items-center min-w-0 h-14"
    >
      <div className="absolute  top-0 left-0 bottom-0 right-0 footer_filter footer_image "></div>

      <IoMdArrowForward
        className="mx-5"
        onClick={() => {
          // history.goBack();
        }}
      />
      {/* <img
        src="/title_image.png"
        className="scale-75 transform"
        width="40px"
        height="40px"
      /> */}
      <h1 className="font-semibold text-skin-base text-sm sm:text-lg">
        مدیریت محیط زیست
      </h1>
      <span className="flex-1"></span>

      <div className=" border border-skin-muted rounded-full p-1  text-center leading-none text-skin-primary  bg-skin-card focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></div>
    </motion.nav>
  );
};

export default Nav;

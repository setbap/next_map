// interface Props {}

import { motion } from "framer-motion";
import Footer from "@components/home/footer";
import GetStarted from "@components/home/get_started";
import HomeTwo from "@components/home/home";
// import MapNav from "~/template/MapNav";

const Home = () => {
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
    {/* <MapNav />  */}
    <div className="flex flex-1 overflow-hidden ">
    <motion.div
      variants={thumbnailVariants}
      className="w-full bg-fixed  flex-wrap flex flex-row overflow-auto"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <div className="w-full">
        <GetStarted />
      </div>
      <HomeTwo />
      <Footer />
    </motion.div>
    </div>
    </>
  );
};

export default Home;

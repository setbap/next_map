import "ol/ol.css";
import { motion } from "framer-motion";
import MapNav from "~/template/MapNav";
import dynamic from 'next/dynamic';

const MapWrapper = dynamic(() => import('~/components/map/mapWrapper'), {
  ssr: false
});

const App = () => {
  
  
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0, transition },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.85,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <>
    <MapNav /> 
    <div className="flex flex-1 overflow-hidden ">
    <motion.div
      variants={thumbnailVariants}
      className="flex relative flex-1"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <MapWrapper />
    </motion.div>
    </div>
    </>
  );
};
export default App;

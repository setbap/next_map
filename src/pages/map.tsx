import { useState } from "react";
import "ol/ol.css";
import Map from "@context/Map";
import { fromLonLat } from "ol/proj";
import { motion } from "framer-motion";
import Content from "@components/map/content";
import MapNav from "~/template/MapNav";

const App = () => {
  const [center] = useState([52.6685, 36.5372]);
  const [zoom] = useState(10);
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
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Content />
      </Map>
    </motion.div>
    </div>
    </>
  );
};
export default App;

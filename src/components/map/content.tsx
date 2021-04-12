import { useState } from "react";
// import "./App.css";
import "ol/ol.css";
import TileLayer from "../../layers/TileLayer";
import Layers from "../../layers/Layers";
// import { osm, vector } from "./Source";
import Controls from "../../controls/Controls";
import * as olSource from "ol/source";
// import { Vector } from "ol/source";

import ZoomControllsCustom from "../../controls/ZoomControlls.custom";
import DistanceControl from "../../controls/DistanceControl";
import { AnimatePresence, motion } from "framer-motion";
import Interaction from "../../interaction/Interaction";
import PointIntraction from "../../interaction/PointIntraction";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const bing = new olSource.BingMaps({
  key: "As5lCJ8HFDctXz0rIwzvRo8UEQMxXgJQICk4_1FdR6VWhCV9vxx27Mx4tCLFjxLn",
  imagerySet: "AerialWithLabelsOnDemand",
  // use maxZoom 19 to see stretched tiles instead of the BingMaps
  // "no photos at this zoom level" tiles
  // maxZoom: 19
});
const osm = new olSource.OSM({});

const Content = () => {
  const [layersData, setLayersData] = useState([
    {
      name: "شهرستان",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "shahrestan",
      visibility: false,
    },
    {
      name: "شهر",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "Shahr",
      visibility: false,
    },
    {
      name: "روستا",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "Roosta",
      visibility: false,
    },
    {
      name: "مراکز دفن زباله",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "landfills",
      visibility: true,
    },
    {
      name: "آثار طبیعی ملی",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "AsareTabieMelli",
      visibility: false,
    },
    {
      name: "منطقه حفاظت شده",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "MantaghHefazatshode",
      visibility: false,
    },
    {
      name: "پناهگاه حیات وحش",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "PanahgaheHayateVAHSH",
      visibility: false,
    },
    {
      name: "پارک ملی",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "ParkeMelli",
      visibility: false,
    },
    {
      name: "رودخانه",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "Roodkhane",
      visibility: false,
    },
    {
      name: "پهنه سیلابی",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "pahneSeylabi",
      visibility: false,
    },
    {
      name: "تالاب و دریاچه",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "TalabVaDaryache",
      visibility: false,
    },
    {
      name: "گسل",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "GosalFaalVaGheyrefaal",
      visibility: false,
    },
    {
      name: "شهرک صنعتی",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "Sanaye",
      visibility: true,
    },
    {
      name: "حریم شهر",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "harimShahr",
      visibility: false,
    },
    {
      name: "حریم روستا",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "harimRoosta",
      visibility: false,
    },
    {
      name: "حریم مناطق چهارگانه محیط زیستی",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "HarimManateghe4ganeMohitzist",
      visibility: false,
    },
    {
      name: "حریم رودخانه با محدودیت حداکثر",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "HarimRoodkhaneMahdoodiate1000M",
      visibility: true,
    },
    {
      name: "حریم دریا، تالاب و دریاچه با محدودیت حداکثر",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "HarimTalabDaryaDaryache1000m",
      visibility: false,
    },
    {
      name: "حریم گسل",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "HarimGOSAL",
      visibility: true,
    },
    {
      name:
        "مناطق بهینه جهت دفن زباله با محدودیت حداکثر و مساحت بیشتر از 10 هکتار",
      url: "http://217.219.165.22/geoserver/harim/wms",
      layer: "tabaghebandiMahdoodeMojazMahdoodiatHIGH",
      visibility: false,
    },
  ]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuPage, setMenuPage] = useState<"mapsPage" | "layerPage">(
    "layerPage"
  );
  const [mapType, setMapType] = useState<{ type: "osm" | "bing" }>({
    type: "osm",
  });

  return (
    <>
      <Layers>
        <Layers>
          {mapType.type === "osm" && <TileLayer source={osm} zIndex={0} />}
          {mapType.type === "bing" && <TileLayer source={bing} zIndex={0} />}
          {layersData.map((data, index) => {
            if (!data.visibility) {
              return;
            }
            return (
              <TileLayer
                source={
                  new olSource.TileWMS({
                    url: data.url,
                    params: {
                      LAYERS: `harim:${data.layer}`,
                      TILED: true,
                    },

                    serverType: "geoserver",
                    transition: 0,
                  })
                }
                zIndex={40 - index}
              />
            );
          })}

          {/* <VectorLayer
              source={
                new Vector({
                  features: new GeoJSON().readFeatures(geojsonObject2, {
                    featureProjection: get("EPSG:3857"),
                  }),
                })
              }
              style={styles.MultiPolygon}
            />
           */}
        </Layers>
        <Controls>
          {/* <FullScreenControl /> */}
          <DistanceControl />
          <ZoomControllsCustom />
          {/* <MousePositionControl /> */}
        </Controls>
        <Interaction>
          <PointIntraction />
        </Interaction>
      </Layers>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              borderRadius: 10,
              maxHeight: "75vh",
              clipPath: "circle(3.8% at 91.5% 96%)",
              scale: 1.3,
              y: 20,
              transformOrigin: "bottom right",
            }}
            animate={{
              clipPath: "circle(140.7% at 88% 90%)",
              y: 0,
              scale: 1,
            }}
            exit={{
              clipPath: "circle(3.8% at 91.5% 96%)",
              scale: 1.3,
              y: 30,
              transformOrigin: "bottom right",
            }}
            transition={{ type: "tween" }}
            style={{ direction: "rtl" }}
            className="absolute bottom-16 z-10 start-4 sm:start-8 overflow-hidden  w-56   sm:w-64 max-w-sm bg-skin-card start-4 border-2 border-skin-primary rounded-lg"
          >
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: menuPage === "mapsPage" ? "0%" : "50%" }}
                style={{ width: "200%" }}
                transition={{ type: "tween" }}
                className="flex flex-row flex-nowrap bg-skin-card"
              >
                <div className="w-1/2 flex flex-col h-20 p-3   ">
                  <motion.div
                    layout
                    onClick={() => {
                      setMapType({ type: "osm" });
                    }}
                    className={`relative flex-1 h-10 p-2  rounded-2xl text-center text-skin-base`}
                  >
                    osm
                    {mapType.type === "osm" && (
                      <motion.div
                        className="absolute top-0 h-10 left-0 w-full  border-2 rounded-2xl"
                        layoutId="outline"
                        animate={{
                          borderColor: "var(--color-primary)",
                        }}
                        initial={false}
                      />
                    )}
                  </motion.div>
                  <motion.div
                    layout
                    onClick={() => {
                      setMapType({ type: "bing" });
                    }}
                    className={`flex-1 p-2 m-1 rounded-2xl text-center relative  text-skin-base`}
                  >
                    bing
                    {mapType.type === "bing" && (
                      <motion.div
                        className="absolute top-0 left-0 w-full h-full border-2 rounded-2xl"
                        layoutId="outline"
                        animate={{
                          borderColor: "var(--color-primary)",
                        }}
                        initial={false}
                      />
                    )}
                  </motion.div>
                </div>
                <div
                  style={{
                    maxHeight: "50vh",
                  }}
                  className="w-1/2 flex-1 bg-skin-card overflow-auto "
                >
                  {layersData.map((data, index) => {
                    return (
                      <div>
                        <label className="flex cursor-pointer text-xs sm:text-sm text-skin-base justify-between m-4 items-center">
                          <span>{data.name}</span>
                          <input
                            type="checkbox"
                            checked={data.visibility}
                            onChange={(event) =>
                              setLayersData((layers) => {
                                const newLayers = [...layers];
                                newLayers[index].visibility =
                                  event.target.checked;
                                return newLayers;
                              })
                            }
                          />
                        </label>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
              <div className="flex text-skin-base flex-row text-center border-b border-skin-primary">
                <div
                  onClick={() => setMenuPage("layerPage")}
                  className={`${
                    menuPage === "layerPage" ? "bg-skin-card" : "bg-skin-base"
                  }  flex-1 p-2 transition-colors duration-300`}
                >
                  لایه ها
                </div>
                <div
                  onClick={() => {
                    setMenuPage("mapsPage");
                  }}
                  className={`${
                    menuPage === "mapsPage" ? "bg-skin-card" : "bg-skin-base"
                  }  flex-1 p-2 transition-colors duration-300`}
                >
                  نقشه ها
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        onClick={() => {
          setMenuOpen((v) => !v);
        }}
        className="p-2 w-10 rounded-full h-10 bg-skin-card z-10 text-center absolute start-4 sm:start-8 bottom-4  "
      >
        <AnimatePresence exitBeforeEnter>
          {menuOpen ? (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AiOutlineClose size={24} className="text-skin-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="30px"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GiHamburgerMenu size={24} className="text-skin-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
export default Content;

import { Dispatch, useState } from "react";
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
import { Popover } from "@headlessui/react";
import { MapLayerName, MapLayers } from "~/pages/map";
import { SetStateAction } from "react";
const bing = new olSource.BingMaps({
  key: "As5lCJ8HFDctXz0rIwzvRo8UEQMxXgJQICk4_1FdR6VWhCV9vxx27Mx4tCLFjxLn",
  imagerySet: "AerialWithLabelsOnDemand",
  // use maxZoom 19 to see stretched tiles instead of the BingMaps
  // "no photos at this zoom level" tiles
  // maxZoom: 19
});
const osm = new olSource.OSM({});

const baseMapUri = "http://geonitenviro.nit.ac.ir/geoserver/harim/wms";

const Content = ({ info }: { info: MapLayers[] }) => {
  const [layersData, setLayersData] = useState<MapLayers[]>(info);

  const [menuPage, setMenuPage] = useState<MapLayerName | "mapType">(
    MapLayerName.Omomi
  );
  const [mapType, setMapType] = useState<{ type: "osm" | "bing" }>({
    type: "osm",
  });

  const ChooseLayerFn = ({
    selectedLayer,
    layer,
  }: {
    layer: MapLayerName;
    selectedLayer: MapLayerName | "mapType";
  }) => (
    <div
      role="button"
      onClick={() => setMenuPage(layer)}
      className={`${
        layer === selectedLayer ? "bg-skin-card" : "bg-skin-base"
      }  w-16 p-2 transition-colors grid place-items-center duration-300 text-sm leading-relaxed align-middle h-16 text-center `}
    >
      <span className="align-middle">{layer}</span>
    </div>
  );
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
                    url: "http://geonitenviro.nit.ac.ir/geoserver/harim/wms",
                    params: {
                      LAYERS: `harim:${data.layerName}`,
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
      <Popover>
        {({ open }) => (
          <>
            <Popover.Panel className="">
              <AnimatePresence>
                {open && (
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
                    className="absolute bottom-16 z-10 start-4 sm:start-8 overflow-hidden  w-80   sm:w-80 max-w-sm bg-skin-card start-4 border-2 border-skin-primary rounded-lg"
                  >
                    <motion.div
                      className="overflow-hidden"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{
                          x:
                            menuPage === MapLayerName.MohitZist
                              ? "0%"
                              : menuPage === MapLayerName.Omomi
                              ? "20%"
                              : menuPage === MapLayerName.Mahdodiat
                              ? "40%"
                              : menuPage === MapLayerName.MakaniAbi
                              ? "60%"
                              : "80%",
                        }}
                        style={{ width: "500%" }}
                        transition={{ type: "tween" }}
                        className="flex flex-row flex-nowrap bg-skin-card"
                      >
                        {Object.keys(MapLayerName).map((layer, index) => (
                          <LayerList
                            layersData={layersData.filter((i) => {
                              return i.layerType === layer;
                            })}
                            setLayersData={setLayersData}
                          />
                        ))}

                        <div
                          className="w-1/5 flex flex-col pt-4 h-20 px-3   "
                          style={{ minHeight: "100px" }}
                        >
                          <motion.div
                            layout
                            onClick={() => {
                              setMapType({ type: "osm" });
                            }}
                            className={`relative w-full h-10 p-2  rounded-2xl text-center text-skin-base`}
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
                            className={`w-full p-2 m-1 rounded-2xl text-center relative  text-skin-base`}
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
                      </motion.div>
                      <div className="flex flex-1 align-middle sm:overflow-hidden  overflow-auto text-skin-base flex-row text-center border-b border-skin-primary">
                        {Object.keys(MapLayerName).map((i, index) => (
                          <ChooseLayerFn
                            key={index}
                            selectedLayer={menuPage}
                            layer={MapLayerName[i]}
                          />
                        ))}
                        <div
                          onClick={() => setMenuPage("mapType")}
                          role="button"
                          className={`${
                            menuPage === "mapType"
                              ? "bg-skin-card"
                              : "bg-skin-base"
                          }  w-16 p-2 text-sm  transition-colors duration-300 grid place-items-center`}
                        >
                          <span>لایه ها</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Popover.Panel>
            <Popover.Button
              as={motion.button}
              className="p-2 w-10 rounded-full h-10 bg-skin-card z-10 text-center absolute start-4 sm:start-8 bottom-4  "
            >
              <AnimatePresence exitBeforeEnter>
                {open ? (
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
            </Popover.Button>
          </>
        )}
      </Popover>
    </>
  );
};
export default Content;
function LayerList({
  layersData,
  setLayersData,
}: {
  layersData: MapLayers[];
  setLayersData: Dispatch<SetStateAction<MapLayers[]>>;
}) {
  return (
    <div
      style={{
        maxHeight: "50vh",
      }}
      className="w-1/5 flex-1 bg-skin-card overflow-auto "
    >
      {layersData.map((data) => {
        return (
          <div>
            <label className="flex cu rsor-pointer text-xs sm:text-sm text-skin-base justify-between m-4 items-center">
              <span>{data.name}</span>
              <input
                type="checkbox"
                className="rounded-lg text-skin-primary"
                checked={data.visibility}
                onChange={(event) =>
                  setLayersData((layers) => {
                    const newLayers = [];
                    layers.forEach((l) => {
                      if (l.id === data.id) {
                        l.visibility = event.target.checked;
                      }

                      newLayers.push(l);
                    });

                    return newLayers;
                  })
                }
              />
            </label>
          </div>
        );
      })}
    </div>
  );
}

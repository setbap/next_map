import { useRef, useState, useEffect, FC } from "react";
// import "./Map.css";
import MapContext from "./mapContext";
import * as ol from "ol";
const Map: FC<{ zoom: number; center: any }> = ({ children, zoom, center }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const overLayRef = useRef<any>(null);
  const [map, setMap] = useState<ol.Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null || popRef.current === null) {
      return () => {};
    }
    const overlay = new ol.Overlay({
      element: popRef.current,
      autoPan: true,
      autoPanAnimation: {
        duration: 50,
      },
    });
    overLayRef.current = overlay;

    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [overlay],
    };
    let mapObject = new ol.Map(options);
    // @ts-ignore
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, [popRef.current, mapRef.current]);
  // zoom change handler
  useEffect(() => {
    if (map === null) return;
    else map.getView().setZoom(zoom);
  }, [map, zoom]);

  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center);
    if (mapRef.current) {
      const sizeObserver = new ResizeObserver(() => {
        map.updateSize();
      });
      sizeObserver.observe(mapRef.current);
      return () => {
        sizeObserver.disconnect();
      };
    }
  }, [center, map]);
  return (
    <MapContext.Provider value={{ map }}>
      <div
        style={{ direction: "ltr" }}
        ref={mapRef}
        className="w-full h-full  relative"
      >
        {children}
        <div
          id="popup"
          style={{ direction: "rtl", minWidth: "280px" }}
          ref={popRef}
          className="ol-popup absolute bg-white p-3 shadow-md rounded-xl border-1 border-gray-600 bottom-3 -start-12"
        >
          <div
            id="popup-closer"
            className="ol-popup-closer no-underline absolute top-1 end-6"
            onClick={() => {
              overLayRef.current.setPosition(undefined);
              popRef.current?.blur();
              return false;
            }}
          ></div>
          <div id="popup-content"></div>
        </div>
      </div>
    </MapContext.Provider>
  );
};
export default Map;

import { FC, useContext, useEffect } from "react";
import { Zoom } from "ol/control";
import MapContext from "../context/mapContext";
const ZoomControl: FC = () => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};
    const zoomControl = new Zoom({ zoomInLabel: "hello" });
    map.addControl(zoomControl);
    return () => map.removeControl(zoomControl);
  }, [map]);
  return null;
};
export default ZoomControl;

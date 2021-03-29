import { FC, useContext, useEffect } from "react";
import { FullScreen } from "ol/control";
import MapContext from "../context/mapContext";
const FullScreenControl: FC = () => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};
    let fullScreenControl = new FullScreen({});
    map.addControl(fullScreenControl);

    return () => map.removeControl(fullScreenControl);
  }, [map]);
  return null;
};
export default FullScreenControl;

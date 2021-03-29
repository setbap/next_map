import { FC, useContext, useEffect } from "react";
import { MousePosition } from "ol/control";
import MapContext from "../context/mapContext";
const MousePositionControl: FC = () => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};
    const mousePosition = new MousePosition({});
    map.addControl(mousePosition);

    return () => map.removeControl(mousePosition);
  }, [map]);
  return null;
};
export default MousePositionControl;

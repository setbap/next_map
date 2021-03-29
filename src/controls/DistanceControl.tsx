import { FC, useContext, useEffect } from "react";
import { ScaleLine } from "ol/control";
import MapContext from "../context/mapContext";
const DistanceControl: FC = () => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};
    let distanceControl = new ScaleLine({ units: "metric" });
    map.addControl(distanceControl);

    return () => map.removeControl(distanceControl);
  }, [map]);
  return null;
};
export default DistanceControl;

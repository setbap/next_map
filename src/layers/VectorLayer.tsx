import { useContext, useEffect } from "react";
import MapContext from "../context/mapContext";
import OLVectorLayer from "ol/layer/Vector";
import { Options } from "ol/layer/BaseVector";
const VectorLayer = ({
  source,
  style,
  zIndex = 0,
}: {
  source: Options["source"];
  style: Options["style"];
  zIndex?: Options["zIndex"];
}) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let vectorLayer = new OLVectorLayer({
      source,
      style,
    });
    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map]);
  return null;
};
export default VectorLayer;

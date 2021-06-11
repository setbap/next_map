import { FC, useEffect, useRef } from "react";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Feature, View } from "ol";
import { fromLonLat } from "ol/proj";
import { Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import IconAnchorUnits from "ol/style/IconAnchorUnits";
const SimpleMap: FC<{
  lon: number;
  lat: number;
  className: string;
  zoom?: number;
}> = ({ lat, zoom, lon, className }) => {
  const uniMapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (uniMapRef.current === null) return;
    var iconFeature = new Feature({
      geometry: new Point(fromLonLat([lon, lat])),
      name: "Null Island",
    });

    var vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [iconFeature],
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.1, 45.3],

          src: "https://openlayers.org/en/latest/examples/data/icon.png",
          anchorXUnits: IconAnchorUnits.FRACTION,
          anchorYUnits: IconAnchorUnits.PIXELS,
        }),
      }),
    });

    const map = new Map({
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      target: uniMapRef.current,
      view: new View({
        center: fromLonLat([lon, lat]),
        zoom: zoom ?? 16,
      }),
    });
    return () => {
      map.dispose();
    };
  }, [uniMapRef]);
  return (
    <div className={className}>
      <div
        ref={uniMapRef}
        className=""
        style={{
          filter: " contrast(1.1)",
        }}
      ></div>
    </div>
  );
};

export default SimpleMap;

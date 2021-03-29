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
const UniMap: FC = () => {
  const uniMapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (uniMapRef.current === null) return;
    var iconFeature = new Feature({
      geometry: new Point(fromLonLat([52.680423, 36.561673])),
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
        center: fromLonLat([52.680423, 36.561673]),
        zoom: 16,
      }),
    });
    return () => {
      map.dispose();
    };
  }, [uniMapRef]);
  return (
    <div className="lg:w-1/2 flex-col   rounded-lg  sm:mx-3  flex items-end justify-start relative">
      <div
        ref={uniMapRef}
        className="inset-0"
        style={{
          filter: " contrast(1.1)",
          width: "100%",

          height: "400px",
        }}
      ></div>
      <div className="   bg-white relative flex flex-wrap -mt-8 py-6 mx-4 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className=" font-semibold text-gray-900 tracking-widest text-xs">
            آدرس:
          </h2>
          <p className="mt-1">
            مازندران- بابل- خیابان شریعتی- دانشگاه صنعتی نوشیروانی بابل- ساختمان
            عمران- طبقه اول- دفتر انجمن GIS ایران (شعبه مازندران)
          </p>
        </div>
        <div className="flex space-y-4 lg:flex-col sm:flex-row flex-col lg:w-1/2 w-full justify-start items-start px-6 mt-4 lg:mt-0">
          <div className="w-full ">
            <h2 className=" font-semibold text-gray-900 tracking-widest text-xs">
              ایمیل:
            </h2>
            <a className="text-yellow-500 leading-relaxed pt-1">
              shomalGIS@gmail.com
            </a>
          </div>
          <div className="w-full ">
            <h2 className=" font-semibold w-full text-gray-900 tracking-widest text-xs lg:mt-4">
              تلفن:
            </h2>
            <div className="leading-relaxed w-full pt-1 ">
              011-32332071 داخلی 1540
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniMap;

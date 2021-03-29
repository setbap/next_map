import { useContext, useEffect } from "react";
import MapContext from "../context/mapContext";
import WMSCapabilities from "ol/format/WMSCapabilities";

var parser = new WMSCapabilities();
// interface Props {}

function PointIntraction() {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};
    console.log("map");
    map.on("singleclick", function (evt) {
      const coordinate = evt.coordinate;
      fetch(
        `http://217.219.165.22/geoserver/Mazandaran/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&WIDTH=256&HEIGHT=256&CRS=EPSG%3A3857`,
        {
          referrer: "http://217.219.165.22/",
          body: null,
          method: "GET",
          mode: "no-cors",
          credentials: "omit",
        }
      )
        .then(function (response) {
          return response.text();
        })
        .then(function (text) {
          var result = parser.read(text);
          console.log(JSON.stringify(result, null, 2));
        });

      const x = map.getOverlays().getArray()[0];
      if (typeof x.getElement() !== "undefined") {
        x.getElement()!.querySelector("div#popup-content")!.innerHTML =
          "<h1>شما در این نقطه کلیک کردید</h1>";
        x.setPosition(coordinate);
      }
    });
  }, [map]);
  return <></>;
}

export default PointIntraction;

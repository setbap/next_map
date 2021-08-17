import Map from "@context/Map";
import { fromLonLat } from "ol/proj";
import Content from "@components/map/content";
import { useState } from "react";
import { MapLayers } from "~/pages/map";

const MapWrapper = ({ info }: { info: MapLayers[] }) => {
  const [center] = useState([52.6685, 36.5372]);
  const [zoom] = useState(10);
  return (
    <>
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Content info={info} />
      </Map>
    </>
  );
};

export default MapWrapper;

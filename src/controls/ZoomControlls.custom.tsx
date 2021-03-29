import { useContext } from "react";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import MapContext from "../context/mapContext";

// interface Props {}

const ZoomControlls = () => {
  const { map } = useContext(MapContext);

  const zoomOut = (zoomType: "zoomOut" | "zoomIn") => () => {
    console.log("zooom", map);
    if (map === null) return;
    var view = map.getView();
    console.log("zoom out");
    var zoom = view.getZoom();
    if (zoomType === "zoomIn") {
      view.setZoom(zoom! + 1);
    } else {
      view.setZoom(zoom! - 1);
    }
  };
  return (
    <div className="fixed end-4 bottom-12  flex flex-col bg-transparent z-40">
      <button
        className="p-2 text-center rounded-full border-2 border-gray-100 focus:outline-none focus:border-blue-400 text-orange-400 bg-white"
        onClick={zoomOut("zoomIn")}
      >
        <AiOutlineZoomIn size={26} />
      </button>
      <div className="h-2" />
      <button
        className="p-2 text-center rounded-full border-2 border-gray-100 focus:outline-none focus:border-blue-400 text-orange-400 bg-white"
        onClick={zoomOut("zoomOut")}
      >
        <AiOutlineZoomOut size={26} />
      </button>
    </div>
  );
};

export default ZoomControlls;

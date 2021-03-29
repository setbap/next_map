import { createContext } from "react";
import * as ol from "ol";
const MapContext = createContext<{ map: ol.Map | null }>({ map: null });
export default MapContext;

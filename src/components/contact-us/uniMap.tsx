import { FC } from "react";
import SimpleMap from "../SimpleMap";

const UniInfo = () => {
  return (
    <div className="   bg-skin-card relative flex flex-wrap -mt-8 py-6 mx-4 rounded shadow-md">
      <div className="lg:w-1/2 px-6">
        <h2 className=" font-semibold text-skin-base tracking-widest text-xs">
          آدرس:
        </h2>
        <p className="mt-1">
          مازندران- بابل- خیابان شریعتی- دانشگاه صنعتی نوشیروانی بابل- ساختمان
          عمران- طبقه اول- دفتر انجمن GIS ایران (شعبه مازندران)
        </p>
      </div>
      <div className="flex space-y-4 lg:flex-col sm:flex-row flex-col lg:w-1/2 w-full justify-start items-start px-6 mt-4 lg:mt-0">
        <div className="w-full ">
          <h2 className=" font-semibold text-skin-base tracking-wide text-xs">
            ایمیل:
          </h2>
          <a className="text-skin-primary leading-relaxed pt-1">
            NITEnviro@gmail.com
          </a>
        </div>
        <div className="w-full ">
          <h2 className=" font-semibold w-full text-skin-base tracking-wide text-xs lg:mt-4">
            تلفن:
          </h2>
          <div className="leading-relaxed w-full pt-1 ">
            011-32332071 داخلی 1540
          </div>
        </div>
      </div>
    </div>
  );
};
const UniMap: FC<{ lon: number; lat: number }> = ({ lat, lon }) => {
  return (
    <>
      <SimpleMap
        className={"w-full rounded-lg overflow-hidden aspect-w-16 aspect-h-9"}
        lat={lat}
        lon={lon}
      />
      <UniInfo />
    </>
  );
};

export default UniMap;

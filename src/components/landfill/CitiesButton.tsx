import Link from "next/link";
import { pagesLinks } from "~/utils/links";

const CitiesButtons = () => {
  return (
    <div className=" w-full mx-auto text-center rounded-xl flex flex-wrap items-center justify-center">
      <CityButton cityName="sari" name="ساری" />
      <CityButton cityName="babol" name="بابل" />
      <CityButton cityName="amol" name="آمل" />
      <CityButton cityName="qaemshahr" name="قائمشهر" />
      <CityButton cityName="freydoonkenar" name="فریدونکنار" />
      <CityButton cityName="babolsar" name="بابلسر" />
      <CityButton cityName="noshahr" name="نوشهر" />
    </div>
  );
};

const CityButton = ({ name, cityName }: { name: string; cityName: string }) => {
  return (
    <Link scroll={true} href={pagesLinks.landfillsItem({ city: cityName })}>
      <a className="m-2">
        <button type="button" className="shadow-lg">
          <div>
            <div
              className=" w-16 h-12 bg-green-100 
              text-skin-primary flex flex-grow items-center justify-center
              shadow-lg  rounded-md"
            >
              {name}
            </div>
          </div>
        </button>
      </a>
    </Link>
  );
};

export default CitiesButtons;

import Link from "next/link";
import { useRouter } from "next/router";
import { pagesLinks } from "~/utils/links";

const CitiesButtons = () => {
  const router = useRouter().route;
  return (
    <div className=" w-full mx-auto text-center rounded-xl flex flex-wrap items-center justify-center">
      <CityButton
        isActive={router === pagesLinks.landfillsItem({ city: "sari" })}
        cityName="sari"
        name="ساری"
      />
      <CityButton
        isActive={router === pagesLinks.landfillsItem({ city: "babol" })}
        cityName="babol"
        name="بابل"
      />
      <CityButton
        isActive={router === pagesLinks.landfillsItem({ city: "amol" })}
        cityName="amol"
        name="آمل"
      />
      <CityButton
        isActive={router === pagesLinks.landfillsItem({ city: "qaemshahr" })}
        cityName="qaemshahr"
        name="قائمشهر"
      />
      <CityButton
        isActive={
          router === pagesLinks.landfillsItem({ city: "freydoonkenar" })
        }
        cityName="freydoonkenar"
        name="فریدونکنار"
      />
      <CityButton
        isActive={router === pagesLinks.landfillsItem({ city: "babolsar" })}
        cityName="babolsar"
        name="بابلسر"
      />
      <CityButton
        isActive={router === pagesLinks.landfillsItem({ city: "noshahr" })}
        cityName="noshahr"
        name="نوشهر"
      />
      <CityButton
        isActive={router === pagesLinks.landfillsItem({ city: "noor" })}
        cityName="noor"
        name="نور"
      />
      <CityButton
        isActive={router === pagesLinks.landfillsItem({ city: "neka" })}
        cityName="neka"
        name="نکا"
      />
      <CityButton
        isActive={router === pagesLinks.landfillsItem({ city: "ramsar" })}
        cityName="ramsar"
        name="رامسر"
      />
    </div>
  );
};

const CityButton = ({
  name,
  cityName,
  isActive,
}: {
  name: string;
  cityName: string;
  isActive: boolean;
}) => {
  return (
    <Link scroll={true} href={pagesLinks.landfillsItem({ city: cityName })}>
      <a className="m-2">
        <button type="button" className="shadow-lg">
          <div>
            <div
              className={` w-16 h-12 ${isActive ? "bg-white" : "bg-green-100"}
              text-skin-primary flex flex-grow items-center hover:shadow-xl justify-center
              shadow-md  rounded-md`}
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

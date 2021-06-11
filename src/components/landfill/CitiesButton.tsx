import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { pagesLinks } from "~/utils/links";

const CitiesButtons: FC<{
  cities: {
    name: string;
    id: number;
  }[];
  currentId: string;
}> = ({ cities, currentId }) => {
  return (
    <div className=" w-full mx-auto text-center rounded-xl flex flex-wrap items-center justify-center">
      {cities.map((city) => (
        <CityButton
          key={city.id}
          isActive={currentId === city.id.toString()}
          cityName={city.id.toString()}
          name={city.name}
        />
      ))}
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

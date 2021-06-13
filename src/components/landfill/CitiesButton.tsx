import Link from "next/link";
import { FC } from "react";
import { pagesLinks } from "~/utils/links";

const CitiesButtons: FC<{
  cities: {
    Name: string;
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
          name={city.Name}
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
    <div className="m-2">
      <Link scroll={true} href={pagesLinks.landfillsItem({ city: cityName })}>
        <div
          className={`cursor-pointer  h-12 ${
            isActive ? "bg-white" : "bg-green-100"
          }
              text-skin-primary px-3 flex flex-grow items-center hover:shadow-xl justify-center
              shadow-md  rounded-md`}
        >
          {name}
        </div>
      </Link>
    </div>
  );
};

export default CitiesButtons;

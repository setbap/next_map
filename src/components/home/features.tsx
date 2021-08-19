import { BsApp } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { IoMapOutline, IoSearch } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";

export const Features = () => {
  return (
    <div className="flex flex-col  justify-center items-center text-center pb-16 pt-12 gap-8">
      <h2 className="px-8 text-3xl sm:text-4xl py-4 text-skin-primary bg-skin-card font-bold rounded-md shadow-lg">
        امکانات nitEnviro
      </h2>
      <div className="sm:flex flex-wrap justify-center items-center text-center  pt-2 gap-8">
        <FeatureItem
          icon={<FaDatabase size={32} />}
          title="بانک اطلاعاتی پسماند های استان مازندران"
        />
        <FeatureItem
          icon={<CgFileDocument size={32} />}
          title="ارائه آموزش، قوانین و مستندات علمی"
        />
        <FeatureItem
          icon={<BsApp size={32} />}
          title="اپلیکیشن های تفکیک از مبدا و جمع آوری زباله های خشک"
        />
        <FeatureItem
          icon={<IoMapOutline size={32} />}
          title="نقشه عوارض محیط زیستی و مدیریت پسماند استان"
        />
        <FeatureItem
          icon={<IoSearch size={32} />}
          title="جستجوگر نوع زباله من "
        />
      </div>
    </div>
  );
};

const FeatureItem = ({ title, icon }: { title: string; icon: JSX.Element }) => {
  return (
    <div className="w-full md:w-2/3 h-44 sm:w-4/5 lg:w-1/4 px-4 py-4 bg-skin-card mt-4  shadow-lg rounded-lg">
      <div className="flex-shrink-0 h-20 pt-2">
        <div className="flex items-center mx-auto justify-center h-14 w-14 rounded-lg bg-skin-primary text-skin-on-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl sm:text-xl text-skin-base text-muted font-semibold dark:text-white px-3 ">
        {title}
      </h3>
    </div>
  );
};

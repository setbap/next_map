import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { FC, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Nav from "~/template/Nav";

const Waste: NextPage<{ data: SmallItem; baseUrl: string }> = ({
  data,
  baseUrl,
}) => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const [showCloseBTN, setShowCloseBTN] = useState(false);
  const allCategories = {
    glass: "شیشه",
    paper: "کاغذ",
    metal: "فلز",
    dangerous: "خطرناک",
    compost: "کمپوست",
    plastic: "پلاستیک",
  };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0, transition },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.85,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <>
      <Head>
        <title>{"محاسبه زباله های  بازیافتی"}</title>
        <meta property="og:title" content={"محاسبه زباله های  بازیافتی"} />
        <meta property="og:url" content={`https://www.nitenviro.com/waste`} />
        <meta property="og:image" content={"/og/map.png"} />
        <meta
          property="og:description"
          content={"محاسبه زباله های  بازیافتی"}
        />
        <meta property="og:locale " content="fa_IR" />
      </Head>
      <Nav />
      <div className="flex flex-1 overflow-hidden ">
        <motion.div
          variants={thumbnailVariants}
          className={` relative
          overflow-auto
         w-full`}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="">
            <section className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto gap-x-4 gap-y-6">
              <button
                key={data.id}
                className="flex-col ring-transparent  group border-4 border-skin-base focus:border-black  hover:border-green-400  hover:shadow-lg hover:bg-skin-base bg-skin-card flex w-full  rounded-xl shadow-sm overflow-hidden "
              >
                <div className="w-full ">
                  <div className="aspect-w-16 aspect-h-9  rounded-lg">
                    <img
                      src={baseUrl + data.Image[0].url}
                      className="object-cover"
                      alt={data.Image[0].caption}
                    />
                  </div>
                </div>
                <div className=" p-2 w-full  h-32 flex flex-col  justify-evenly items-start  ">
                  <div className="flex justify-between items-center w-full">
                    <p className="px-2 font-bold z-10 md:text-3xl sm:text-xl text-md">
                      {data.Name}
                    </p>

                    <div className="">
                      <Chips
                        status={data.Recyclable ? "success" : "fail"}
                        name={
                          data.Recyclable ? "غیر قابل بازیافت" : " قابل بازیافت"
                        }
                      />
                    </div>
                  </div>
                  <div className="flex px-2  ">
                    <div>{allCategories[data.Category]}</div>
                  </div>
                </div>
              </button>
            </section>
            <p className="prose my-4 mx-auto">{data.Description}</p>
            <div className=" mx-auto prose my-4">
              {data.UseCases.split("\n").map((e) => (
                <Chips name={e} key={e} status="success" />
              ))}
            </div>
            <div className="mx-auto text-center">
              <div>رد پا اب {data.WaterFootprint}</div>
              <div>رد پا کربن {data.CarbonFootprint}</div>
              <div> {data.Dry ? "مرطوب" : "خشک"}</div>
            </div>
            {/* end waste list */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Waste;

const Chips: FC<{ name: string; status: "success" | "fail" }> = ({
  name,
  status,
}) => {
  return (
    <div
      className={`chips ${
        status === "success" ? "chips__success" : "chips__fail"
      }`}
    >
      {name}
    </div>
  );
};

export async function getStaticPaths() {
  const rawData = await fetch("http://217.219.165.22:5002/items");
  const data: SmallItem[] = await rawData.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps<{}, { id: string }> = async ({
  params: { id },
}) => {
  const rawData = await fetch(`http://217.219.165.22:5002/items/${id}`);
  const data: SmallItem[] = await rawData.json();
  return {
    props: {
      data,
      baseUrl: "http://217.219.165.22:5002",
    },
    revalidate: 10,
  };
};

export interface SmallItem {
  id: number;
  CarbonFootprint: number;
  WaterFootprint: number;
  UseCases: string;
  Description: string;
  Dry: boolean;
  Name: string;
  Recyclable: string;
  Category: string;
  Image?: ImageEntity[] | null;
}
export interface ImageEntity {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}
export interface Formats {
  small?: SmallOrThumbnailOrMedium | null;
  thumbnail: SmallOrThumbnailOrMedium1;
  medium?: SmallOrThumbnailOrMedium2 | null;
}
export interface SmallOrThumbnailOrMedium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
}
export interface SmallOrThumbnailOrMedium1 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
}
export interface SmallOrThumbnailOrMedium2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
}

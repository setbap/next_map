import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { FC } from "react";
import Nav from "~/template/Nav";

const Waste: NextPage<{ data: SmallItem; baseUrl: string }> = ({
  data,
  baseUrl,
}) => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const allInfo = {
    glass: "شیشه",
    paper: "کاغذ",
    metal: "فلز",
    dangerous: "خطرناک",
    compost: "کمپوست",
    plastic: "پلاستیک",
    Recyclable: "قابل بازیافت",
    Not_Recyclable: "غیر قابل بازیافت",
    Limited: "بازیافت محدود",
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
        <NextSeo
          title={`محاسبه زباله های  بازیافتی - ${data.Name}`}
          description="توضیحات در مورد نحوه بازیافت و یا امحا "
          openGraph={{
            url: "https://www.nitenviro.com/tutorial",
            title: `محاسبه زباله های  بازیافتی - ${data.Name}`,
            description: "توضیحات در مورد نحوه بازیافت و یا امحا ",
            images: [
              {
                url: "https://www.nitenviro.ir/og/article.png",
                width: 400,
                height: 400,
              },
            ],
            site_name: "NitEnviro",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
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
          <div className="container mx-auto">
            <section className="p-4 grid grid-cols-12   container mx-auto gap-x-4 gap-y-6">
              <div className="w-full   col-span-12 sm:col-span-6 md:col-span-4">
                <div className="aspect-w-12  aspect-h-9 shadow-lg  rounded-lg">
                  <img
                    src={baseUrl + data.Image[0].url}
                    className="object-contain overflow-hidden  rounded-lg  p-4 bg-skin-card "
                    alt={data.Image[0].caption}
                  />
                </div>
              </div>
              <div className="flex-col p-4 col-span-12 sm:col-span-6 md:col-span-8 bg-skin-card flex w-full  rounded-xl shadow-sm overflow-hidden ">
                <div className="  w-full  h-32 flex flex-col  justify-evenly items-start  ">
                  <div className="flex justify-between items-center w-full">
                    <p className="px-2 font-bold z-10 md:text-3xl sm:text-xl text-md">
                      {data.Name}
                    </p>
                    <div className="">
                      <Chips
                        status={
                          allInfo[data.Recyclable] === allInfo["Not_Recyclable"]
                            ? "fail"
                            : "success"
                        }
                        name={allInfo[data.Recyclable]}
                      />
                    </div>
                  </div>
                  <div className="flex px-2  ">
                    <div>دسته زباله : {allInfo[data.Category]}</div>
                  </div>
                </div>
                {data.UseCases?.split("\n").length && (
                  <div className="w-full  mx-auto  flex flex-wrap justify-start items-center">
                    <div className="px-1">موارد مصرف</div>
                    {data.UseCases.split("\n").map((e) => (
                      <Chips name={e} key={e} status="success" />
                    ))}
                  </div>
                )}
                <div className="pt-5 grid gap-3 sm:grid-cols-2 grid-cols-1">
                  <div className="text-lg px-2 py-1 border-skin-base rounded-xl border">
                    رد پا آب
                    <span className="font-bold"> : {data.WaterFootprint}</span>
                    <span className="font-normal text-base">
                      {" "}
                      {data.WaterFootprintUnit ?? ""}
                    </span>
                  </div>
                  <div className="text-lg px-2 py-1 border-skin-base rounded-xl border">
                    رد پا کربن
                    <span className="font-bold"> : {data.CarbonFootprint}</span>
                    <span className="font-normal text-base">
                      {" "}
                      {data.CarbonFootprintUnit ?? ""}
                    </span>
                  </div>
                </div>
                <p className=" py-6 text-lg w-full">{data.Description}</p>
              </div>
            </section>
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
  const rawData = await fetch("https://geonitenviro.nit.ac.ir/api/items");
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
  const rawData = await fetch(`https://geonitenviro.nit.ac.ir/api/items/${id}`);
  const data: SmallItem[] = await rawData.json();
  return {
    props: {
      data,
      baseUrl: "https://geonitenviro.nit.ac.ir/api",
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
  CarbonFootprintUnit?: string;
  WaterFootprintUnit?: string;
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

import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Nav from "~/template/Nav";

export const getStaticProps: GetStaticProps = async () => {
  const rawData = await fetch("https://geonitenviro.nit.ac.ir/api/items");
  const data: SmallItem[] = await rawData.json();
  return {
    props: {
      data,
      baseUrl: "https://geonitenviro.nit.ac.ir/api",
    },
    revalidate: 10,
  };
};

const Waste: NextPage<{ data: SmallItem[]; baseUrl: string }> = ({
  data,
  baseUrl,
}) => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const [inputText, setInputText] = useState("");

  const [showCloseBTN, setShowCloseBTN] = useState(false);
  const allCategories = {
    glass: "شیشه",
    paper: "کاغذ",
    metal: "فلز",
    dangerous: "خطرناک",
    compost: "کمپوست",
    plastic: "پلاستیک",
  };

  const [selectedCategory, setSelectedCategory] = useState({
    glass: true,
    paper: true,
    metal: true,
    dangerous: true,
    compost: true,
    plastic: true,
  });
  const toggleCategory = (
    categoryName: keyof typeof selectedCategory,
    selectedCategories: typeof selectedCategory
  ) => {
    const categories = { ...selectedCategories };
    categories[categoryName] = !categories[categoryName];
    setSelectedCategory(categories);
  };

  useEffect(() => {
    if (inputText.length > 0 && !showCloseBTN) {
      setShowCloseBTN(true);
    } else if (inputText.length == 0 && showCloseBTN) {
      setShowCloseBTN(false);
    }
  }, [inputText]);

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
            <div
              style={{
                backgroundImage:
                  "url(https://cdn.zmescience.com/wp-content/uploads/2020/07/recycling.jpg)",

                position: "relative",
                backgroundSize: "cover",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(155 ,11, 71,0.4)",
                  backgroundBlendMode: "color-dodge",
                  backdropFilter: "blur(15px)",
                }}
                className="absolute inset-0"
              ></div>
              <div className="relative w-full flex pt-4">
                <h3 className="rounded-md bg-skin-base text-center mx-auto text-2xl p-3">
                  سامانه تشخیص زباله های بازیافتی
                </h3>
              </div>

              {/* search bar */}
              <header className="flex  items-center h-16 mt-5 w-full ">
                <div className="h-12  mx-auto container max-w-xl relative">
                  {/*  */}

                  <div className="absolute cursor-pointer flex border border-transparent start-1 h-9 top-1  w-9">
                    <div className="flex pointer-events-none items-center justify-center rounded-tl rounded-bl z-10 bg-transparent text-skin-muted text-lg h-full w-full">
                      <AiOutlineSearch className="w-5 h-5" size={20} />
                    </div>
                  </div>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="دنبال چه زباله ای میگردی؟"
                    className=" focus:border-0 text-sm bg-skin-card h-11  border-skin-muted  outline-none  text-skin-muted  px-1 leading-8 transition-colors duration-200 ease-in-out  sm:text-base relative w-full border-2 rounded-xl placeholder-gray-400  focus:border-skin-primary-relaxed focus:outline-none p-0 py-2 ps-10 pe-9"
                  />

                  {showCloseBTN && (
                    <div className="absolute cursor-pointer flex border border-transparent end-1 h-9 top-1  w-9">
                      <button
                        onClick={() => setInputText("")}
                        className="flex rounded-full items-center justify-center rounded-tl rounded-bl z-10 bg-transparent text-skin-muted text-lg h-full w-full"
                      >
                        <AiOutlineClose className="w-5 h-5" size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </header>
              {/* end search bar */}
              {/*  categories header */}
              <div className="w-full flex relative sm:mt-12 mt-8">
                <h3 className="bg-skin-card rounded-lg text-center mx-auto text-2xl py-2 px-4">
                  دسته بندی پسماند
                </h3>
              </div>
              {/*  end categories header */}
              {/* categories */}
              <section className="overflow-auto w-full">
                <div className="w-min  mx-auto  select-none flex-nowrap  flex flex-row justify-center items-center ">
                  {Object.keys(selectedCategory).map((e) => (
                    <button
                      key={e}
                      // @ts-ignore
                      onClick={() => toggleCategory(e, selectedCategory)}
                      style={{
                        background:
                          "url(http://sepahanahan.ir/wp-content/uploads/2019/12/choudan-3.jpg)",
                        backgroundSize: "cover",
                      }}
                      className={`${
                        selectedCategory[e] ? "ring-4 ring-offset-2" : ""
                      } md:w-24  ring-red-400  sm:w-20 w-16 md:h-24 sm:h-20 h-16 focus:outline-none  group  rounded-full hover:shadow-lg  relative  overflow-hidden flex flex-col items-center justify-center mx-3 my-4 md:my-6`}
                    >
                      <div
                        style={{ backdropFilter: "blur(1px)" }}
                        className="absolute inset-0 bg-black bg-opacity-40  group-hover:bg-opacity-60 transition-colors duration-200"
                      />
                      <p className=" text-white z-10 md:text-xl sm:text-md text-sm">
                        {allCategories[e]}
                      </p>
                    </button>
                  ))}
                </div>
              </section>
              {/* end categories */}
            </div>
            {/* list header */}
            <div className="w-full ">
              <h3 className=" container mx-auto  text-2xl py-6">
                لیست زباله ها
              </h3>
            </div>
            {/* end list header */}
            {/* waste list */}
            <section className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto gap-x-4 gap-y-6">
              {data
                .filter(
                  (item) =>
                    item.Name.includes(inputText) &&
                    selectedCategory[item.Category ?? ""]
                )
                .map((item) => (
                  <Link href={`/recycle/${item.id}`} key={item.id}>
                    <button className="flex-col ring-transparent  group border-4 border-skin-base focus:border-black  hover:border-green-400  hover:shadow-lg hover:bg-skin-base bg-skin-card flex w-full  rounded-xl shadow-sm overflow-hidden ">
                      <div className="w-full ">
                        <div className="aspect-w-16 aspect-h-9  rounded-lg">
                          <img
                            src={baseUrl + item.Image[0].url}
                            className="object-cover"
                            alt={item.Image[0].caption}
                          />
                        </div>
                      </div>
                      <div className=" p-2 w-full  h-32 flex flex-col  justify-evenly items-start  ">
                        <div className="flex justify-between items-center w-full">
                          <p className="px-2 font-bold z-10 md:text-3xl sm:text-xl text-md">
                            {item.Name}
                          </p>

                          <div className="">
                            <Chips
                              status={item.Recyclable ? "success" : "fail"}
                              name={
                                item.Recyclable
                                  ? "غیر قابل بازیافت"
                                  : " قابل بازیافت"
                              }
                            />
                          </div>
                        </div>
                        <div className="flex px-2  ">
                          <div>{allCategories[item.Category]}</div>
                        </div>
                      </div>
                    </button>
                  </Link>
                ))}
            </section>
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

export interface SmallItem {
  id: number;
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

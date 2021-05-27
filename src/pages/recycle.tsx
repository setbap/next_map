import { motion } from "framer-motion";
import Head from "next/head";
import { FC, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Nav from "~/template/Nav";
const x =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.".split(
    " "
  );

const y = ["شیشه", "کاغذ", "فلز", "خطرناک", "قابل کمپوست", "پلاستیک"];
const m1 = () => y[Math.ceil(Math.random() * y.length)];

const m11 = () => {
  if (Math.random() > 0.5) {
    return true;
  }
  return false;
};
const data = x.map((e) => {
  return {
    name: e,
    recyclable: m11(),
    category: m1(),
  };
});

const Waste = () => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const [inputText, setInputText] = useState("");
  const [showCloseBTN, setShowCloseBTN] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([
    "شیشه",
    "کاغذ",
    "فلز",
    "خطرناک",
    "قابل کمپوست",
    "پلاستیک",
  ]);
  const toggleCategory = (category: string, selectedCategory: string[]) => {
    const categoryIndex = selectedCategory.indexOf(category);
    if (categoryIndex === -1) {
      setSelectedCategory([...selectedCategory, category]);
    } else {
      setSelectedCategory(
        selectedCategory
          .slice(0, categoryIndex)
          .concat(selectedCategory.slice(categoryIndex + 1))
      );
    }
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
                  <small className="text-sm ">
                    {"  "}(برای حذف یا فعال سازی بر روی هر کدام کلیک کنید){" "}
                    {"  "}
                  </small>
                </h3>
              </div>
              {/*  end categories header */}
              {/* categories */}
              <section className="overflow-auto w-full">
                <div className="w-min  mx-auto  select-none flex-nowrap  flex flex-row justify-center items-center ">
                  {[
                    "شیشه",
                    "کاغذ",
                    "فلز",
                    "خطرناک",
                    "قابل کمپوست",
                    "پلاستیک",
                  ].map((e) => (
                    <button
                      onClick={() => toggleCategory(e, selectedCategory)}
                      style={{
                        background:
                          "url(http://sepahanahan.ir/wp-content/uploads/2019/12/choudan-3.jpg)",
                        backgroundSize: "cover",
                      }}
                      className={`${
                        selectedCategory.includes(e)
                          ? "ring-4 ring-offset-2"
                          : ""
                      } md:w-24  ring-red-400  sm:w-20 w-16 md:h-24 sm:h-20 h-16 focus:outline-none  group  rounded-full hover:shadow-lg  relative  overflow-hidden flex flex-col items-center justify-center mx-3 my-4 md:my-6`}
                    >
                      <div
                        style={{ backdropFilter: "blur(1px)" }}
                        className="absolute inset-0 bg-black bg-opacity-40  group-hover:bg-opacity-60 transition-colors duration-200"
                      />
                      <p className=" text-white z-10 md:text-xl sm:text-md text-sm">
                        {e}
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
                    item.name.includes(inputText) &&
                    selectedCategory.includes(item.category)
                )
                .map((item, i) => (
                  <button
                    key={i}
                    className="flex-col ring-transparent  group border-4 border-skin-base focus:border-black  hover:border-green-400  hover:shadow-lg hover:bg-skin-base bg-skin-card flex w-full  rounded-xl shadow-sm overflow-hidden "
                  >
                    <div className="w-full ">
                      <div className="aspect-w-16 aspect-h-9  rounded-lg">
                        <img
                          src="https://shokrino.ir/wp-content/uploads/2020/12/mahsul6.jpg"
                          className="object-cover"
                          alt="xasfasf"
                        />
                      </div>
                    </div>
                    <div className=" p-2 w-full  h-32 flex flex-col  justify-evenly items-start  ">
                      <div className="flex justify-between items-center w-full">
                        <p className="px-2 font-bold z-10 md:text-3xl sm:text-xl text-md">
                          {item.name}
                        </p>

                        <div className="">
                          <Chips
                            status={item.recyclable ? "success" : "fail"}
                            name={
                              item.recyclable
                                ? "غیر قابل بازیافت"
                                : " قابل بازیافت"
                            }
                          />
                        </div>
                      </div>
                      <div className="flex px-2  ">
                        <div>{item.category}</div>
                      </div>
                    </div>
                  </button>
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

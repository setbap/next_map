import { IoTrashBinOutline } from "react-icons/io5";
// interface Props {}

export const Features = () => {
  return (
    <div
      // style={{
      //   backgroundImage: "url('/tree.svg')",
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      //   backgroundPosition: "center",
      // }}
      className="flex flex-col  justify-center items-center text-center pb-16 pt-12 gap-8"
    >
      <h2 className="px-8 text-3xl sm:text-4xl py-4 text-orange-500 bg-white font-bold rounded-md shadow-lg">
        امکانات nitEnviro
      </h2>
      <div className="sm:flex flex-wrap justify-center items-center text-center  pt-2 gap-8">
        <div className="w-full md:w-2/3 sm:w-4/5 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
              <IoTrashBinOutline size={32} />
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-oramge-700 font-semibold dark:text-white pt-6 ">
            آموزش
          </h3>
          <p className="text-md  text-gray-500 dark:text-gray-300 pb-4 pt-2">
            با استفاده از nitEnviro دانش خود را در زمینه زباله و تفکیک آن افزایش
            دهید
          </p>
        </div>
        <div className="w-full md:w-2/3 sm:w-4/5 lg:w-1/4 px-4 py-4  mt-6  bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
              <IoTrashBinOutline size={32} />
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-oramge-700 font-semibold dark:text-white pt-6">
            درمان درد های نا موجود در جامعه
          </h3>
          <p className="text-md text-gray-500 dark:text-gray-300 pb-4 pt-2">
            با استفاده از nitEnviro انواع درد های نا موجود در جامعه مانند فقر و
            اختلاف طبقاتی و غیره درمان خواهد شد.
          </p>
        </div>
        <div className="w-full md:w-2/3 sm:w-4/5 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
              <IoTrashBinOutline size={32} />
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-oramge-700 font-semibold dark:text-white pt-6">
            کاهش آلودگی
          </h3>
          <p className="text-md  text-gray-500 dark:text-gray-300 pb-4 pt-2">
            ما با تفکیک درست زباله و به دنبال آن بازیافت صحیح آن در جهت کاهش
            آلودگی قدم بر میداریم
          </p>
        </div>
      </div>
    </div>
  );
};

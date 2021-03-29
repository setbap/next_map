const Profit = () => {
  return (
    <section className="py-12 w-full">
      <div className="container rounded-md  mx-auto p-4  sm:p-8 bg-white dark:bg-gray-800">
        <div className="flex flex-wrap -px-8">
          <div className="w-full lg:w-1/2 px-8">
            <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
              <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                مزایای استفاده از nitEnviro
              </h2>
              <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                در ادامه با برخی از مزایای عضویت در nitEnviro و استفاده از آن
                اشنا خواهیم شد
              </p>
              <div className="w-1/2 md:w-1/3">
                <button
                  type="button"
                  onClick={() =>
                    alert("نه اینجا از این خیر ها نیست . دیدن بیشتر نداریم")
                  }
                  className="py-2 px-4  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  دیدن ادامه
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-8">
            <ul className="space-y-12">
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-orange-50 text-orange-600">
                    1
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold dark:text-white">
                    مسئولیت پذیری
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-loose">
                    خیلی آدم مسئولیت پذیری خواهید شد.
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-orange-50 text-orange-600">
                    2
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold dark:text-white">
                    افزایش درآمد
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-loose">
                    nitEnviro_to_the_moon#
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-orange-50 text-orange-600">
                    3
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold dark:text-white">
                    بهبود در زندگی
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-loose">
                    به محز استفاده از nitEnviro معجزه آن را حس خواهید کرد. درد
                    زانو های کمتر شده و ادم سرحال تری خواهید شد.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profit;

const Profit = () => {
  return (
    <section className="py-12 w-full">
      <div className="container rounded-md  mx-auto p-4  sm:p-8 bg-skin-card">
        <div className="flex flex-wrap -px-8">
          <div className="w-full lg:w-1/2 px-8">
            <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
              <h2 className="mb-4 text-3xl lg:text-4xl text-skin-primary font-bold font-heading">
                مزایای استفاده از nitEnviro
              </h2>
              <p className="mb-8 leading-loose  text-skin-muted ">
                در ادامه با برخی از مزایای عضویت در nitEnviro و استفاده از آن
                آشنا خواهیم شد
              </p>
              <div className="w-1/2 md:w-1/3">
                <button
                  type="button"
                  onClick={() =>
                    alert("نه اینجا از این خیر ها نیست . دیدن بیشتر نداریم")
                  }
                  className="py-2 px-4  bg-skin-primary hover:bg-skin-card-hover focus:ring-orange-500 focus:ring-offset-orange-200 text-skin-on-primary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-skin-light-primary text-skin-primary">
                    1
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-skin-base  text-xl font-semibold ">
                    مسئولیت پذیری
                  </h3>
                  <p className="text-skin-muted leading-loose">
                    خیلی آدم مسئولیت پذیری خواهید شد.
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-skin-light-primary text-skin-primary">
                    2
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-skin-base text-xl font-semibold ">
                    {" "}
                    افزایش درآمد
                  </h3>
                  <p className="text-skin-muted leading-loose">
                    nitEnviro_to_the_moon#
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-skin-light-primary text-skin-primary">
                    3
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-skin-base text-xl font-semibold ">
                    بهبود در زندگی
                  </h3>
                  <p className="text-skin-muted leading-loose">
                    به محض استفاده از nitEnviro معجزه آن را حس خواهید کرد. درد
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

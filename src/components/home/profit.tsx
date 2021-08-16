const Profit = () => {
  return (
    <section className="py-12 w-full">
      <div className="container rounded-md  mx-auto p-4  sm:p-8 bg-skin-card">
        <div className=" flex items-center flex-col flex-wrap -px-8">
          <div className="py-4 w-full text-center  px-8">
            <h2 className="mb-4 text-3xl lg:text-4xl text-skin-primary font-bold font-heading">
              مزایای استفاده از nitEnviro
            </h2>
          </div>
          <ul className="flex items-start  flex-row flex-wrap ">
            <ProfitItem index={1} title={"آموزش و فرهنگ‌سازی در میان مردم "} />
            <ProfitItem
              index={2}
              title={"کاهش میزان پسماند تولیدی و آلودگی‌های ناشی از آن "}
            />
            <ProfitItem
              index={3}
              title={"رفع مشکلات زیست‌محیطی حوزه مدیریت پسماند "}
            />
            <ProfitItem
              index={4}
              title={"ایجاد بانک اطلاعاتی زباله تولیدی از مبدا تا امحا"}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

const ProfitItem = ({ index, title }: { index: number; title: string }) => {
  return (
    <li className="flex w-full sm:w-1/2 mt-2 mb-4">
      <div className="px-4">
        <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-skin-light-primary text-skin-primary">
          {index}
        </span>
      </div>
      <div className="px-4">
        <h3 className="my-4 text-skin-base  text-xl font-semibold ">{title}</h3>
      </div>
    </li>
  );
};

export default Profit;

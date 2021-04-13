import React, { FC } from "react";

const TimrLine = () => {
  return (
    <div className="container mx-auto my-12">
      <div className=" bg-skin-card dark:bg-gray-800 py-8 rounded-lg shadow">
        <h3 className="font-bold text-3xl py-8 text-center">
          {" "}
          مسیر زمانی پروژه
        </h3>
        <div className="timeline relative mx-auto max-w-7xl md:p-4 ps-4">
          <TimeLineItemTime> 1399 مهر</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineContent
            title="ثبت نام"
            subTitle="شروع کار برای بنیاد"
          />{" "}
          <TimeLineItemTime> 1399 آبان</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineContent
            title="ثبت نام"
            subTitle="شروع کار برای بنیاد"
          />{" "}
          <TimeLineItemTime> 1399 آذر</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineContent
            title="ثبت نام"
            subTitle="شروع کار برای بنیاد"
          />{" "}
          <TimeLineItemTime> 1399 دی</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineItemTime> 1399 بهمن</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />{" "}
          <TimeLineContent title="شکل گیری ایده اولیه" />{" "}
          <TimeLineContent title="شکل گیری ایده اولیه" />{" "}
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineContent title="ثبت نام" subTitle="شروع کار برای بنیاد" />
          <TimeLineItemTime> 1399 اسفند</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />{" "}
          <TimeLineContent title="شکل گیری ایده اولیه" />{" "}
          <TimeLineContent title="شکل گیری ایده اولیه" />{" "}
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineContent title="ثبت نام" subTitle="شروع کار برای بنیاد" />
          <TimeLineItemTime> 1400 فروردین</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />{" "}
          <TimeLineContent title="شکل گیری ایده اولیه" />{" "}
          <TimeLineContent title="شکل گیری ایده اولیه" />{" "}
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineContent title="ثبت نام" subTitle="شروع کار برای بنیاد" />
        </div>
      </div>
    </div>
  );
};

export default TimrLine;

const TimeLineItemTime: FC = ({ children }) => {
  return (
    <h2
      style={{ width: "fit-content" }}
      className="timeline__item timeline__item--year 
      p-4 border-4 border-skin-secondary relative mt-4 ms-auto mb-4 me-12 
      clear-both rounded-lg  md:m-4 md:rounded-lg text-end 
       md:mx-auto text-skin-base text-xl bg-skin-card leading-4  "
    >
      {children}
    </h2>
  );
};

const TimeLineContent: FC<{ title: string; subTitle?: string }> = ({
  title,
  subTitle,
}) => {
  return (
    <div
      className="
    timeline__item
    p-4 border-4 border-skin-primary relative mt-4 ms-auto mb-4 me-12 
    clear-both rounded-lg  md:m-4 md:rounded-lg text-skin-base
    "
    >
      <h3 className="text-xl font-bold">{title}</h3>
      {!!subTitle && <p className="text-base leading-8">{subTitle}</p>}
    </div>
  );
};

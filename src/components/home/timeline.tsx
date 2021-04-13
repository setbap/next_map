import React, { FC } from "react";

const TimrLine = () => {
  return (
    <div className="container mx-auto my-12">
      <div className=" bg-skin-card dark:bg-gray-800 rounded-lg shadow">
        <div className="timeline">
          <TimeLineItemTime> 8 مهر</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineContent
            title="ثبت نام"
            subTitle="شروع کار برای بنیاد"
          />{" "}
          <TimeLineItemTime> 8 مهر</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineContent
            title="ثبت نام"
            subTitle="شروع کار برای بنیاد"
          />{" "}
          <TimeLineItemTime> 8 مهر</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineContent
            title="ثبت نام"
            subTitle="شروع کار برای بنیاد"
          />{" "}
          <TimeLineItemTime>1399 8 مهر</TimeLineItemTime>
          <TimeLineContent title="شکل گیری ایده اولیه" />
          <TimeLineItemTime> 8 مهر</TimeLineItemTime>
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
        border-skin-primary text-end 
       md:mx-auto  ms-10 text-xl bg-skin-card leading-4 md:p-4 p-2 rounded-lg "
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
    <div className="timeline__item">
      <h3 className="text-xl font-bold">{title}</h3>
      {!!subTitle && <p className="text-base leading-8">{subTitle}</p>}
    </div>
  );
};

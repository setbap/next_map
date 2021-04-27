import { FC } from "react";

const TimrLine = () => {
  return (
    <div className="container mx-auto my-12">
      <div className=" bg-skin-card dark:bg-gray-800 py-8 rounded-lg shadow">
        <h3 className="font-bold text-3xl py-8 text-center">
          مسیر زمانی پروژه
        </h3>
        <div className="timeline relative mx-auto max-w-7xl md:p-4 ps-4">
          <TimeLineItemTime> 1399</TimeLineItemTime>
          <TimeLineContent
            title="9 آذر"
            subTitle="هسته پژوهشی ما با حمایت مستفیم بنیاد ملی نخبگان استان مازندران تحت عنوان طرح شهید احمدی روشن متولد شد."
          />
          <TimeLineContent
            title="6 آذر"
            subTitle="هسته پژوهشی NITEnviro در آذر ماه سال 1399 با حضور اعضای این هسته در دانشگاه صنعتی نوشیروانی بابل شکل گرفت و اعضای خود را شناخت. این اولین جلسه حضوری هسته برای آشنایی اعضا با یکدیگر و آشنایی با اهداف گروه بود."
          />{" "}
          <TimeLineContent
            title="27 آذر "
            subTitle="اولین اقدام بعد از گروه بندی و انتخاب استاد مشاور برای هر گروه، برگزاری کارگاه آموزشی مجازی برای آشنایی اعضای هسته با داستان مدیریت زباله و محل‌های دفن در استان بود."
          />
          <TimeLineContent
            title="25 دی "
            subTitle="بعد از جلسه های هفتگی و ارائه برنامه های کابردی هر گروه، اولین قدم در توسعه سامانه Enviro در 25 دی ماه  1399 برداشته شد"
          />
          <TimeLineContent
            title="14 اسفند "
            subTitle="انتخاب نام برای هسته و ثبت دامنه برای سایت. این روز را باید روز تولد سایت NITEnviro دانست. برای ارائه دسترسی مناسب به سایت سرور و امکانات فنی مناسب تدارک دیده شد. "
          />
          <TimeLineItemTime> 1400</TimeLineItemTime>
          <TimeLineContent
            title="19 فروردین"
            subTitle="با تولدت و ثبت دامنه سایت بارگزاری اطلاعات مرتبط با لندفیلهای استان انجام گرفت. هسته NITEnviro در جستجوی اطلاعات به هر مقاله، گزارش و محل دفن زباله ای در استان سر زده تا داده های مستند را پیدا و در بانک اطلاعاتی خود ثبت و ارائه کند"
          />
          <TimeLineContent
            title="1 اردیبهشت"
            subTitle="آغاز توسعه اپلیکیشن Enviro توسط هسته پژوهشی برای تفکیک زباله از مبدا در استان مازندارن "
          />
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
      p-4 border-2 md:p-4 md:border-4 border-skin-secondary relative mt-4 ms-auto mb-4 me-12 
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
    p-4 md:border-4 border-2 border-skin-light-primary relative mt-4 ms-auto mb-4 me-12 
    clear-both rounded-lg  md:m-4 md:rounded-lg text-skin-base
    "
    >
      <h3 className="text-xl font-bold">{title}</h3>
      {!!subTitle && <p className="text-base leading-8">{subTitle}</p>}
    </div>
  );
};

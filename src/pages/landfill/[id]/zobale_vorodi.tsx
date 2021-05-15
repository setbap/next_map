import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Footer from "~/template/Footer";
import Nav from "~/template/Nav";
import moment from "moment-jalaali";
import DatePicker from "react-datepicker2";

import Select from "react-select";

interface Props {}

const ZobaleVorodi = (props: Props) => {
  const [selectedDayRange, setSelectedDayRange] = useState(moment());
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <>
      <Head>
        <title>{"محاسبه زباله ورودی توسط زانندگان"}</title>
        <meta
          property="og:title"
          content={"محاسبه زباله ورودی توسط زانندگان"}
        />
        <meta
          property="og:url"
          content={`https://www.nitenviro.com/babol/shirabe`}
        />
        <meta property="og:image" content={"/og/article.png"} />
        <meta
          property="og:description"
          content={"صفحه محاسبه زباله ورودی توسط زانندگان  "}
        />
        <meta property="og:locale " content="fa_IR" />
      </Head>
      <Nav />
      <div className="flex flex-1 bg-skin-card ">
        <motion.div
          layout
          className="w-full  overflow-auto"
          variants={thumbnailVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="min-h-full w-full">
            <div>
              <h1 className="md:text-4xl sm:text-2xl text-xl mx-auto text-center py-4 ">
                محاسبه میزان زباله ورودی توسط رانندگان
              </h1>
              <p className="text-sm text-center font-light">
                ابتدا بازه زمانی شهر مورد نظر و سپس بازه زمانی را انتخاب کنید
              </p>
            </div>

            <div>
              <Select
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            </div>
            <DatePicker
              onChange={(value) => setSelectedDayRange(value)}
              timePicker={false}
              max={moment()}
              isGregorian={false}
              className="bg-skin-base"
              calendarClass="bg-skin-base"
              datePickerClass="bg-skin-base"
              calendarStyles={{
                border: "2px solid black ",
                backgroundColor: "black",
              }}
              value={selectedDayRange}
              inputReadOnly
            />
          </div>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default ZobaleVorodi;

import Head from "next/head";
import React, { FC, useLayoutEffect, useRef, useState } from "react";
import Nav from "~/template/Nav";
import { AnimatePresence, motion } from "framer-motion";
import { FieldError, useForm, UseFormRegisterReturn } from "react-hook-form";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";
import ChartBox from "~/components/ChartBox";
import { InfoCard } from "~/components/landfill/InfoCard";
import Footer from "~/template/Footer";

const shirabeData = [
  { month: "شهریور", rain_monthly: 111.95, tabkhir: 97.35, dayPerMonth: 31 },
  { month: "مرداد", rain_monthly: 66.6, tabkhir: 122.2, dayPerMonth: 31 },
  { month: "تیر", rain_monthly: 71.05, tabkhir: 106.3, dayPerMonth: 31 },
  { month: "خرداد", rain_monthly: 60.1, tabkhir: 107.35, dayPerMonth: 31 },
  { month: "اردیبهشت", rain_monthly: 71.55, tabkhir: 85.6, dayPerMonth: 31 },
  { month: "فروردین", rain_monthly: 72.9, tabkhir: 67.75, dayPerMonth: 31 },
  { month: "اسفند", rain_monthly: 93.3, tabkhir: 42.95, dayPerMonth: 29 },
  { month: "بهمن", rain_monthly: 86.6, tabkhir: 29.4, dayPerMonth: 30 },
  { month: "دی", rain_monthly: 73.75, tabkhir: 28.85, dayPerMonth: 30 },
  { month: "آذر", rain_monthly: 97.35, tabkhir: 34.4, dayPerMonth: 30 },
  { month: "آبان", rain_monthly: 98.75, tabkhir: 47.05, dayPerMonth: 30 },
  { month: "مهر", rain_monthly: 137.85, tabkhir: 68, dayPerMonth: 30 },
];
interface FormType {
  masahat_faal: number;
  masahat_poshide: number;
  masahate_hozche: number;
  mizane_zobale_vorodi: number;
  chegali_zobale: number;
  darsad_rotobat_zobale: number;
  zarib_tabdil_tabkhir: number;
  zarfiat_jazb: number;
  darsad_nofoz_baresh: number;
  darsad_tabdil_rotobat: number;
}

const Shirabe = () => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const minValueMassege = (min: number) => ({
    value: min,
    message: `ورودی باید از ${min} بزرگ تر باشد `,
  });

  const maxValueMassege = (max: number) => ({
    value: max,
    message: `ورودی باید از ${max} کوچک تر باشد. `,
  });

  const requiredValueMassege = () => ({
    value: true,
    message: `پر کردن داده فوق الزامی می باشد.`,
  });

  const calculate = ({
    data,
    fromData,
  }: {
    data: typeof shirabeData;
    fromData: FormType;
  }) =>
    data.map((month) => {
      const rainToMetter = month.rain_monthly / 1000;
      const tabkhirToMetter = month.tabkhir / 1000;
      const tabkhirVaqeiAE = tabkhirToMetter * fromData.zarib_tabdil_tabkhir;
      const bareshMoaser = Math.abs(rainToMetter - tabkhirVaqeiAE);
      const shirabeNofozMasahateBaz = bareshMoaser * fromData.masahat_faal;

      const shirabeNashiAzBareshHozche =
        (rainToMetter - tabkhirVaqeiAE) * fromData.masahate_hozche;

      const shirabeNashiAzNofozBeHozche =
        bareshMoaser *
        fromData.masahat_poshide *
        (fromData.darsad_nofoz_baresh / 100);

      const shirabeNashiAzLajan = 0;
      const shirabeAvalieNashiAzZobaleAvaleMah =
        (fromData.darsad_rotobat_zobale / 100) *
        fromData.mizane_zobale_vorodi *
        (fromData.darsad_tabdil_rotobat / 100) *
        month.dayPerMonth;

      const shirabeMajmo =
        shirabeNofozMasahateBaz +
        shirabeNashiAzBareshHozche +
        shirabeNashiAzLajan +
        shirabeNashiAzNofozBeHozche +
        shirabeAvalieNashiAzZobaleAvaleMah;

      const zarfiat_jazb =
        (fromData.zarfiat_jazb / fromData.chegali_zobale) *
        fromData.mizane_zobale_vorodi *
        month.dayPerMonth;

      const abeKhorojiYaGasTolidi =
        tabkhirVaqeiAE * (fromData.masahat_faal + fromData.masahate_hozche);

      const shirabeNashiAzBaresh =
        shirabeMajmo > zarfiat_jazb + abeKhorojiYaGasTolidi
          ? shirabeMajmo - (zarfiat_jazb + abeKhorojiYaGasTolidi)
          : 0;

      const shirabeTolidiDarMah = parseFloat(
        (shirabeAvalieNashiAzZobaleAvaleMah + shirabeNashiAzBaresh).toFixed(2)
      );
      const shirabeTolidiDarRoz = parseFloat(
        (shirabeTolidiDarMah / month.dayPerMonth).toFixed(2)
      );
      return { shirabeTolidiDarMah, shirabeTolidiDarRoz, month: month.month };
    });
  // const [formState, setFormState] = useState<FormType>({
  //   masahat_faal: 30000,
  //   masahat_poshide: 10000,
  //   masahate_hozche: 200,
  //   mizane_zobale_vorodi: 160,
  //   chegali_zobale: 0.5,
  //   darsad_nofoz_baresh: 55,
  //   darsad_rotobat_zobale: 55,
  //   darsad_tabdil_rotobat: 60,
  //   zarfiat_jazb: 0.01,
  //   zarib_tabdil_tabkhir: 0.75,
  // });
  const [calculatedShirabeData, setCalculatedShirabeData] =
    useState<
      {
        shirabeTolidiDarMah: number;
        shirabeTolidiDarRoz: number;
        month: string;
      }[]
    >(null);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = (formData: FormType) => {
    if (formData) {
      // setFormState(formData);
      setCalculatedShirabeData(
        calculate({ data: shirabeData, fromData: formData })
      );
    }
  };

  const handleReset = () => {
    reset();
    clearErrors();
    setCalculatedShirabeData(null);
  };
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
        <title>{"صفحه مقالات"}</title>
        <meta property="og:title" content={"مقالات"} />
        <meta property="og:url" content={`https://www.nitenviro.com/blog`} />
        <meta property="og:image" content={"/og/article.png"} />
        <meta property="og:description" content={"صفحه ی مقالات "} />
        <meta property="og:locale " content="fa_IR" />
      </Head>
      <Nav />
      <div className="flex flex-1 overflow-hidden bg-skin-card ">
        <motion.div
          layout
          className="w-full overflow-auto"
          variants={thumbnailVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="mx-auto max-w-4xl  ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 sm:grid-cols-2 grid-cols-1 items-center justify-between flex-wrap "
              onReset={handleReset}
            >
              <FormItem
                defaultValue={30000}
                label="مساحت فعال و باز محل دفن (Ac)"
                placeholder="مثلا 30000"
                tooltip={<div className="w-32">مساحت به متر مربع </div>}
                error={errors["masahat_faal"]}
                register={register("masahat_faal", {
                  valueAsNumber: true,
                  required: requiredValueMassege(),
                  min: minValueMassege(0),
                })}
              />
              <FormItem
                defaultValue={10000}
                label="مساحت پوشیده شده محل دفن (AL)"
                placeholder="مثلا 1000"
                error={errors["masahat_poshide"]}
                tooltip={<div className="w-32">مساحت به متر مربع </div>}
                register={register("masahat_poshide", {
                  valueAsNumber: true,
                  required: requiredValueMassege(),
                  min: minValueMassege(1),
                })}
              />
              <FormItem
                defaultValue={200}
                label="مساحت حوضچه شیرابه (Ap)"
                placeholder="مثلا 200"
                tooltip={<div className="w-32">مساحت به متر مربع </div>}
                error={errors["masahate_hozche"]}
                register={register("masahate_hozche", {
                  valueAsNumber: true,
                  required: requiredValueMassege(),
                  min: minValueMassege(1),
                })}
              />
              <FormItem
                label="میزان زباله روزانه ورودی "
                placeholder="مثلا 160"
                defaultValue={160}
                tooltip={<div className="w-32">بر حسب تن بر روز</div>}
                error={errors["mizane_zobale_vorodi"]}
                register={register("mizane_zobale_vorodi", {
                  valueAsNumber: true,
                  min: minValueMassege(1),
                  required: requiredValueMassege(),
                })}
              />
              <FormItem
                label="چگالی زباله ورودی"
                placeholder="مثلا 0.5"
                defaultValue={0.5}
                error={errors["chegali_zobale"]}
                tooltip={
                  <div className="w-40">
                    درحالت متراکم500-800 <br /> غیرمتراکم200-300
                  </div>
                }
                register={register("chegali_zobale", {
                  valueAsNumber: true,
                  required: requiredValueMassege(),
                  min: minValueMassege(0),
                })}
              />
              <FormItem
                label="درصد رطوبت زباله %"
                placeholder="مثلا 55"
                defaultValue={55}
                tooltip={<div className="w-32">بین 15-55 درصد</div>}
                error={errors["darsad_rotobat_zobale"]}
                register={register("darsad_rotobat_zobale", {
                  valueAsNumber: true,
                  min: minValueMassege(15),
                  required: requiredValueMassege(),
                  max: maxValueMassege(55),
                })}
              />
              <FormItem
                label="ضریب تبدیل تبخیر پتانسیل  به تبخیر واقعی "
                placeholder="مثلا 0.75"
                defaultValue={0.75}
                tooltip={
                  <div className="w-48 aspect-w-2 aspect-h-5">
                    <img src="/landfill/tabel2.png" />
                  </div>
                }
                error={errors["zarib_tabdil_tabkhir"]}
                register={register("zarib_tabdil_tabkhir", {
                  valueAsNumber: true,
                  required: requiredValueMassege(),
                  min: minValueMassege(0),
                  max: maxValueMassege(1),
                })}
              />
              <FormItem
                label="ظرفیت جذب شیرابه توسط زباله"
                placeholder="مثلا 0.01"
                defaultValue={0.01}
                tooltip={
                  <div className="w-32">
                    0.025for1 Ton/m3 and0.1for 0.65Ton/m3
                  </div>
                }
                error={errors["zarfiat_jazb"]}
                register={register("zarfiat_jazb", {
                  valueAsNumber: true,
                  min: minValueMassege(0),
                  required: requiredValueMassege(),
                  max: maxValueMassege(1),
                })}
              />
              <FormItem
                label="درصد نفود بارش به زباله درقسمت پوشیده  %"
                placeholder="مثلا 55"
                defaultValue={55}
                tooltip={
                  <div className="w-48 aspect-w-5 aspect-h-13">
                    <img src="/landfill/tabel1.png" />
                  </div>
                }
                error={errors["darsad_nofoz_baresh"]}
                register={register("darsad_nofoz_baresh", {
                  valueAsNumber: true,
                  required: requiredValueMassege(),
                  min: minValueMassege(0),
                  max: maxValueMassege(100),
                })}
              />
              <FormItem
                label="درصد تبدیل رطوبت زباله به شیرابه  %"
                placeholder="مثلا 60"
                defaultValue={60}
                tooltip={<div className="w-32">بین 60-80 درصد</div>}
                error={errors["darsad_tabdil_rotobat"]}
                register={register("darsad_tabdil_rotobat", {
                  valueAsNumber: true,
                  min: minValueMassege(60),
                  required: requiredValueMassege(),
                  max: maxValueMassege(80),
                })}
              />
              <input
                type="submit"
                disabled={Object.keys(errors).length > 0}
                value="محاسبه شیرابه"
                className={`w-40 h-12 ms-auto my-4 rounded-lg shadow-lg  ${
                  Object.keys(errors).length > 0
                    ? "bg-skin-muted"
                    : "bg-skin-secondary"
                }`}
              />

              <input
                type="reset"
                value="پاک کردن همه"
                disabled={Object.keys(errors).length > 0}
                className={`bg-red-400 w-40 h-12 me-auto my-4 rounded-lg shadow-lg `}
              />
            </form>
          </div>
          <div className="mx-auto max-w-6xl md:p-8 px-2 py-8  ">
            <AnimatePresence>
              {calculatedShirabeData != null && (
                <ShirabeChart calculatedShirabeData={calculatedShirabeData} />
              )}
            </AnimatePresence>
          </div>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

const ShirabeChart: FC<{
  calculatedShirabeData: {
    shirabeTolidiDarMah: number;
    shirabeTolidiDarRoz: number;
    month: string;
  }[];
}> = ({ calculatedShirabeData }) => {
  const ref = useRef<HTMLDivElement>();
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    return () => {};
  }, [ref.current]);

  return (
    <motion.div
      ref={ref}
      className=" w-full mx-auto grid md:grid-cols-2 grid-cols-1  gap-4"
    >
      <div className="rounded-lg md:col-span-2 col-span-1 overflow-x-auto cursor-pointer ">
        <table className="w-full  text-sm shadow-xl">
          <thead>
            <tr className="border-b bg-green-400 text-white border-green-400">
              <th colSpan={13} className="text-center py-3 px-2">
                {
                  "میزان شیرابه تولیدی در محل دفن به تفکیک ماه های سال براساس اطلاعات هواشناسی و مشخصات زباله ورودی به محل دفن "
                }
              </th>
            </tr>
          </thead>
          <thead>
            <tr className="border-b bg-green-400 text-white border-green-400">
              <th className="text-start py-3 px-2">{"     "}</th>
              {calculatedShirabeData.map((e) => {
                return (
                  <th className="text-start py-3 px-2" key={e.month}>
                    {e.month}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="text-black">
            <tr className=" hover:bg-gray-300 bg-gray-200">
              <td className="py-3 px-2">{"شیرابه تولیدی (m3/month)"}</td>
              {calculatedShirabeData.map((e) => {
                return (
                  <td className="py-3 px-2" key={e.shirabeTolidiDarMah}>
                    {e.shirabeTolidiDarMah}
                  </td>
                );
              })}
            </tr>
            <tr className="bg-gray-100 hover:bg-gray-300 font-bold  ">
              <td className="py-3 px-2">{"شیرابه تولیدی (m3/day)"}</td>
              {calculatedShirabeData.map((e) => {
                return (
                  <td className="py-3 px-2" key={e.shirabeTolidiDarRoz}>
                    {e.shirabeTolidiDarRoz}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <InfoCard className="aspect-w-16 aspect-h-10 col-span-1" key2="1x ">
        <ChartBox
          title="شیرابه تولیدی ماهانه"
          areaDataKey="shirabeTolidiDarMah"
          xAxisDataKey="month"
          data={calculatedShirabeData}
        />
      </InfoCard>
      <InfoCard key2={"2x"} className="aspect-w-16 aspect-h-10 col-span-1">
        <ChartBox
          title="شیرابه تولیدی در روز بر اساس در ماه های سال"
          areaDataKey="shirabeTolidiDarRoz"
          xAxisDataKey="month"
          data={calculatedShirabeData}
        />
      </InfoCard>
    </motion.div>
  );
};

const FormItem: FC<{
  label: string;
  tooltip?: React.ReactNode;
  register: UseFormRegisterReturn;
  type?: string;
  defaultValue?: number;
  placeholder: string;
  error: FieldError;
}> = ({
  label,
  defaultValue,
  register,
  tooltip,
  type = "number",
  placeholder,
  error,
}) => {
  const [referenceElement, setReferenceElement] = useState<any>();
  const [popperElement, setPopperElement] = useState<any>();
  const { styles, attributes } = usePopper(referenceElement, popperElement);
  return (
    <div className="py-4  mx-auto">
      <div className="flex flex-col  w-72 h-24   justify-start text-start  items-center">
        <label
          className="mb-2 text-start w-full text-sm"
          htmlFor={register.name}
        >
          {label}
          <span className="text-red-400"> *</span>
          <span>:</span>
          {!!tooltip && (
            <Popover className="relative inline-block">
              <Popover.Button ref={setReferenceElement}>
                <AiOutlineQuestionCircle />
              </Popover.Button>
              <Popover.Panel
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className="absolute z-10"
              >
                <div className="rounded-lg bg-skin-card mt-2  p-4 border-2 border-skin-light-primary shadow-2xl">
                  {tooltip}
                </div>
              </Popover.Panel>
            </Popover>
          )}
        </label>
        <div className="w-full ">
          <input
            {...register}
            id={register.name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            type={type}
            className=" rounded text-skin-base bg-skin-base"
          />
          <div className="text-red-500 text-sm mt-2">
            <div className="h-5">{error && error.message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shirabe;

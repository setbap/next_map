import Head from "next/head";
import React, { FC, useState } from "react";
import Nav from "~/template/Nav";
import { motion } from "framer-motion";
import { FieldError, useForm, UseFormRegisterReturn } from "react-hook-form";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";
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

  const [formState, setFormState] = useState<FormType>({
    masahat_faal: 0,
    masahat_poshide: 0,
    chegali_zobale: 0,
    darsad_nofoz_baresh: 0,
    darsad_rotobat_zobale: 0,
    darsad_tabdil_rotobat: 0,
    masahate_hozche: 0,
    mizane_zobale_vorodi: 0,
    zarfiat_jazb: 0,
    zarib_tabdil_tabkhir: 0,
  });
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormType>();
  const onSubmit = (data: FormType) => {
    if (data) {
      return setFormState(data);
    }
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
              className="flex items-center justify-between flex-wrap "
            >
              <FormItem
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
                label="مساحت پوشیده شده محل دفن (AL)"
                placeholder="مثلا 1000"
                error={errors["masahat_poshide"]}
                tooltip={<div className="w-32">مساحت به متر مربع </div>}
                register={register("masahat_poshide", {
                  valueAsNumber: true,
                  required: requiredValueMassege(),
                  max: maxValueMassege(100),
                })}
              />
              <FormItem
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
                className={`w-24 h-8  ${
                  Object.keys(errors).length > 0
                    ? "bg-skin-muted"
                    : "bg-skin-primary"
                }`}
              />
            </form>
            <pre>{JSON.stringify(formState, null, 4)}</pre>
            {/* { TODO:calculate Leachate  } */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const FormItem: FC<{
  label: string;
  tooltip?: React.ReactNode;
  register: UseFormRegisterReturn;
  type?: string;
  placeholder: string;
  error: FieldError;
}> = ({ label, register, tooltip, type = "number", placeholder, error }) => {
  let [referenceElement, setReferenceElement] = useState<any>();
  let [popperElement, setPopperElement] = useState<any>();
  let { styles, attributes } = usePopper(referenceElement, popperElement);
  return (
    <div className="flex flex-col w-full py-4 sm:w-1/2 justify-start text-start  items-center">
      <label className="mb-2 w-full" htmlFor={register.name}>
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
      <div className="w-full col-span-1">
        <input
          {...register}
          id={register.name}
          placeholder={placeholder}
          type={type}
          className=" rounded text-skin-base bg-skin-base"
        />
        <div className="text-red-500 text-sm mt-2">
          <div className="h-5">{error && error.message}</div>
        </div>
      </div>
    </div>
  );
};

export default Shirabe;

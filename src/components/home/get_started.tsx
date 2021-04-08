import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-skin-primary relative overflow-hidden h-screen">
      <video
        className="object-cover absolute w-full h-full hidden sm:block"
        id="videoBG"
        poster="/landing.jpg"
        autoPlay
        muted
        loop
      >
        <source src="/landing.mp4" type="video/mp4" />
      </video>
      <img
        alt="/"
        src="/landing.jpg"
        className="absolute sm:hidden block h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-60 absolute"></div>
      <div className="container  relative z-10 flex justify-center  items-center h-full">
        <div className="lg:w-5/7 w-4/5 flex flex-col sm:flex-row-reverse items-center relative z-10">
          <img
            src="/nooshirvani.png"
            className="w-40 h-50 object-cover"
            alt="nooshirvani"
          />

          <div className="w-12 h-12" />
          <div className="flex justify-center flex-col text-center items-center">
            <div className="sm:p-2 p-4 sm:h-16 sm:w-44 h-20 flex justify-center items-center w-56  rounded-xl bg-white">
              <img src="/bonyad.png" className="sm:h-12 sm:w-40 h-16 w-44" />
            </div>
            <div className="flex">
              <h1 className="font-bold  text-4xl sm:text-7xl text-white leading-tight mt-4">
                سامانه مکان محور محیط زیست
              </h1>
            </div>

            <h6 className="font-bold text-xl sm:text-2xl text-skin-primary leading-normal mt-2">
              طرح احمدی روشن - بنیاد ملی نخبگان
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

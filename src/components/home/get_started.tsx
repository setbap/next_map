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
          <div className="text-center">
            <h1 className="font-bold  text-5xl sm:text-7xl text-skin-on-primary leading-tight mt-4">
              سامانه مکان محور محیط زیست
            </h1>
            <h6 className="font-bold text-xl sm:text-2xl text-skin-primary leading-normal mt-2">
              تحت نظر بنیاد ملی نخبگان
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

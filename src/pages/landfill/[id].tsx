import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Nav from "~/template/Nav";
import ChartBox from "~/components/ChartBox";
import Footer from "~/template/Footer";
import ChartBoxAIO from "~/components/ChartBoxAIO";
import { FC, MutableRefObject, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CitiesButtons from "~/components/landfill/CitiesButton";
import Shirabe from "~/components/landfill/shirabe";
import { GetStaticProps, NextPage } from "next";

enum LandFillInfoState {
  Moarefi = 0,
  MokhtasatEqlimi = 1,
  Shirabe = 2,
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const LandFill: NextPage<{
  data: Landfill;
  baseUrl: string;
  cities: {
    Name: string;
    id: number;
  }[];
}> = ({ baseUrl, data, cities }) => {
  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  const [infoState, setInfoState] = useState<LandFillInfoState>(
    LandFillInfoState.Moarefi
  );
  const myRef = useRef<HTMLDivElement>(null);
  const scrollTo = (ref: MutableRefObject<HTMLDivElement>) => {
    return;
  };

  return (
    <>
      <Head>
        <title>{` لندفیل  ${data.Name} `}</title>
        <meta property="og:title" content={"لندفیل ها"} />
        <meta
          property="og:url"
          content={`https://www.nitenviro.com/landfill`}
        />
        <meta property="og:image" content={"/og/landfil.png"} />
        <meta
          property="og:description"
          content={`معرفی لندفیل  ${data.Name} به همراه ویدیو و عکس `}
        />
        <meta property="og:locale " content="fa_IR" />
      </Head>
      <Nav />
      <div className="flex  overflow-hidden ">
        <motion.div
          className="w-full bg-skin-landfill   overflow-auto"
          variants={thumbnailVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className=" max-w-7xl   mx-auto w-full  space-y-6 relative">
            <div className=" w-full mt-4 mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full md:w-1/2 mx-2 text-center rounded-xl">
                <div className="aspect-w-16 aspect-h-9  overflow-hidden bg-black  rounded-lg shadow-lg">
                  <img
                    src={`${baseUrl}${data.CityImage.formats.medium.url}`}
                    className="object-fill"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mx-2 text-center rounded-xl my-2 md:my-0 ">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                  {!!data.GoogleEarthVideo && (
                    <video
                      src={`${baseUrl}${data.GoogleEarthVideo?.url}`}
                      preload="metadata"
                      loop
                      controls={false}
                      autoPlay
                      className="object-fill"
                    ></video>
                  )}
                </div>
              </div>
            </div>
            <CitiesButtons currentId={data.id.toString()} cities={cities} />

            <div className=" w-full mx-auto text-center rounded-xl flex-wrap md:flex-nowrap flex-row  flex ">
              <div className="w-full md:w-4/12 md:mb-0 mb-4  mx-2 text-center rounded-xl">
                <div className="aspect-w-8 aspect-h-9  rounded-lg shadow-lg">
                  <iframe
                    className=" rounded-xl"
                    src={data.GoogleEarthLink}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className=" bg-green-100 w-full  rounded-lg md:w-8/12   font-extrabold shadow-lg">
                <div className="aspect-w-16 aspect-h-9  rounded-lg shadow-lg">
                  <iframe
                    src={data.Video3DLink}
                    className="rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="sticky text-black  flex justify-start space-x-3 items-center z-40 border-b-2 border-skin-secondary top-0 w-full h-11 bg-skin-landfill mx-auto">
              <button
                className={`${
                  infoState === LandFillInfoState.Moarefi
                    ? "text-skin-primary border-skin-primary"
                    : "border-transparent"
                } h-full px-3 mt-1 outline-none focus:outline-none border-b-4 
                `}
                onClick={() => {
                  scrollTo(myRef);
                  return setInfoState(LandFillInfoState.Moarefi);
                }}
              >
                معرفی
              </button>
              <div className="md:mx-24 sm:hidden md:block" />

              <button
                className={`${
                  infoState === LandFillInfoState.MokhtasatEqlimi
                    ? "text-skin-primary border-skin-primary"
                    : "border-transparent"
                } h-full px-3 mt-1 outline-none focus:outline-none border-b-4 
              `}
                onClick={() => {
                  scrollTo(myRef);
                  return setInfoState(LandFillInfoState.MokhtasatEqlimi);
                }}
              >
                مشخصات اقلیمی
              </button>
              <div className="md:mx-24 sm:hidden md:block" />

              <button
                className={`${
                  infoState === LandFillInfoState.Shirabe
                    ? "text-skin-primary border-skin-primary"
                    : "border-transparent"
                } h-full px-3 mt-1 outline-none focus:outline-none border-b-4 
`}
                onClick={() => {
                  scrollTo(myRef);
                  return setInfoState(LandFillInfoState.Shirabe);
                }}
              >
                شیرابه
              </button>
            </div>
            <div ref={myRef} />
            <motion.div className="w-full mx-auto ">
              <AnimatePresence>
                {infoState === LandFillInfoState.Moarefi && (
                  <motion.div className=" w-full ">
                    <motion.div
                      className="my-4 bg-skin-base rounded-lg font-bold shadow-lg
                      text-justify prose-sm flex-col justify-center items-center   p-4 "
                    >
                      <h2>معرفی لندفیل {data.Name} </h2>
                      <p className="">{data.Description}</p>
                    </motion.div>

                    <motion.div className=" w-full mx-auto grid md:grid-cols-4 grid-cols-1 space-y-2 md:space-y-0  md:gap-4">
                      <div className="col-span-4 md:col-span-2 overflow-hidden">
                        <InfoCard className="aspect-w-16 rounded-lg overflow-hidden  aspect-h-10">
                          <iframe
                            allowFullScreen
                            className="  rounded-lg overflow-hidden"
                            src={data.TimelapseVideoLink}
                          />
                        </InfoCard>
                      </div>
                      <div className="col-span-4 md:col-span-2 overflow-hidden">
                        <InfoCard
                          className="aspect-w-16 aspect-h-9"
                          key2={"3z"}
                        >
                          <a
                            className="aspect-w-16 aspect-h-9"
                            target="_blank"
                            href="https://www.booked.net/weather/babol-w262797"
                          >
                            <img
                              className=" overflow-hidden  rounded-lg "
                              src="https://w.bookcdn.com/weather/picture/2_w262798_1_1_009fde_250_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=99031"
                              alt="booked.net"
                            />
                          </a>
                        </InfoCard>
                      </div>
                      <div
                        style={{ direction: "ltr" }}
                        className="col-span-4 md:col-span-2 "
                      >
                        <InfoCard
                          className="aspect-w-16  aspect-h-10 rounded-md overflow-hidden"
                          key2="che"
                        >
                          <Carousel
                            className=" rounded-lg overflow-hidden"
                            infiniteLoop
                            swipeable
                            interval={1500}
                            useKeyboardArrows={true}
                            showThumbs={false}
                          >
                            {data.ImagesAlbum.map((i) => (
                              <div key={i.hash} className="rounded-md">
                                <div className="aspect-w-16 aspect-h-10">
                                  {i.formats.medium ? (
                                    <img
                                      src={`${baseUrl}${i.formats.medium.url}`}
                                      className=""
                                    />
                                  ) : i.formats.small ? (
                                    <img
                                      src={`${baseUrl}${i.formats.small.url}`}
                                      className=""
                                    />
                                  ) : (
                                    <img
                                      src={`${baseUrl}${i.formats.thumbnail.url}`}
                                      className=""
                                    />
                                  )}
                                </div>
                                <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle ">
                                  عکس های محل دفن زباله های {data.Name}
                                </p>
                              </div>
                            ))}
                          </Carousel>
                        </InfoCard>
                      </div>
                      <div
                        style={{ direction: "ltr" }}
                        className="col-span-4 md:col-span-2 "
                      >
                        <InfoCard
                          className="aspect-w-16  aspect-h-10 rounded-md overflow-hidden"
                          key2="che"
                        >
                          <Carousel
                            className=" rounded-lg overflow-hidden "
                            infiniteLoop
                            swipeable
                            interval={1500}
                            useKeyboardArrows={true}
                            showThumbs={false}
                          >
                            {data.AparatVideosLinks?.split("\n").map(
                              (url, index) => (
                                <div key={index} className="rounded-md">
                                  <div className="aspect-w-16 aspect-h-10">
                                    <iframe allowFullScreen src={url} />
                                  </div>
                                  <p className="text-skin-base opacity-80 absolute bottom-8 start-5 h-10 rounded-lg bg-skin-base p-2 align-middle ">
                                    عکس های محل دفن زباله های {data.Name}
                                  </p>
                                </div>
                              )
                            )}
                          </Carousel>
                        </InfoCard>
                      </div>
                      <div className="col-span-4 md:col-span-2 ">
                        <InfoCard
                          className="aspect-w-16 rounded-lg overflow-hidden  aspect-h-10"
                          key2={"1y"}
                        >
                          <video
                            preload="metadata"
                            loop
                            controls={false}
                            autoPlay
                            className="  rounded-lg overflow-hidden"
                            src={`${baseUrl}${data.LiveVideo1.url}`}
                          />
                        </InfoCard>
                      </div>
                      <div className="col-span-4 md:col-span-2 ">
                        <InfoCard
                          className="aspect-w-16 rounded-lg overflow-hidden  aspect-h-10"
                          key2={"1y"}
                        >
                          <video
                            preload="metadata"
                            loop
                            controls={false}
                            autoPlay
                            className="  rounded-lg overflow-hidden"
                            src={`${baseUrl}${data.LiveVideo2.url}`}
                          />
                        </InfoCard>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {infoState === LandFillInfoState.MokhtasatEqlimi && (
                  <motion.div className=" w-full mx-auto grid md:grid-cols-2 grid-cols-1  gap-4">
                    <InfoCard
                      className="aspect-w-16 aspect-h-10 col-span-1"
                      key2="1x "
                    >
                      <ChartBox
                        title="نمودار میزان بارش در طی ماه های سال"
                        data={data.ChartDetails}
                        areaDataKey="rain"
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard
                      key2={"2x"}
                      className="aspect-w-16 aspect-h-10 col-span-1"
                    >
                      <ChartBox
                        title="نمودار میزان تبخیر در طی ماه های سال"
                        data={data.ChartDetails}
                        areaDataKey="eva"
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard
                      className="aspect-w-16 aspect-h-10 col-span-1"
                      key2={"1y"}
                    >
                      <ChartBox
                        title="نمودار میزان دما در طی ماه های سال"
                        data={data.ChartDetails}
                        areaDataKey="temp"
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard
                      className="aspect-w-16 aspect-h-10 col-span-1"
                      key2={"2y"}
                    >
                      <ChartBoxAIO
                        title="نمودار  ماه های سال"
                        data={data.ChartDetails}
                        areaDataKey={[
                          { name: "temp", persian: "دما" },
                          { name: "eva", persian: "تبخیر" },
                          { name: "rain", persian: "بارش" },
                        ]}
                        xAxisDataKey="month"
                      />
                    </InfoCard>
                    <InfoCard
                      className="md:col-span-2 text-center flex justify-center col-span-1 p-4"
                      key2={"1wy"}
                    >
                      <img
                        src={`${baseUrl}${data.GolbadImage.formats.large.url}`}
                      />
                    </InfoCard>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {infoState === LandFillInfoState.Shirabe && (
                  <motion.div className=" w-full mx-auto grid md:grid-cols-2 grid-cols-1  gap-4">
                    <InfoCard
                      className="w-full   md:col-span-2 col-span-1 rounded-lg overflow-hidden  "
                      key2={"1wy"}
                    >
                      <Shirabe shirabeData={data.ChartDetails} />
                    </InfoCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="h-8" />
          </div>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

const InfoCard: FC<{ key2?: string; className?: string }> = ({
  children,

  className,
}) => {
  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={thumbnailVariants}
      initial="exit"
      animate="enter"
      exit="exit"
      className={`bg-skin-card   rounded-lg  font-bold shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default LandFill;

export async function getStaticPaths() {
  const rawData = await fetch(
    "https://geonitenviro.nit.ac.ir/api/landfillNames"
  );
  const data: Landfill[] = await rawData.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps<{}, { id: string }> = async ({
  params: { id },
}) => {
  const rawData = await fetch(
    `https://geonitenviro.nit.ac.ir/api/landfills/${id}`
  );

  const rawCities = await fetch(
    `https://geonitenviro.nit.ac.ir/api/landfillNames`
  );
  const data = await rawData.json();
  const cities = await rawCities.json();
  return {
    props: {
      data,
      baseUrl: "https://geonitenviro.nit.ac.ir/api",
      cities: cities,
    },
    revalidate: 10,
  };
};

export interface Landfill {
  id: number;
  GoogleEarthLink: string;
  Latitude: string;
  Longitude: string;
  Video3DLink: null | string;
  Description: string;
  TimelapseVideoLink: string;
  AparatVideosLinks: null | string;
  ChartDetails: null;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  Name: string;
  GoogleEarthVideo?: CityImage;
  CityImage: CityImage;
  LiveVideo1: CityImage;
  LiveVideo2: CityImage;
  ImagesAlbum: CityImage[];
  VideosAlbum: any[];
  GolbadImage: CityImage;
}

export interface CityImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number | null;
  height: number | null;
  formats: Formats | null;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewURL: null;
  provider: Provider;
  providerMetadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  EXTJPG = ".JPG",
  Jpg = ".jpg",
  Mp4 = ".mp4",
  PNG = ".png",
}

export interface Formats {
  large?: Large;
  small?: Large;
  medium?: Large;
  thumbnail: Large;
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
  VideoMp4 = "video/mp4",
}

export enum Provider {
  Local = "local",
}

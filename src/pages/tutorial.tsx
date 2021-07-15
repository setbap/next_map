import { motion } from "framer-motion";
import Head from "next/head";
import { getTutorialTypeShort } from "lib/tutorial";
import Nav from "~/template/Nav";
import Footer from "../template/Footer";
import TutorialCard from "~/components/TutorialCard";
import { GetStaticProps } from "next";

const Blog = ({ tutorial }: { tutorial: IPosts[] }) => {
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
      <div className="flex flex-1 overflow-hidden ">
        <motion.div
          // variants={thumbnailVariants}
          className={` relative
            overflow-auto
           w-full`}
          // initial="initial"
          // animate="enter"
          // exit="exit"
        >
          <section className="text-skin-muted pb-12">
            <TutorialCard
              data={tutorial}
              title={"آموزش"}
              subtitle={"آموزش بازیافت و نگهداری از محیط زیست"}
            />
          </section>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const rawCities = await fetch(`https://geonitenviro.nit.ac.ir/api/posts`);

  const cities: IPosts[] = await rawCities.json();

  return {
    props: {
      tutorial: cities,
    },
    revalidate: 10,
  };
};

export interface IPosts {
  id: number;
  Title: string;
  Description: string;
  AparatVideo: null;
  published_at: Date;
  created_at: string;
  updated_at: string;
  Video: Poster;
  Poster: Poster;
}

export interface Poster {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number | null;
  height: number | null;
  formats: Formats | null;
  hash: string;
  ext: Ext;
  mime: Mime;
  size: number;
  url: string;
  previewUrl: null;
  provider: Provider;
  providerMetadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export enum Ext {
  ExtMP4 = ".MP4",
  Jpg = ".jpg",
  Mp4 = ".mp4",
  Png = ".png",
}

export interface Formats {
  large?: Large;
  small?: Large;
  medium?: Large;
  thumbnail: Large;
}

export interface Large {
  ext: Ext;
  url: string;
  hash: string;
  mime: Mime;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export enum Mime {
  Imagejpeg = "image/jpeg",
  Imagepng = "image/png",
  VideoMp4 = "video/mp4",
}

export enum Provider {
  Local = "local",
}

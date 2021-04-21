import { motion } from "framer-motion";
import Head from "next/head";
import { getTutorialTypeShort } from "lib/tutorial";
import Nav from "~/template/Nav";
import Footer from "../template/Footer";
import TutorialCard from "~/components/TutorialCard";

const Blog = ({ tutorial }) => {
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
              subtitle={"آموزش بازیاف و نگداری از محیط زیست"}
            />
          </section>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const allTutorialsData = getTutorialTypeShort();

  return {
    props: {
      tutorial: allTutorialsData,
    },
  };
}

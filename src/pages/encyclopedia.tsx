import { motion } from "framer-motion";
import Head from "next/head";
import { getEncyclopediaTypeShort, EncyclopediaType } from "lib/encyclopedia";
import Nav from "~/template/Nav";
import BlogItem from "../template/BlogItem";
import Footer from "../template/Footer";
import EncyclopediaCard from "~/components/EncyclopediaCard";

const Blog = ({ introductions, articles, documents }) => {
  // const { id } = useParams<{ id?: string }>();
  //TODO : test
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  // const thumbnailVariants = {
  //   initial: { opacity: 0 },
  //   enter: { opacity: 1, transition },
  //   exit: {
  //     opacity: 0,
  //     transition: { ...transition, duration: 0.3 },
  //   },
  // };
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
            <EncyclopediaCard
              data={introductions}
              title={"معرفی"}
              subtitle={"معرفی موضوعات پیرامون محیط زیست"}
            />

            <EncyclopediaCard
              data={documents}
              title={"مستندات"}
              subtitle={"مستندات موضوعات پیرامون محیط زیست"}
            />
            <EncyclopediaCard
              data={articles}
              title={"مقالات"}
              subtitle={"گلچینی از مقالات پیرامون موضوعات محیط زیستی"}
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
  const allIntroductionsData = getEncyclopediaTypeShort(
    EncyclopediaType.Introduction
  );
  const allArticlesData = getEncyclopediaTypeShort(EncyclopediaType.article);
  const allDocumentsData = getEncyclopediaTypeShort(EncyclopediaType.document);
  return {
    props: {
      introductions: allIntroductionsData,
      articles: allArticlesData,
      documents: allDocumentsData,
    },
  };
}

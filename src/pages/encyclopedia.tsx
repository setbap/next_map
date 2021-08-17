import { motion } from "framer-motion";
import Head from "next/head";
import { getEncyclopediaTypeShort, EncyclopediaType } from "lib/encyclopedia";
import Nav from "~/template/Nav";
import Footer from "../template/Footer";
import EncyclopediaCard from "~/components/EncyclopediaCard";
import { NextSeo } from "next-seo";

const Blog = ({ introductions, articles, documents }) => {
  return (
    <>
      <NextSeo
        title="صفحه مقالات"
        description="لیستی از مقالات و کتاب های مرتبط با محیط زیست"
        openGraph={{
          url: "https://www.nitenviro.com/tutorial",
          title: "مقالات",
          description: "لیستی از مقالات و کتاب های مرتبط با محیط زیست",
          images: [
            {
              url: "https://www.nitenviro.ir/og/article.png",
              width: 400,
              height: 400,
              alt: "تصویر خانه",
            },
          ],
          site_name: "NitEnviro",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

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

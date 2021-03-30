import { motion } from "framer-motion";
import Head from "next/head";
import { getPostsShort } from "~/../lib/posts";
import Nav from "~/template/Nav";
import BlogItem from "../template/BlogItem";
import Footer from "../template/Footer";

const Blog = ({ allPostsData }) => {
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
          <section className="text-gray-600">
            <div className="container p-5  mx-auto">
              <div className="flex flex-wrap -m-4">
                {allPostsData.map(({ postId, image, title, short }) => {
                  return (
                    <BlogItem
                      image={image}
                      key={postId}
                      short={short}
                      id={postId}
                      title={title}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPostsData = getPostsShort();
  return {
    props: {
      allPostsData,
    },
  };
}

import { motion, AnimatePresence } from "framer-motion";
import Nav from "~/template/Nav";
import Footer from "../../../template/Footer";
import {
  EncyclopediaType,
  getAllEncyclopediaOfType,
  getEncyclopediaTypeShort,
  getSingleEncyclopediaData,
} from "lib/encyclopedia";
import Head from "next/head";
import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";

const Blog = ({ postData, lastThreePost }) => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta property="og:title" content={postData.title} key="title" />
        <meta
          property="og:url"
          content={`https://www.nitenviro.com/blog/${postData.postId}`}
        />
        <meta property="og:image" content={postData.image} />
        <meta property="og:description" content={postData.short} />
        <meta property="og:locale " content="fa_IR" />
      </Head>
      <Nav />
      <div className="flex flex-1 overflow-auto ">
        <motion.div
          variants={thumbnailVariants}
          className={`  w-full`}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <section className="text-skin-muted">
            <AnimatePresence>
              <motion.div layout className=" bg-skin-base ">
                <motion.div
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className=" w-full"
                  layoutId={`layout-${postData.postId}`}
                >
                  <motion.div
                    layoutId={`main-${postData.postId}`}
                    className="h-full"
                  >
                    <div className="lg:h-48 md:h-36 w-full relative ">
                      <motion.img
                        layoutId={`img-${postData.postId}`}
                        style={{ filter: "blur(6px)", maxHeight: "50vh" }}
                        id="image_cover"
                        className=" lg:h-48 md:h-36 w-full object-cover object-center"
                        src={postData.image}
                        alt="blog"
                      />

                      <h1
                        id="page_title"
                        className="text-skin-on-primary bg-skin-primary px-4 py-3 me-2  absolute bottom-12 right-4 text-b  ase max-w-sm  sm:text-lg font-bold rounded-md  mb-3"
                      >
                        {postData.title}
                      </h1>
                      <h2 className="absolute  bottom-4 right-4 tracking-widest text-xs title-font font-medium px-4 py-2 text-skin-on-primary bg-skin-primary rounded-md mb-1">
                        <span className="text-skin-on-primary  inline-flex items-center leading-none text-sm">
                          <p id="post_date"> {postData.jdate}</p>
                          <BiTimeFive className="text-xl ms-1  -mt-1" />
                        </span>
                      </h2>
                    </div>
                    <motion.div
                      layoutId={`category-${postData.postId}`}
                      className="p-6"
                    >
                      <motion.div
                        layoutId={`link-${postData.postId}`}
                        className="flex items-center flex-wrap "
                      >
                        <span className="text-skin-secondary inline-flex items-center leading-none text-sm"></span>
                        <span className="text-skin-secondary mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                      </motion.div>
                    </motion.div>
                    <div className="flex md:flex-row flex-col relative justify-center content-center ">
                      <div className=" flex w-full  flex-row md:w-10/12  text-justify max-w-screen-xl tracking-wide leading-8 text-lg sm:ps-4 px-2 sm:pe-0  ">
                        <div
                          id="post_content"
                          className="prose text-skin-base px-2  prose-2xl mx-auto overflow-y-hidden"
                          dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                          }}
                        />
                      </div>
                      <div
                        style={{ maxHeight: "77vh", maxWidth: "90vw" }}
                        className="block md:sticky  overflow-auto  start-0 m-4 max-w-sm sm:w-72 w-full top-8 h-80  border-s-4 border-skin-primary"
                      >
                        <div className="ps-2">
                          <h3
                            id="related_posts"
                            className="text-3xl mb-8 text-skin-base"
                          >
                            آخرین مقالات{" "}
                          </h3>
                          {lastThreePost.map(({ title, postId, jdate }) => {
                            return (
                              <div key={postId} className="mt-4">
                                <Link href={`/blog/${postId}`}>
                                  <a className="text-base hover:text-skin-primary">
                                    {title}
                                  </a>
                                </Link>
                                <div className="text-xs mt-2 text-skin-secondary">
                                  {jdate}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </section>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps({ params }) {
  const postData = await getSingleEncyclopediaData(params.slug, params.type);
  const lastThreePost = getEncyclopediaTypeShort(params.type).slice(0, 3);
  return {
    props: {
      postData,
      lastThreePost,
    },
  };
}
export async function getStaticPaths() {
  const IntroductionPaths = getAllEncyclopediaOfType(
    EncyclopediaType.Introduction
  );
  const articlePaths = getAllEncyclopediaOfType(EncyclopediaType.article);
  const documentPaths = getAllEncyclopediaOfType(EncyclopediaType.document);
  return {
    paths: [...documentPaths, ...articlePaths, ...IntroductionPaths],
    fallback: false,
  };
}

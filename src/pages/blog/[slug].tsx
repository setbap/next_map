import { motion, AnimatePresence } from "framer-motion";
import Nav from "~/template/Nav";
import Footer from "../../template/Footer";
import { getAllPostIds, getSinglePostData } from "lib/posts";
import { BsChat } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import Head from "next/head";

const Blog = ({ postData }) => {
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
          <section className="text-gray-600">
            <AnimatePresence>
              <motion.div layout className=" bg-white ">
                {" "}
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
                    className="h-full  bg-white  "
                  >
                    <div className="lg:h-48 md:h-36 w-full relative">
                      <motion.img
                        layoutId={`img-${postData.postId}`}
                        style={{ filter: "blur(6px)", maxHeight: "50vh" }}
                        className=" lg:h-48 md:h-36 w-full object-cover object-center"
                        src={postData.image}
                        alt="blog"
                      />

                      <h1 className="text-white bg-gray-700 absolute bottom-12 right-4  text-lg font-bold  mb-3">
                        {postData.title}
                      </h1>
                      <h2 className="absolute  bottom-4 right-4 tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        // TODO : tag
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
                        <span className="text-green-700 ms-3 inline-flex items-center lg:me-auto md:me-0 me-auto leading-none text-sm pe-3 my-1 ">
                          <AiOutlineEye className="text-xl me-1 -mt-px" />
                          {postData.date}
                        </span>
                        <span className="text-green-700 inline-flex items-center leading-none text-sm">
                          <BsChat className="text-sm  me-1 -mt-1" />
                          {postData.date}
                        </span>
                      </motion.div>
                    </motion.div>
                    <p className="md:w-9/12 sm:w-10/12 w-11/12 text-justify max-w-screen-xl tracking-wide leading-8 text-lg mx-auto ">
                      <div
                        className="prose prose-2xl mx-auto"
                        dangerouslySetInnerHTML={{
                          __html: postData.contentHtml,
                        }}
                      />
                    </p>
                  </motion.div>
                  <div className="sm:h-10" />
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
  const postData = await getSinglePostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

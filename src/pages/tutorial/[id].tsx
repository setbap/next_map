import { motion, AnimatePresence } from "framer-motion";
import Nav from "~/template/Nav";
import Footer from "~/template/Footer";
import {
  getAllTutorialOfType,
  getTutorialTypeShort,
  getSingleTutorialData,
} from "lib/tutorial";
import Head from "next/head";
import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import { pagesLinks } from "~/utils/links";
import { IPosts } from "../tutorial";
import { NextSeo } from "next-seo";

const Blog = ({
  postData,
  lastThreePost,
}: {
  postData: IPosts;
  lastThreePost: IPosts[];
}) => {
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
      <NextSeo
        title={postData.Title}
        description={postData.Description}
        openGraph={{
          url: `https://www.nitenviro.com/tutorial/${postData.id}`,
          title: postData.Title,
          description: postData.Description,

          videos: [
            {
              url: "https://geonitenviro.nit.ac.ir/api/" + postData.Video.url,
              width: 400,
              height: 320,
            },
          ],
          images: [
            {
              url: "https://geonitenviro.nit.ac.ir/api/" + postData.Poster.url,
              width: 400,
              height: 400,
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
                >
                  <motion.div className="h-full">
                    <div className="lg:h-48 md:h-36 w-full relative ">
                      <motion.img
                        style={{ filter: "blur(6px)", maxHeight: "50vh" }}
                        id="image_cover"
                        className=" lg:h-48 md:h-36 w-full object-cover object-center"
                        src={
                          "https://geonitenviro.nit.ac.ir/api/" +
                          postData.Poster.url
                        }
                        alt="blog"
                      />

                      <h1
                        id="page_title"
                        className="text-skin-on-primary bg-skin-primary px-4 py-3 me-2  absolute bottom-12 right-4 text-b  ase max-w-sm  sm:text-lg font-bold rounded-md  mb-3"
                      >
                        {postData.Title}
                      </h1>
                      <h2 className="absolute  bottom-4 right-4 tracking-widest text-xs title-font font-medium px-4 py-2 text-skin-on-primary bg-skin-primary rounded-md mb-1">
                        <span className="text-skin-on-primary  inline-flex items-center leading-none text-sm">
                          <p id="post_date"> {postData.updated_at}</p>
                          <BiTimeFive className="text-xl ms-1  -mt-1" />
                        </span>
                      </h2>
                    </div>
                    <motion.div className="p-6">
                      <motion.div className="flex items-center flex-wrap ">
                        <span className="text-skin-secondary inline-flex items-center leading-none text-sm"></span>
                        <span className="text-skin-secondary mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                      </motion.div>
                    </motion.div>
                    <div className="flex md:flex-row flex-col relative justify-center content-center ">
                      <div className=" flex w-full  flex-row md:w-10/12  text-justify max-w-screen-xl tracking-wide leading-8 text-lg sm:ps-4 px-2 sm:pe-0  ">
                        <div
                          id="post_content"
                          className="prose text-skin-base px-2 mb-6  prose-2xl mx-auto "
                        >
                          <div className="mb-8 ">
                            <video
                              controls
                              className=" rounded-md w-full  shadow-md"
                              poster={
                                "https://geonitenviro.nit.ac.ir/api/" +
                                postData.Poster.url
                              }
                              src={
                                "https://geonitenviro.nit.ac.ir/api/" +
                                postData.Video.url
                              }
                            ></video>
                          </div>

                          <div
                            dangerouslySetInnerHTML={{
                              __html: postData.Description,
                            }}
                          />
                        </div>
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
                          {lastThreePost.map(({ Title, id, updated_at }) => {
                            return (
                              <div key={id} className="mt-4">
                                <Link
                                  href={pagesLinks.tutorialItem({
                                    slug: id + "",
                                  })}
                                >
                                  <a className="text-base hover:text-skin-primary">
                                    {Title}
                                  </a>
                                </Link>
                                <div className="text-xs mt-2 text-skin-secondary">
                                  {updated_at}
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

export async function getStaticProps({ params: { id } }) {
  const rawData = await fetch("https://geonitenviro.nit.ac.ir/api/posts");
  const data: IPosts[] = await rawData.json();

  const postData = data.filter((item) => item.id.toString() === id)[0];
  const lastThreePost = data.slice(0, 3);
  return {
    props: {
      postData,
      lastThreePost,
    },
  };
}
export async function getStaticPaths() {
  const rawData = await fetch("https://geonitenviro.nit.ac.ir/api/posts");
  const data: IPosts[] = await rawData.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
  // const tutorialPaths = getAllTutorialOfType();
  // return {
  //   paths: tutorialPaths,
  //   fallback: false,
  // };
}

import { motion, AnimatePresence } from "framer-motion";
import Nav from "~/template/Nav";
import { useRouter } from "next/router";
import BlogItemSelected from "../../template/BlogItemSelected";
import Footer from "../../template/Footer";

interface Props {}

const Blog = ({}: Props) => {
  const router = useRouter();
  const { slug } = router.query;

  //TODO : test
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
      <Nav />
      <div className="flex flex-1 overflow-hidden ">
        <motion.div
          // variants={thumbnailVariants}
          className={` relative overflow-hidden w-full`}
          // initial="initial"
          // animate="enter"
          // exit="exit"
        >
          <section className="text-gray-600">
            <AnimatePresence>
              <motion.div
                layout
                className="absolute top-0 bg-white left-0 right-0 bottom-0 overflow-auto"
              >
                {console.log("slug")}
                {console.log(slug)}
                <BlogItemSelected selectedId={slug as string} />
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

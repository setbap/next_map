import { motion, AnimatePresence } from "framer-motion";
import Nav from "~/template/Nav";
import BlogItem from "../template/BlogItem";
import BlogItemSelected from "../template/BlogItemSelected";
import Footer from "../template/Footer";

interface Props {}

const Blog = ({}: Props) => {
  // const { id } = useParams<{ id?: string }>();
  const id = "as";
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
                <BlogItem id={"1"} />
                <BlogItem id={"2"} />
                <BlogItem id={"3"} />
                <BlogItem id={"4"} />
                <BlogItem id={"5"} />
                <BlogItem id={"6"} />
                <BlogItem id={"7"} />
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

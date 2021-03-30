import Link from "next/link";

import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
interface Props {
  id: string;
  title: string;
  short: string;
  image: string;
}

const BlogItem = ({ id, title, short, image }: Props) => {
  return (
    <>
      <motion.div
        layoutId={`layout-${id}`}
        className="p-4 sm:p-2 md:w-1/2 lg:w-1/3"
      >
        <motion.div
          layoutId={`main-${id}`}
          className="h-full border-2 border-green-50 bg-white  rounded-lg overflow-hidden"
        >
          <motion.img
            layoutId={`img-${id}`}
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={image}
            alt={`${title} - image`}
          />
          <motion.div layoutId={`category-${id}`} className="p-6">
            <h1 className=" font-bold  text-lg  text-green-800 mb-3">
              {title}
            </h1>
            {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                The Catalyzer
              </h1> */}
            <p
              style={{ textOverflow: "ellipsis" }}
              className="leading-relaxed h-20  overflow-hidden overflow-ellipsis text-gray-600 mb-3"
            >
              {short}
            </p>
            <motion.div
              layoutId={`link-${id}`}
              className="flex items-center flex-wrap "
            >
              <Link href={`/blog/${id}`}>
                <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">
                  <span>بیشتر</span>
                </a>
              </Link>
              <span className="text-green-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <AiOutlineEye className="text-xl me-1 -mt-px" />
                1.2K
              </span>
              <span className="text-green-700 inline-flex items-center leading-none text-sm">
                <BsChat className="text-sm  me-1 -mt-1" />
                {" 6 "}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default BlogItem;

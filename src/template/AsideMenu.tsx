import { motion } from "framer-motion";
import { AiFillPayCircle } from "react-icons/ai";
import { BiHome, BiMapAlt } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import AsideNavLink from "./AsideNavLink";

interface Props {
  open: boolean;
  closeFn: VoidFunction;
}

const AsideMenu = ({ open, closeFn }: Props) => {
  return (
    <motion.div>
      <aside
        className={`z-50 h-full absolute start-0 overflow-auto   transition-all duration-200 ${
          open ? "sm:w-48 lg:w-48 w-full" : "w-0"
        }  bg-skin-card `}
      >
        <ul className="text-center flex flex-col w-full">
          <li className="h-14  block">
            <div
              id="page-icon"
              onClick={closeFn}
              className="h-full w-full hover:bg-skin-primary block p-3"
            >
              <div className=" flex flex-col justify-center items-center ">
                <div className="bg-white p-1  rounded-lg">
                  <img
                    src="/title_image.png"
                    className="scale-75 transform"
                    width="30px"
                    height="30px"
                  />
                </div>
              </div>
            </div>
          </li>
          <AsideNavLink
            onClick={closeFn}
            id="home-page-aside"
            to="/"
            Icon={BiHome}
            title={"خانه"}
          />
          <AsideNavLink
            onClick={closeFn}
            id="map-page-aside"
            to="/map"
            Icon={BiMapAlt}
            title={"نقشه"}
          />

          <AsideNavLink
            onClick={closeFn}
            id="landfill-page-aside"
            to="/landfill"
            Icon={AiFillPayCircle}
            title={"لندفیل"}
          />
          <AsideNavLink
            onClick={closeFn}
            id="about-page-aside"
            to="/blog"
            Icon={RiArticleLine}
            title={"مقاله ها"}
          />
          <AsideNavLink
            onClick={closeFn}
            id="about-page-aside"
            to="/about"
            Icon={BsInfoCircle}
            title={"دریاره ما"}
          />
          <AsideNavLink
            onClick={closeFn}
            id="contactus-page-aside"
            to="/contact_us"
            Icon={MdContactMail}
            title={"ارتباط با ما"}
          />
        </ul>
      </aside>
    </motion.div>
  );
};

export default AsideMenu;

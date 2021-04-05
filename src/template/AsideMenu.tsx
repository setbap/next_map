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
              <img
                className="object-contain h-full w-full"
                src="https://avatars1.githubusercontent.com/u/6157842?v=4"
                alt="open-source"
              />
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

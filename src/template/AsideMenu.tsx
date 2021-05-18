import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { AiFillPayCircle } from "react-icons/ai";
import { BiHome, BiMapAlt } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { pagesLinks } from "~/utils/links";
import AsideNavLink from "./AsideNavLink";

interface Props {
  open: boolean;
  closeFn: VoidFunction;
}

const AsideMenu = ({ open, closeFn }: Props) => {
  const router = useRouter();
  console.log(router.route);
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
            isActive={
              router.route.startsWith(pagesLinks.index()) &&
              router.route.endsWith(pagesLinks.index())
            }
            onClick={closeFn}
            id="home-page-aside"
            to={pagesLinks.index()}
            Icon={BiHome}
            title={"خانه"}
          />
          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.map())}
            onClick={closeFn}
            id="map-page-aside"
            to={pagesLinks.map()}
            Icon={BiMapAlt}
            title={"نقشه"}
          />

          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.landfills())}
            onClick={closeFn}
            id="landfill-page-aside"
            to={pagesLinks.landfills()}
            Icon={AiFillPayCircle}
            title={"لندفیل"}
          />
          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.tutorial())}
            onClick={closeFn}
            id="tutorial-page-aside"
            to={pagesLinks.tutorial()}
            Icon={FaChalkboardTeacher}
            title={"آموزش"}
          />
          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.encyclopedia())}
            onClick={closeFn}
            id="encyclopedia-page-aside"
            to={pagesLinks.encyclopedia()}
            Icon={RiArticleLine}
            title={"دانشنامه"}
          />

          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.contact_us())}
            onClick={closeFn}
            id="contactus-page-aside"
            to={pagesLinks.contact_us()}
            Icon={MdContactMail}
            title={"ارتباط با ما"}
          />
        </ul>
      </aside>
    </motion.div>
  );
};

export default AsideMenu;

import { useRouter } from "next/router";
import { AiFillPayCircle, AiOutlineBarChart } from "react-icons/ai";
import { BiHome, BiMapAlt } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { pagesLinks } from "~/utils/links";
import AsideNavLink from "./AsideNavLink";

interface Props {
  open: boolean;
}

const AsideMenu = ({ open }: Props) => {
  const router = useRouter();
  return (
    <>
      <aside
        className={`z-50 h-full absolute start-0 overflow-auto   transition-all duration-200 ${
          open ? "sm:w-64 lg:w-64 w-full" : "w-0"
        }  bg-skin-card `}
      >
        <ul className="text-center flex flex-col w-full">
          <li className="h-14  block">
            <div
              id="page-icon"
              className="h-full w-full hover:bg-skin-primary block p-3"
            >
              <div className=" flex flex-col justify-center items-center ">
                {/* <div className="bg-white p-1  rounded-lg">
                  <img
                    src="/title_image.png"
                    className="scale-75 transform"
                    width="30px"
                    height="30px"
                  />
                </div> */}
              </div>
            </div>
          </li>
          <AsideNavLink
            isActive={
              router.route.startsWith(pagesLinks.index()) &&
              router.route.endsWith(pagesLinks.index())
            }
            id="home-page-aside"
            to={pagesLinks.index()}
            Icon={BiHome}
            title={"خانه"}
          />
          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.recycle())}
            id="home-page-aside"
            to={pagesLinks.recycle()}
            Icon={IoTrashBinOutline}
            title={"نوع زباله من"}
          />
          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.map())}
            id="map-page-aside"
            to={pagesLinks.map()}
            Icon={BiMapAlt}
            title={"نقشه"}
          />

          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.landfills())}
            id="landfill-page-aside"
            to={pagesLinks.landfills()}
            Icon={AiFillPayCircle}
            title={"لندفیل"}
          />
          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.tutorial())}
            id="tutorial-page-aside"
            to={pagesLinks.tutorial()}
            Icon={FaChalkboardTeacher}
            title={"آموزش"}
          />
          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.encyclopedia())}
            id="encyclopedia-page-aside"
            to={pagesLinks.encyclopedia()}
            Icon={RiArticleLine}
            title={"دانشنامه"}
          />

          <AsideNavLink
            isActive={router.route.startsWith(pagesLinks.contact_us())}
            id="contactus-page-aside"
            to={pagesLinks.contact_us()}
            Icon={MdContactMail}
            title={"ارتباط با ما"}
          />
          <AsideNavLink
            isActive={router.route.startsWith("report")}
            id="contactus-gozaresh"
            to={"/"}
            Icon={AiOutlineBarChart}
            title={"گزارش گیری"}
          />

          <a
            href="https://app.nitenviro.ir"
            target="blank"
            className="p-3  mt-6  mx-auto glow-on-hover"
            type="button"
          >
            دانلود اپلیکیشن تفکیک
          </a>
        </ul>
      </aside>
    </>
  );
};

export default AsideMenu;

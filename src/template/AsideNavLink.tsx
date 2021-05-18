import { FC } from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
interface Props {
  to: string;
  id: string;
  title: string;
  isActive: boolean;
  Icon: FC<{ className: string; size?: number }>;
}

const AsideNavLink = ({ Icon, title, to, isActive }: Props) => {
  return (
    <Popover.Button
      as={"li"}
      className=" min-w-max  overflow-hidden  flex-1 sm:w-full"
      title={title}
    >
      <Link
        // activeClassName="text-orange-400 hover:bg-orange   "
        // id={id}
        href={to}
      >
        <a
          className={`h-full ${
            isActive ? "bg-skin-primary" : ""
          } transition-colors text-skin-base hover:text-skin-on-primary  duration-300  flex justify-start items-center w-full hover:bg-skin-primary-relaxed  p-3`}
        >
          <Icon className="me-4  md:mb-0 text-2xl" />
          <div className="">{title}</div>
        </a>
      </Link>
    </Popover.Button>
  );
};

export default AsideNavLink;

import { FC } from "react";
import Link from 'next/link'
interface Props {
  to: string;
  id: string;
  title: string;
  Icon: FC<{ className: string; size?: number }>;
  onClick: VoidFunction;
}

const AsideNavLink = ({ Icon, title, to, onClick }: Props) => {
  return (
    <li
      onClick={onClick}
      className=" min-w-max  overflow-hidden  flex-1 sm:w-full"
      title={title}
    >
      <Link
        // activeClassName="text-orange-400 hover:bg-orange   "
        // id={id}
        href={to}

      >
        <a
          className="h-full transition-colors text-black hover:text-white  duration-300  flex justify-start items-center w-full hover:bg-gray-700  p-3"
        >
        <Icon className="me-4  md:mb-0 text-2xl" />
          <div className="">{title}</div>
        </a>
      </Link>
    </li>
  );
};

export default AsideNavLink;

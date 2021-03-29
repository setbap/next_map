import { FiTwitter, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

interface Props {}

const Footer = ({}: Props) => {
  return (
    <footer className=" bg-gray-800 text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">سینا</span>
        </div>
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <a
            href="http://nitgisenvironment.ir.domains.blog.ir/"
            className="underline ml-1 text-gray-200"
            rel="noopener noreferrer"
            target="_blank"
          >
            ©2020 nitgisenvironment
          </a>
        </p>
        <span className="inline-flex transition-colors duration-300 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-200">
            <FiFacebook className="me-2 hover:text-blue-500 transition-colors text-xl duration-300 " />
          </a>
          <a className="ml-3 text-gray-200">
            <FiTwitter className="me-1 hover:text-blue-300 transition-colors text-xl duration-300 " />
          </a>
          <a className="ml-3 text-gray-200">
            <FiLinkedin className="me-1 hover:text-blue-400 transition-colors text-xl duration-300" />
          </a>
          <a className="ml-3 text-gray-200">
            <FiInstagram className="me-1 hover:text-orange-500 transition-colors text-xl duration-300" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

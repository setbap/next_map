import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-orange-400 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              یه لینک
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-orange-400 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              یه لینک دیگه
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-orange-400 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              لینکداین
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-orange-400 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              گیتهاب
            </a>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a
            href="/"
            className="text-gray-400 hover:text-orange-400 dark:hover:text-white transition-colors duration-200"
          >
            <FiInstagram size={28} />
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-orange-400 dark:hover:text-white transition-colors duration-200"
          >
            <FiTwitter size={28} />
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-orange-400 dark:hover:text-white transition-colors duration-200"
          >
            <FiGithub size={28} />
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-orange-400 dark:hover:text-white transition-colors duration-200"
          >
            <FiLinkedin size={28} />
          </a>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
          Created by Copy & Paste
        </div>
      </div>
    </footer>
  );
};

export default Footer;

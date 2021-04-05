import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="z-10 overflow-hidden relative bg-skin-card border-t-2 border-skin-base dark:bg-gray-800 w-full py-8">
      <div className="absolute  top-0 left-0 bottom-0 right-0 footer_filter footer_image "></div>

      <div className="  top-0 left-0 bottom-0 right-0 z-50 max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <a
              className="text-skin-muted hover:text-skin-primary dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              یه لینک
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-skin-muted hover:text-skin-primary dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              یه لینک دیگه
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-skin-muted hover:text-skin-primary dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              لینکداین
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-skin-muted hover:text-skin-primary dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="/"
            >
              گیتهاب
            </a>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a
            href="/"
            className="text-skin-muted hover:text-skin-primary dark:hover:text-white transition-colors duration-200"
          >
            <FiInstagram size={28} />
          </a>
          <a
            href="/"
            className="text-skin-muted hover:text-skin-primary dark:hover:text-white transition-colors duration-200"
          >
            <FiTwitter size={28} />
          </a>
          <a
            href="/"
            className="text-skin-muted hover:text-skin-primary dark:hover:text-white transition-colors duration-200"
          >
            <FiGithub size={28} />
          </a>
          <a
            href="/"
            className="text-skin-muted hover:text-skin-primary  transition-colors duration-200"
          >
            <FiLinkedin size={28} />
          </a>
        </div>
        <div className="text-center text-skin-muted  pt-10 sm:pt-12 font-light flex items-center justify-center">
          Created by Copy & Paste
        </div>
      </div>
    </footer>
  );
};

export default Footer;

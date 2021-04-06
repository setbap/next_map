import { motion } from "framer-motion";
import Footer from "~/template/Footer";
import dynamic from "next/dynamic";
import Nav from "~/template/Nav";
import Head from "next/head";

const UniMap = dynamic(() => import("@components/contact-us/uniMap"), {
  ssr: false,
});
// interface Props {}

const ContactUs = () => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <>
      <Head>
        <title>{"تماس با ما"}</title>
        <meta property="og:title" content={"تماس با ما"} />
        <meta
          property="og:url"
          content={`https://www.nitenviro.com/contact_us`}
        />
        <meta property="og:image" content={"/og/contactus.png"} />
        <meta property="og:description" content={"تماس با ما "} />
        <meta property="og:locale " content="fa_IR" />
      </Head>
      <Nav />
      <div className="flex flex-1 overflow-hidden ">
        <motion.div
          variants={thumbnailVariants}
          className="w-full h-full relative flex flex-col overflow-auto"
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <section className="text-skin-muted body-font flex-1">
            <div className="container px-5 py-4 mx-auto flex lg:flex-row flex-col">
              <div className="lg:w-1/2 flex-col   rounded-lg  sm:mx-3  flex items-end justify-start relative">
                <UniMap />
              </div>
              <div className="w-10 block lg:hidden" />
              <div className="lg:w-1/2 flex flex-col md:ms-auto w-full px-2 lg:py-8 mt-8 ">
                <h2 className="text-skin-base text-lg mb-1 font-medium ">
                  ارسال نظر
                </h2>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-skin-muted"
                  >
                    نام *
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-skin-card rounded border border-skin-muted focus:border-skin-primary focus:ring-2 focus:ring-yellow-200 text-base outline-none  text-skin-muted py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-skin-muted"
                  >
                    پست الکترونيک
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-skin-card rounded border border-skin-muted focus:border-skin-primary focus:ring-2 focus:ring-yellow-200 text-base outline-none  text-skin-muted py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-skin-muted"
                  >
                    پیام
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-skin-card rounded border border-skin-muted focus:border-skin-primary focus:ring-2 focus:ring-yellow-200 text-base outline-none  text-skin-muted py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="text-skin-on-primary bg-skin-primary border-0 py-2 px-6 focus:outline-none hover:bg-skin-primary-relaxed rounded text-lg">
                  ارسال
                </button>
                <p className="text-xs text-skin-muted mt-3">
                  نظر شما به هیچ وجه امکان عمومی شدن در قسمت نظرات را ندارد، و
                  تنها راه پاسخگویی به آن نیز از طریق پست الکترونیک می‌باشد.
                  بنابراین در صورتیکه مایل به دریافت پاسخ هستید، پست الکترونیک
                  خود را وارد کنید.
                </p>
              </div>
            </div>
          </section>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;

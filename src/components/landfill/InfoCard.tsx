import { motion } from "framer-motion";
import { FC } from "react";

const InfoCard: FC<{ key2: string; className?: string }> = ({
  children,
  key2,
  className,
}) => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };

  return (
    <motion.div
      key={key2}
      variants={thumbnailVariants}
      initial="exit"
      animate="enter"
      exit="exit"
      className={`bg-skin-base   rounded-lg  font-bold shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

export { InfoCard };

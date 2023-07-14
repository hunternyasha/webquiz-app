import { motion } from "framer-motion";

const PageTransions = ({ children }) => {
  return (
    <motion.section
      className="aboutUs"
      initial={{
        opacity: 0,

      }}
      animate={{
        opacity: 1,

      }}
      exit={{
        opacity: 0,

      }}
      transition={{
        ease: "easeIn",
        duration: .6,
      }}>
      {children}
    </motion.section>
  );
};

export default PageTransions;

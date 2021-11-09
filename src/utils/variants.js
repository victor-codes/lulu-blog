const transition = { ease: "easeOut", duration: 0.2, type: "spring" };

const pageVariants = {
  hidden: {
    opacity: 0,
    y: "10%",
  },
  visible: {
    opacity: 1,
    y: "0%",
  },
  leave: {
    opacity: 0,
    y: "10%",
    transition: { ...transition, delay: 0.1 },
  },
};
const variants = {
  hidden: {
    y: "10%",
  },
  visible: {
    y: "0%",
  },
  leave: {
    y: "10%",
    transition: { ...transition, delay: 0.1 },
  },
};

const blogVariants = {
  hidden: {
    opacity: 0,
    y: "10%",
  },
  visible: {
    opacity: 1,
    y: "0%",
  },
  leave: {
    opacity: 0,
    y: "10%",
    transition: { ...transition, delay: 0.1 },
  },
};

export { pageVariants, transition, blogVariants, variants };

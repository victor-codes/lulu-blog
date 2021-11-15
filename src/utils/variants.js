const transition = { ease: "easeInOut", duration: 0.1 };

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
    transition: { ...transition },
  },
};

const blogVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
    transition: { ...transition },
  },
};

export { pageVariants, transition, blogVariants };

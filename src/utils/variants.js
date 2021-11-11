const transition = { ease: "easeInOut", duration: 0.5 };

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
// const variants = {
//   hidden: {
//     y: "10%",
//   },
//   visible: {
//     y: "0%",
//   },
//   leave: {
//     y: "10%",
//     transition: { ...transition, delay: 0.1 },
//   },
// };

const blogVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
    transition: { ...transition, delay: 0.1 },
  },
};

export { pageVariants, transition, blogVariants };

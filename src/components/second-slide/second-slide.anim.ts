const textVariant = (manualStagger: number) => ({
  hidden: {
    opacity: 0,
    x: -70
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: manualStagger
    }
  }
});

const secondSlideVariants = {
  text: textVariant
};

export default secondSlideVariants;

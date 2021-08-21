const imgVariants = {
  hidden: {
    height: 0
  },
  visible: {
    height: '100%',
    transition: {
      ease: 'easeInOut',
      duration: 0.75
    }
  }
};

const textsTransition = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
      staggerChildren: 0.25
    }
  }
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.75
    }
  }
};

const blockVariants = {
  img: imgVariants,
  texts: textsTransition,
  text: textVariants
};

export default blockVariants;

const circlesVariants = {
  hidden: {
    width: '0%',
    opacity: 0
  },
  visible: {
    width: 'max-content',
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.75,
      when: 'beforeChildren',
      staggerChildren: 0.15
    }
  }
};

const circleVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75
    }
  }
};

const rainbowVariants = {
  hidden: {
    scale: 0.9,
    opacity: 0
  },
  hovered: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.1
    }
  }
};

const borderVariants = {
  hidden: {
    scale: 1,
    opacity: 1
  },
  hovered: {
    scale: 0.9,
    opacity: 0,
    transition: {
      opacity: { delay: 0.15 },
      duration: 0.25
    }
  }
};

const linkBlockVariants = {
  hidden: {
    opacity: 0,
    y: 100
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

const eightSlideVariants = {
  circles: circlesVariants,
  circle: circleVariants,
  rainbow: rainbowVariants,
  border: borderVariants,
  linkBlock: linkBlockVariants
};

export default eightSlideVariants;

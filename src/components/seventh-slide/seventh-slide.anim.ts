const questionVariants = {
  initial: {
    rotate: -5,
    scale: 1
  },
  hovered: {
    rotate: 30,
    scale: 1.15
  }
};

const bubbleVariants = {
  initial: {
    opacity: 0,
    y: 50,
    transition: {
      y: { delay: 0.35 }
    }
  },
  hovered: {
    opacity: 1,
    y: 0
  }
};

const seventhSlideVariants = {
  question: questionVariants,
  bubble: bubbleVariants
};

export default seventhSlideVariants;

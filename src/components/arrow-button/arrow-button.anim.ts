const lineVariants = {
  initial: {
    width: '50%',
    y: '-32.5%',
    x: 0
  },
  hovered: {
    width: '0%',
    y: '-32.5%',
    x: 10
  }
};

const arrowRightVariants = {
  initial: {
    x: '20%'
  },
  hovered: {
    x: '-5%'
  }
};

const arrowButtonVariants = {
  line: lineVariants,
  arrowRight: arrowRightVariants
};

export default arrowButtonVariants;

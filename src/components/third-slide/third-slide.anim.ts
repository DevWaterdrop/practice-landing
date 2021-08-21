const firstWordPosition = [
  { char: 'f', pos: { x: -1.875, y: 0, rotate: 40 } },
  { char: 'a', pos: { x: -4.937, y: 6.875, rotate: 30 } },
  { char: 'l', pos: { x: -6, y: 10.125, rotate: 20 } },
  { char: 'l', pos: { x: -7, y: 12, rotate: 15 } },
  { char: 'a', pos: { x: -8, y: 13, rotate: 10 } },
  { char: 's', pos: { x: -9, y: 13.5, rotate: -5 } },
  { char: 'l', pos: { x: -10, y: 13, rotate: -10 } },
  { char: 'e', pos: { x: -11, y: 11.5, rotate: -20 } },
  { char: 'e', pos: { x: -13, y: 7, rotate: -30 } },
  { char: 'p', pos: { x: -17, y: 0, rotate: -40 } }
];

const secondWordPosition = [
  { char: 'a', pos: { x: -3, y: 0, rotate: -30 } },
  { char: 's', pos: { x: -4, y: -5, rotate: -20 } },
  { char: 'l', pos: { x: -4, y: -7, rotate: -10 } },
  { char: 'e', pos: { x: -4, y: -8, rotate: -5 } },
  { char: 'e', pos: { x: -4, y: -7.5, rotate: 5 } },
  { char: 'e', pos: { x: -4, y: -5.5, rotate: 10 } },
  { char: 'e', pos: { x: -4, y: -2, rotate: 20 } },
  { char: 'p', pos: { x: -5, y: 0, rotate: 30 } }
];

const mobileFirstWordPosition = [
  { char: 'f', pos: { x: 0, y: 0, rotate: 45 } },
  { char: 'a', pos: { x: 1, y: 5, rotate: 40 } },
  { char: 'l', pos: { x: 1, y: 9, rotate: 30 } },
  { char: 'l', pos: { x: 0.5, y: 11, rotate: 25 } },
  { char: 'a', pos: { x: -0.5, y: 13, rotate: 10 } },
  { char: 's', pos: { x: -1.5, y: 13, rotate: -10 } },
  { char: 'l', pos: { x: -2, y: 12, rotate: -20 } },
  { char: 'e', pos: { x: -2, y: 9.5, rotate: -30 } },
  { char: 'e', pos: { x: -1.5, y: 5, rotate: -40 } },
  { char: 'p', pos: { x: 0, y: 0, rotate: -45 } }
];

const mobileSecondWordPosition = [
  { char: 'a', pos: { x: 0, y: 0, rotate: -45 } },
  { char: 's', pos: { x: -1, y: -5, rotate: -40 } },
  { char: 'l', pos: { x: -1.5, y: -9, rotate: -30 } },
  { char: 'e', pos: { x: -0.5, y: -11, rotate: -15 } },
  { char: 'e', pos: { x: 0.5, y: -11, rotate: 10 } },
  { char: 'e', pos: { x: 1.5, y: -9, rotate: 30 } },
  { char: 'e', pos: { x: 1, y: -5, rotate: 40 } },
  { char: 'p', pos: { x: 0, y: 0, rotate: 45 } }
];

const wordsPosition = {
  first: firstWordPosition,
  second: secondWordPosition,
  mobileFirst: mobileFirstWordPosition,
  mobileSecond: mobileSecondWordPosition
};

const containerVariants = {
  hidden: {
    width: '50%'
  },
  show: {
    width: '70%'
  }
};

const badgeVariants = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1
  }
};

const leftBackgroundVariant = {
  hidden: { width: '0%' },
  show: { width: '100%' }
};

const subtitleVariants = {
  hidden: { height: 0, margin: '0rem 0 0 0' },
  show: { height: 'min-content', margin: '1rem 0 0 0' }
};

const thirdSlideVariants = {
  container: containerVariants,
  badge: badgeVariants,
  subtitle: subtitleVariants,
  leftBackground: leftBackgroundVariant
};

export { wordsPosition, thirdSlideVariants };

import type { Transition } from 'framer-motion';

const showMobileTransition: Transition = {
  duration: 1.35,
  repeatType: 'reverse',
  repeat: Infinity,
  repeatDelay: 0.15
};

const showTransition: Transition = {
  duration: 1,
  repeatType: 'reverse',
  repeat: Infinity,
  repeatDelay: 0.35
};

const exitTransition: Transition = {
  ease: 'easeInOut',
  duration: 0.75
};

const spanTransition = {
  show: {
    mobile: showMobileTransition,
    default: showTransition
  },
  exit: exitTransition
};

export default spanTransition;

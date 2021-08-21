import type { Transition } from 'framer-motion';

const showTransition: Transition = {
  ease: 'easeInOut',
  duration: 2,
  repeat: Infinity,
  repeatType: 'reverse',
  repeatDelay: 0.15
};

const exitTransition: Transition = {
  ease: 'easeInOut',
  duration: 0.75
};

const spanAnimation = {
  show: showTransition,
  exit: exitTransition
};

export default spanAnimation;

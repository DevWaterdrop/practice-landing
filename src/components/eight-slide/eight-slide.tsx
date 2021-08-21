import { motion as m, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
//* Animation
import eightSlideVariants from './eight-slide.anim';
//* Local Components
import Circle from './local-components/circle';
// Styles
import styles from './eight-slide.scss';

export const sc = (element: string) => styles[`eight-slide__${element}`]; //* short-class

const EightSlide: React.VFC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }

    return () => controls.stop();
  }, [inView]);

  return (
    <div className={styles['eight-slide']} ref={ref}>
      <p className={sc('text')}>Can&apos;t sleep?</p>
      <div className={sc('container')}>
        <p className={sc('text')}>Follow the</p>
        <m.div
          className={sc('circles')}
          animate={controls}
          variants={eightSlideVariants.circles}
          initial="hidden"
        >
          <Circle type="left" />
          <Circle type="middle" />
          <Circle type="right" />
        </m.div>
      </div>
      <m.div
        className={sc('block')}
        animate={controls}
        variants={eightSlideVariants.linkBlock}
        initial="hidden"
      >
        <a
          className={sc('link')}
          href="https://www.instagram.com/sandlandsleep/"
          target="_blank"
          rel="noreferrer"
        >
          @Sandlandsleep
        </a>
      </m.div>
    </div>
  );
};

export default EightSlide;

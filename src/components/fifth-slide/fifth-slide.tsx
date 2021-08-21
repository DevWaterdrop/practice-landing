import { motion as m, useTransform, useViewportScroll } from 'framer-motion';
import React, { useMemo, useRef } from 'react';
// Helpers
import useWindowSize from '@helpers/use-window-size';
//* Local Components
import Block from './local-components/block';
// Styles
import styles from './fifth-slide.scss';

export const sc = (element: string) => styles[`fifth-slide__${element}`]; //* short-class

const FifthSlide: React.VFC<IProps> = ({ isMobile }) => {
  const windowSize = useWindowSize();
  const { scrollY } = useViewportScroll();

  const ref = useRef<HTMLDivElement>(null);

  const bounds = useMemo(() => {
    if (ref.current) {
      const { y, height } = ref.current.getBoundingClientRect();
      return [y + window.scrollY, height];
    }
    return [0, 0];
  }, [ref.current, windowSize]);

  const percentage = (30 / 100) * bounds[1];
  const y = useTransform(
    scrollY,
    [bounds[0], bounds[0] + percentage],
    [0, percentage]
  );

  return (
    <div className={styles['fifth-slide']} ref={ref}>
      <m.div className={sc('left')} style={{ y: isMobile ? 0 : y }}>
        <p className={sc('title')}>Meet our dream team.</p>
        <p className={sc('subtitle')}>
          We all know healthy sleep is essential for our mental and physical
          well-being and that&apos;s why, in addition to our personal
          experiences with bad sleep, we created our products with the guidance
          of sleep professionals.
        </p>
      </m.div>
      <div className={sc('right')}>
        <Block type="female" isMobile={isMobile} />
        <Block type="male" />
      </div>
    </div>
  );
};

interface IProps {
  isMobile: boolean;
}

export default FifthSlide;

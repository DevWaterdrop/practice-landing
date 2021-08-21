import React, { useEffect } from 'react';
import { motion as m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Assets
import sheep from '@assets/images/sheep.png';
// Components
import ArrowButton from '@components/arrow-button';
import Placeholder from '@components/placeholder';
//* Animation
import secondSlideVariants from './second-slide.anim';
//* Local components
import Plus from './local-components/plus';
// Styles
import styles from './second-slide.scss';

const sc = (element: string) => styles[`second-slide__${element}`]; //* short-class

const SecondSlide: React.VFC<IProps> = ({ isMobile }) => {
  const controls = useAnimation();
  const buttonControls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView]);

  if (isMobile) {
    const mobileClass = (string: string) =>
      `${styles[string]} ${styles[`${string}--mobile`]}`;

    return (
      <div className={mobileClass('second-slide')}>
        <div className={mobileClass(sc('container'))}>
          <p className={mobileClass(sc('title'))}>
            Rediscover restfulness with our natural hemp-derived ingredient
            that’s proven to aid with sleep. No high, just clean, healthy sleep.
          </p>
          <m.div
            className={sc('list')}
            ref={ref}
            animate={controls}
            initial="hidden"
          >
            <m.p
              variants={secondSlideVariants.text(0)}
              className={mobileClass(sc('item'))}
            >
              <Plus manualStagger={0} />
              Start getting 8hrs of sleep regularly
            </m.p>
            <m.p
              variants={secondSlideVariants.text(0.25)}
              className={mobileClass(sc('item'))}
            >
              <Plus manualStagger={0.25} />
              No groggy feeling in the morning
            </m.p>
            <m.p
              variants={secondSlideVariants.text(0.4)}
              className={mobileClass(sc('item'))}
            >
              <Plus manualStagger={0.4} />
              Wake up refreshed and ready for the day
            </m.p>
          </m.div>
          <div
            className={mobileClass(sc('button'))}
            onMouseOver={() => buttonControls.start('hovered')}
            onMouseOut={() => buttonControls.start('initial')}
            onFocus={() => buttonControls.start('hovered')}
            onBlur={() => buttonControls.start('initial')}
          >
            <ArrowButton controls={buttonControls} />
            <p>Try Stay Asleep</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['second-slide']}>
      <div className={sc('container')} ref={ref}>
        <div className={sc('left')}>
          <p className={sc('title')}>
            Rediscover restfulness with our natural hemp-derived ingredient
            that’s proven to aid with sleep. No high, just clean, healthy sleep.
          </p>
          <m.div className={sc('list')} animate={controls} initial="hidden">
            <m.p variants={secondSlideVariants.text(0)} className={sc('item')}>
              <Plus manualStagger={0} />
              Start getting 8hrs of sleep regularly
            </m.p>
            <m.p
              variants={secondSlideVariants.text(0.25)}
              className={sc('item')}
            >
              <Plus manualStagger={0.25} />
              No groggy feeling in the morning
            </m.p>
            <m.p
              variants={secondSlideVariants.text(0.4)}
              className={sc('item')}
            >
              <Plus manualStagger={0.4} />
              Wake up refreshed and ready for the day
            </m.p>
          </m.div>
          <div
            className={sc('button')}
            onMouseOver={() => buttonControls.start('hovered')}
            onMouseOut={() => buttonControls.start('initial')}
            onFocus={() => buttonControls.start('hovered')}
            onBlur={() => buttonControls.start('initial')}
          >
            <ArrowButton controls={buttonControls} />
            <p>Try Stay Asleep</p>
          </div>
        </div>
        <div className={sc('right')}>
          <Placeholder
            className={sc('image')}
            background="#f5f1ed"
            options={{
              src: sheep,
              alt: 'sheep'
            }}
          />
        </div>
      </div>
    </div>
  );
};

interface IProps {
  isMobile: boolean;
}

export default SecondSlide;

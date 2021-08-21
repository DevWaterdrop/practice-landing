import React, { useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion as m,
  useAnimation,
  useTransform,
  useViewportScroll
} from 'framer-motion';
// Assets
import face from '@assets/images/face.jpeg';
import sheep from '@assets/images/sheep.png';
// Helpers
import useWindowSize from '@helpers/use-window-size';
// Components
import ArrowButton from '@components/arrow-button';
import Placeholder from '@components/placeholder';
//* Animation
import seventhSlideVariants from './seventh-slide.anim';
// Styles
import styles from './seventh-slide.scss';

const sc = (element: string) => styles[`seventh-slide__${element}`]; //* short-class

const SeventhSlide: React.VFC<IProps> = ({ isMobile }) => {
  const windowSize = useWindowSize();
  const { scrollY } = useViewportScroll();

  const controls = useAnimation();
  const buttonControls = useAnimation();

  const [hovered, setHovered] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const bounds = useMemo(() => {
    if (ref.current) {
      const { y, height } = ref.current.getBoundingClientRect();
      return [y + window.scrollY, height];
    }
    return [0, 0];
  }, [ref.current, windowSize]);

  const yTo = isMobile
    ? bounds[0] + bounds[1]
    : bounds[0] + (50 / 100) * bounds[1];
  const y = useTransform(scrollY, [bounds[0], yTo], [-40, 100]);

  const handleHover = (hover = false, button = false) => {
    const definition = hover ? 'hovered' : 'initial';

    if (button) return buttonControls.start(definition);

    return (() => {
      setHovered(hover);
      controls.start(definition);
    })();
  };

  return (
    <div className={styles['seventh-slide']} ref={ref}>
      <div className={sc('left')}>
        <div className={sc('l-container')}>
          <p className={sc('title')}>The Good Sleep Guarantee</p>
          <p className={sc('content')}>
            If you don&apos;t start sleeping better after trying Sandland,
            simply let us know and we&apos;ll happily refund you -- our products
            are that effective!
          </p>
          <m.div
            className={sc('button')}
            onHoverStart={() => handleHover(true, true)}
            onHoverEnd={() => handleHover(false, true)}
          >
            <ArrowButton controls={buttonControls} />
          </m.div>
        </div>
        {!isMobile && (
          <div className={sc('bl')}>
            <m.div
              className={sc('question')}
              initial="initial"
              animate={controls}
              variants={seventhSlideVariants.question}
              onHoverStart={() => handleHover(true)}
              onHoverEnd={() => handleHover()}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <p>?</p>
            </m.div>
            <AnimatePresence>
              {hovered && (
                <m.div
                  className={sc('bubble')}
                  initial={{ opacity: 0, y: 50 }}
                  animate="hovered"
                  variants={seventhSlideVariants.bubble}
                  onHoverStart={() => handleHover(true)}
                  onHoverEnd={() => handleHover()}
                  exit="initial"
                  transition={{ duration: 0.35 }}
                >
                  Back in 1942, Americans averaged 7.9 hrs of sleep. Today
                  it&apos;s only 6.8hr on avg!
                </m.div>
              )}
            </AnimatePresence>
            <Placeholder
              className={sc('sheep')}
              background="#ffffff"
              options={{
                src: sheep,
                alt: 'Sheep'
              }}
            />
          </div>
        )}
      </div>
      <div className={sc('right')}>
        <div className={sc('container')}>
          <m.img className={sc('face')} src={face} alt="Face" style={{ y }} />
        </div>
      </div>
      <div className={sc('badge')}>
        <div className={sc('top')}>
          <div className={sc('tl')}>
            <p>15 MIN</p>
          </div>
          <div className={sc('tr')}>
            <p>AVG TIME</p>
          </div>
        </div>
        <div className={sc('bottom')}>
          <p>TIL YOU&apos;RE SOFTLY ASLEEP</p>
        </div>
      </div>
    </div>
  );
};

interface IProps {
  isMobile: boolean;
}

export default SeventhSlide;

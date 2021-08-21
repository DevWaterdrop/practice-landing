import React, { useState } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
// Components
import Product from '@components/product';
import Badge from '@components/badge';
//* Animation
import { wordsPosition, thirdSlideVariants } from './third-slide.anim';
//* Local Components
import Char from './local-components/char';
import ThirdSlideMobile from './local-components/mobile';
// Styles
import styles from './third-slide.scss';

export const sc = (element: string) => styles[`third-slide__${element}`]; //* short-class

const ThirdSlide: React.VFC<IProps> = ({ isMobile, mobileDimension }) => {
  const [hovered, setHovered] = useState<'left' | 'right' | null>(null);

  const leftHovered = hovered === 'left' || hovered === null;
  const rightHovered = hovered === 'right' || hovered === null;

  if (isMobile) return <ThirdSlideMobile mobileDimension={mobileDimension} />;

  return (
    <div className={styles['third-slide']}>
      <div className={sc('container')}>
        <m.div
          className={sc('left')}
          initial="hidden"
          whileHover="show"
          variants={thirdSlideVariants.container}
          transition={{ duration: 0.75 }}
          onHoverStart={() => setHovered('left')}
          onHoverEnd={() => setHovered(null)}
        >
          <div className={sc('product')}>
            <Product size="smaller" img />
            <m.div
              className={`${sc('badge')} ${sc('badge--yellow')}`}
              variants={thirdSlideVariants.badge}
              transition={{ duration: 1 }}
            >
              <div className={`${sc('wrap-text')} ${sc('wrap-text--upper')}`}>
                <span style={{ transform: 'rotate(-30deg)' }}>N</span>
                <span style={{ transform: 'rotate(-20deg)' }}>O</span>
                <span style={{ transform: 'rotate(-10deg)' }}> </span>
                <span style={{ transform: 'rotate(-3deg)' }}>F</span>
                <span style={{ transform: 'rotate(5deg)' }}>O</span>
                <span style={{ transform: 'rotate(15deg)' }}>G</span>
                <span style={{ transform: 'rotate(25deg)' }}>G</span>
                <span style={{ transform: 'rotate(35deg)' }}>Y</span>
              </div>
              <AnimatePresence exitBeforeEnter>
                {hovered === 'left' && <Badge type="torus" pixel />}
              </AnimatePresence>
              <div className={`${sc('wrap-text')} ${sc('wrap-text--bottom')}`}>
                <div style={{ transform: 'rotate(-33deg)' }}>
                  <span>S</span>
                </div>
                <div style={{ transform: 'rotate(-23deg)' }}>
                  <span>G</span>
                </div>
                <div style={{ transform: 'rotate(-12deg)' }}>
                  <span>N</span>
                </div>
                <div style={{ transform: 'rotate(-1deg)' }}>
                  <span>I</span>
                </div>
                <div style={{ transform: 'rotate(3deg)' }}>
                  <span>N</span>
                </div>
                <div style={{ transform: 'rotate(14deg)' }}>
                  <span>R</span>
                </div>
                <div style={{ transform: 'rotate(24deg)' }}>
                  <span>O</span>
                </div>
                <div style={{ transform: 'rotate(35deg)' }}>
                  <span>M</span>
                </div>
              </div>
            </m.div>
          </div>
          <div className={sc('text')}>
            <p className={sc('title')}>Fall Asleep</p>
            <m.p
              className={sc('subtitle')}
              variants={thirdSlideVariants.subtitle}
              initial="show"
              animate={leftHovered ? 'show' : 'hidden'}
              transition={{ duration: 1 }}
            >
              Helps you drift off to sleep in minutes.
            </m.p>
          </div>
          <button
            className={
              hovered === 'left'
                ? `${sc('button')} ${sc('button--hovered')}`
                : sc('button')
            }
            type="button"
          >
            Shop now - $15.00
          </button>
          <m.div
            className={`${sc('back')} ${sc('back--left')}`}
            variants={thirdSlideVariants.leftBackground}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
          >
            <div className={sc('chars')}>
              {wordsPosition.first.map(({ char, pos }) => (
                <Char key={pos.rotate} show={pos}>
                  {char}
                </Char>
              ))}
            </div>
          </m.div>
        </m.div>
        <m.div
          className={sc('right')}
          initial="hidden"
          whileHover="show"
          variants={thirdSlideVariants.container}
          transition={{ duration: 0.75 }}
          onHoverStart={() => setHovered('right')}
          onHoverEnd={() => setHovered(null)}
        >
          <div className={sc('product')}>
            <Product type="pink" size="smaller" img />
            <m.div
              variants={thirdSlideVariants.badge}
              transition={{ duration: 1 }}
              className={`${sc('badge')} ${sc('badge--pink')}`}
            >
              <div className={`${sc('wrap-text')} ${sc('wrap-text--upper')}`}>
                <span style={{ transform: 'rotate(-30deg)' }}>N</span>
                <span style={{ transform: 'rotate(-20deg)' }}>O</span>
                <span style={{ transform: 'rotate(-10deg)' }}> </span>
                <span style={{ transform: 'rotate(-3deg)' }}>F</span>
                <span style={{ transform: 'rotate(5deg)' }}>O</span>
                <span style={{ transform: 'rotate(15deg)' }}>G</span>
                <span style={{ transform: 'rotate(25deg)' }}>G</span>
                <span style={{ transform: 'rotate(35deg)' }}>Y</span>
              </div>
              <AnimatePresence>
                {hovered === 'right' && <Badge type="cylinder" pixel />}
              </AnimatePresence>
              <div className={`${sc('wrap-text')} ${sc('wrap-text--bottom')}`}>
                <div style={{ transform: 'rotate(-33deg)' }}>
                  <span>S</span>
                </div>
                <div style={{ transform: 'rotate(-23deg)' }}>
                  <span>G</span>
                </div>
                <div style={{ transform: 'rotate(-12deg)' }}>
                  <span>N</span>
                </div>
                <div style={{ transform: 'rotate(-1deg)' }}>
                  <span>I</span>
                </div>
                <div style={{ transform: 'rotate(3deg)' }}>
                  <span>N</span>
                </div>
                <div style={{ transform: 'rotate(14deg)' }}>
                  <span>R</span>
                </div>
                <div style={{ transform: 'rotate(24deg)' }}>
                  <span>O</span>
                </div>
                <div style={{ transform: 'rotate(35deg)' }}>
                  <span>M</span>
                </div>
              </div>
            </m.div>
          </div>
          <div className={sc('text')}>
            <p className={sc('title')}>Stay Asleep</p>
            <m.p
              className={sc('subtitle')}
              initial="show"
              variants={thirdSlideVariants.subtitle}
              animate={rightHovered ? 'show' : 'hidden'}
              transition={{ duration: 1 }}
            >
              Try for uninterrupted sleep, no more middle of the night waking
              up.
            </m.p>
          </div>
          <button
            className={
              hovered === 'right'
                ? `${sc('button')} ${sc('button--hovered')}`
                : sc('button')
            }
            type="button"
          >
            Shop now - $20.00
          </button>
          <m.div
            className={`${sc('back')} ${sc('back--right')}`}
            variants={thirdSlideVariants.leftBackground}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
          >
            <div className={sc('chars')}>
              {wordsPosition.second.map(({ char, pos }) => (
                <Char key={pos.rotate} show={pos} right>
                  {char}
                </Char>
              ))}
            </div>
          </m.div>
        </m.div>
      </div>
    </div>
  );
};

interface IProps {
  isMobile: boolean;
  mobileDimension?: string;
}

export default ThirdSlide;

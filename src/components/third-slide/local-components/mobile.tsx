import React from 'react';
// Components
import Product from '@components/product';
import Badge from '@components/badge';
//* Local Components
import Char from './char';
//* Animation
import { wordsPosition } from '../third-slide.anim';
// Helpers
import { sc } from '../third-slide'; //* short-class
// Styles
import styles from '../third-slide.scss';

const ThirdSlideMobile: React.VFC<IProps> = ({ mobileDimension }) => (
  <div className={styles['third-slide']}>
    <div className={sc('container')}>
      <div className={sc('left')}>
        <div className={sc('product')}>
          <Product size="smaller" img />
          <div className={`${sc('badge')} ${sc('badge--yellow')}`}>
            <div
              className={`${sc('wrap-text')} ${sc('wrap-text--upper')} ${sc(
                'wrap-text--mobile'
              )}`}
            >
              <span style={{ transform: 'rotate(-30deg)' }}>N</span>
              <span style={{ transform: 'rotate(-20deg)' }}>O</span>
              <span style={{ transform: 'rotate(-10deg)' }}> </span>
              <span style={{ transform: 'rotate(-3deg)' }}>F</span>
              <span style={{ transform: 'rotate(5deg)' }}>O</span>
              <span style={{ transform: 'rotate(15deg)' }}>G</span>
              <span style={{ transform: 'rotate(25deg)' }}>G</span>
              <span style={{ transform: 'rotate(35deg)' }}>Y</span>
            </div>
            <Badge
              type="torus"
              size={mobileDimension === ('768' || '480') ? 5 : 4}
            />
            <div
              className={`${sc('wrap-text')} ${sc('wrap-text--bottom')} ${sc(
                'wrap-text--mobile'
              )}`}
            >
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
          </div>
        </div>
        <div className={sc('text')}>
          <p className={sc('title')}>Fall Asleep</p>
          <p className={sc('subtitle')}>
            Helps you drift off to sleep in minutes.
          </p>
          <button
            className={`${sc('button')} ${sc('button--hovered')}`}
            type="button"
          >
            Shop now - $15.00
          </button>
        </div>

        <div className={`${sc('back')} ${sc('back--left')}`}>
          <div className={sc('chars')}>
            {wordsPosition.mobileFirst.map(({ char, pos }) => (
              <Char key={pos.rotate} show={pos} mobile>
                {char}
              </Char>
            ))}
          </div>
        </div>
      </div>
      <div className={sc('right')}>
        <div className={sc('product')}>
          <Product type="pink" size="smaller" img />
          <div className={`${sc('badge')} ${sc('badge--pink')}`}>
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
            <Badge
              type="cylinder"
              size={mobileDimension === ('768' || '480') ? 5 : 4}
            />
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
          </div>
        </div>
        <div className={sc('text')}>
          <p className={sc('title')}>Stay Asleep</p>
          <p className={sc('subtitle')}>
            Try for uninterrupted sleep, no more middle of the night waking up.
          </p>
          <button
            className={`${sc('button')} ${sc('button--hovered')}`}
            type="button"
          >
            Shop now - $20.00
          </button>
        </div>
        <div className={`${sc('back')} ${sc('back--right')}`}>
          <div className={sc('chars')}>
            {wordsPosition.mobileSecond.map(({ char, pos }) => (
              <Char key={pos.rotate} show={pos} right mobile>
                {char}
              </Char>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface IProps {
  mobileDimension?: string;
}

export default ThirdSlideMobile;

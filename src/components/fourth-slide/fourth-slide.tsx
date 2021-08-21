import React from 'react';
import { useInView } from 'react-intersection-observer';
// Assets
import star from '@assets/icons/star.svg';
//* Local Components
import Char from './local-components/char';
import Review from './local-components/review';
//* Animation
import charPosition from './fourth-slide.anim';
// Styles
import styles from './fourth-slide.scss';

export const sc = (element: string) => styles[`fourth-slide__${element}`]; //* short-class

const FourthSlide: React.VFC = () => {
  const [ref, inView] = useInView();

  return (
    <div className={styles['fourth-slide']}>
      <div className={sc('container')} ref={ref}>
        <div className={sc('top')}>
          <div className={sc('left')}>
            <p className={sc('title')}>Good Sleeper Reviews</p>
            <p className={sc('subtitle')}>Read our customer reviews :)</p>
          </div>
          <div className={sc('right')}>
            <p className={sc('subtitle')}>4.85 - 5</p>
            <div className={sc('stars')}>
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
            </div>
          </div>
        </div>
        <div className={sc('reviews')}>
          <Review type="left" />
          <Review type="right" />
        </div>
      </div>
      <div className={sc('background')}>
        {charPosition.map((pos) => (
          <Char key={pos.rotate} inView={inView} show={pos}>
            z
          </Char>
        ))}
      </div>
    </div>
  );
};

export default FourthSlide;

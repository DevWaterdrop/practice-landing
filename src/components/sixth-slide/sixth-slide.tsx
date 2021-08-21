import React from 'react';
//* Local Components
import Slider from './local-components/slider';
// Styles
import styles from './sixth-slide.scss';

export const sc = (element: string) => styles[`sixth-slide__${element}`]; //* short-class

const SixthSlide: React.VFC = () => {
  const slides = [
    `"..I’m out like a light in no time"`,
    'I was doing more harm than good by depriving my body of the rest it requires...until Sandland',
    'Harnessing the power of plants for a better night`s sleep, naturally.'
  ];

  return (
    <div className={styles['sixth-slide']}>
      <Slider>
        {({ i }) => {
          const modulo = i % slides.length;
          const index = modulo < 0 ? slides.length + modulo : modulo;

          return (
            <p className={sc('text')} draggable={false}>
              {slides[index]}
            </p>
          );
        }}
      </Slider>
    </div>
  );
};

export default SixthSlide;

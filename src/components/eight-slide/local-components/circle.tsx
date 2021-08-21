import React from 'react';
import { motion as m, useAnimation } from 'framer-motion';
// Assets
import sheep from '@assets/images/sheep.png';
// Helpers
import { sc } from '../eight-slide'; //* short-class
//* Animation
import eightSlideVariants from '../eight-slide.anim';

const Circle: React.VFC<IProps> = (props) => {
  const { type } = props;

  const controls = useAnimation();

  if (type === 'left') {
    return (
      <m.div
        className={sc('circle')}
        variants={eightSlideVariants.circle}
        initial={eightSlideVariants.circle.hidden}
      >
        <div className={sc('outer')} />
        <div className={sc('rainbow')} />
        <div className={sc('inner')}>
          <img
            className={`${sc('sheep')} ${sc(`sheep--${type}`)}`}
            src={sheep}
            alt="Sheep left"
          />
        </div>
      </m.div>
    );
  }

  return (
    <m.div
      className={sc('circle')}
      variants={eightSlideVariants.circle}
      initial={eightSlideVariants.circle.hidden}
      onMouseEnter={() => controls.start('hovered')}
      onMouseLeave={() => controls.start('hidden')}
    >
      <div className={sc('outer')} />
      <m.div
        className={sc('rainbow')}
        animate={controls}
        variants={eightSlideVariants.rainbow}
        initial={eightSlideVariants.rainbow.hidden}
      />
      <div className={sc('inner')}>
        <img
          className={`${sc('sheep')} ${sc(`sheep--${type}`)}`}
          src={sheep}
          alt={`Sheep ${type}`}
        />
      </div>
      <m.div
        className={sc('border')}
        animate={controls}
        variants={eightSlideVariants.border}
        initial={eightSlideVariants.border.hidden}
      />
    </m.div>
  );
};

interface IProps {
  type: 'left' | 'middle' | 'right';
}

export default Circle;

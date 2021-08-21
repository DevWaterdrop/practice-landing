import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion as m } from 'framer-motion';
// Assets
import star from '@assets/icons/star.svg';
import starOutline from '@assets/icons/star-outline.svg';
//* Animation
import reviewAnimation from './review.anim';
// Helpers
import { sc } from '../fourth-slide'; //* short-class

const Review: React.VFC<IProps> = (props) => {
  const { type } = props;

  const [ref, inView] = useInView({
    triggerOnce: true
  });

  const divClass = `${sc('review')} ${sc(`review--${type}`)}`;

  const reviews = {
    left: {
      title: 'Anxious person here!',
      content:
        'I am one of the anxious people of all time. Falling asleep is so hard for me because I constantly have 400 things on my mind. Sandland`s Fall Asleep knocked me out, but I wasn`t drowsy in the morning! I have been sleeping so well! I am more productive during the day! I feel FABULOUS! I love this product!',
      location: 'Virginia, Aspen'
    },
    right: {
      title: 'I usually wake up in the middle of the night a few times',
      content:
        'its always hard to fall back to sleep again. With the Stay Asleep supplement, I only wake up once a night and fall right back asleep after I do. I feel so much more rested in the mornings now. Never groggy.',
      location: 'Greta, NYC'
    }
  };

  return (
    <m.div
      className={divClass}
      ref={ref}
      animate={inView ? reviewAnimation.visible : reviewAnimation.initial}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <m.div
        animate={inView ? reviewAnimation.visible : reviewAnimation.initial}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.2 }}
      >
        <p className={sc('rew-title')}>{reviews[type].title}</p>
        <p className={sc('content')}>{reviews[type].content}</p>
        <div className={sc('rew-bot')}>
          <p className={sc('location')}>{reviews[type].location}</p>
          <div className={`${sc('stars')} ${sc('stars--review')}`}>
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            {type === 'right' ? (
              <img src={starOutline} alt="Star outline" />
            ) : (
              <img src={star} alt="Star" />
            )}
          </div>
        </div>
      </m.div>
    </m.div>
  );
};

interface IProps {
  type: 'left' | 'right';
}

export default Review;

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion as m, useAnimation } from 'framer-motion';
// Assets
import male from '@assets/images/male.jpg';
import female from '@assets/images/female.png';
// Components
import Placeholder from '@components/placeholder';
//* Animation
import blockVariants from './block.anim';
// Helpers
import { sc } from '../fifth-slide'; //* short-class

const Block: React.VFC<IProps> = (props) => {
  const { type, isMobile = false } = props;

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }

    return () => controls.stop();
  }, [inView]);

  const isFemaleAndNotMobile = type === 'female' && !isMobile;

  const data = {
    female: {
      img: female,
      t1: 'Dr. Felicia Stoler',
      t2: `Dr. Felicia D. Stoler, DCN, MS, RDN, FACSM, FAND Diplomate ABLM/ACLM
      is an expert in nutrition, fitness, and healthy living, operating her
      own practice in New Jersey. A lifetime advocate for clean eating and
      healthy, positive living. Dr. Stoler also authored ACSM’s Sports
      Medicine Basics on Childhood Obesity.`,
      t3: `Dr. Stoler holds a Masters in applied physiology and nutrition from
      Columbia University and a doctorate in clinical nutrition from Rutgers
      University. Dr. Stoler is a Fellow of the American College of Sports
      Medicine, a Fellow of the Academy of Nutrition and Dietetics, a
      Diplomate in Lifestyle Medicine (ACBM/ACLM), and a council member of
      the True Health Initiative.`
    },
    male: {
      img: male,
      t1: 'Dr. Armia Z. Abdo',
      t2: `Dr. Armia Z. Abdo is a Doctor of Physical Therapy, entrepreneur, author, researcher, keynote speaker, teacher, and inventor. 
      He is currently the CEO/Founder of DocPhyzio, combining tech and healthcare to provide the world’s first fully automated physical therapy services. 
      Dr. Abdo received his Doctorate in Physical Therapy from Azusa Pacific University and his BS in Kinesiology from Cal State Fullerton.`
    }
  };

  return (
    <div className={sc('block')} ref={ref}>
      <div className={sc('container')}>
        <m.div animate={controls} variants={blockVariants.img} initial="hidden">
          <Placeholder
            className={sc('img')}
            background="#7da7d9"
            options={{ src: data[type].img, alt: data[type].t1 }}
          />
        </m.div>
      </div>
      <m.div
        className={sc('texts')}
        animate={controls}
        variants={blockVariants.texts}
        initial="hidden"
      >
        <m.p variants={blockVariants.text}>{data[type].t1}</m.p>
        <m.p variants={blockVariants.text}>{data[type].t2}</m.p>
        {isFemaleAndNotMobile && (
          <m.p variants={blockVariants.text}>{data.female.t3}</m.p>
        )}
      </m.div>
    </div>
  );
};

interface IProps {
  type: 'female' | 'male';
  isMobile?: boolean;
}

export default Block;

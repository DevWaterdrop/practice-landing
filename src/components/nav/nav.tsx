import React, { useEffect, useState } from 'react';
import { motion as m, useViewportScroll } from 'framer-motion';
// Styles
import styles from './nav.scss';

export const sc = (element: string) => styles[`nav__${element}`]; //* short-class

const Nav: React.VFC<IProps> = (props) => {
  const { isMobile } = props;

  const { scrollY } = useViewportScroll();

  const [hidden, setHidden] = useState(true);
  const [titleClass, setTitleClass] = useState(
    `${styles.nav} ${styles['nav--white']}`
  );

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 }
  };

  useEffect(() => {
    if (scrollY.get() < 250) {
      setTitleClass(`${styles.nav} ${styles['nav--white']}`);
      setHidden(false);
    } else {
      setTitleClass(styles.nav);
    }
  }, []);

  const update = () => {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    } else if (scrollY.get() > 100 && scrollY.get() > scrollY.getPrevious()) {
      setHidden(true);
    }
    //* Title
    if (scrollY.get() < 250) {
      setTitleClass(`${styles.nav} ${styles['nav--white']}`);
    } else {
      setTitleClass(styles.nav);
    }
  };

  useEffect(() => scrollY.onChange(() => update()));

  if (isMobile)
    return (
      <m.div
        className={`${titleClass} ${styles['nav--mobile']}`}
        variants={variants}
        initial="hidden"
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <p className={`${sc('title')} ${sc('title--mobile')}`}>Sandland</p>
      </m.div>
    );

  return (
    <m.div
      className={titleClass}
      variants={variants}
      initial="hidden"
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <div className={sc('left')}>
        <span className={sc('link')}>Fall Asleep</span>
        <span className={sc('link')}>Stay Asleep</span>
        <span className={sc('link')}>Sleep set</span>
        <span className={sc('link')}>FAQ</span>
      </div>
      <p className={sc('title')}>Sandland</p>
      <div className={sc('right')}>
        <a
          className={sc('link')}
          href="https://github.com/DevWaterdrop"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </m.div>
  );
};

interface IProps {
  isMobile: boolean;
}

export default Nav;

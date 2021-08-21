import React from 'react';
import { motion as m } from 'framer-motion';
// Components
import Product from '@components/product';
// Styles
import styles from './first-slide.scss';

const sc = (element: string) => styles[`first-slide__${element}`]; //* short-class

const FirstSlide: React.VFC = () => (
  <div className={styles['first-slide']}>
    <div className={sc('container')}>
      <div className={sc('left')}>
        <p className={sc('title')}>Where clean sleep comes easy.</p>
        <button className={sc('button')} type="button">
          Try Now
        </button>
      </div>
      <m.div
        className={sc('products')}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <div className={sc('product')}>
          <Product img />
        </div>
        <Product type="pink" img />
      </m.div>
    </div>
  </div>
);

export default FirstSlide;

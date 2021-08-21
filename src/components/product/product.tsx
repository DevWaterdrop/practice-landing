import React from 'react';
// Assets
import product from '@assets/images/product.jpg';
import productPink from '@assets/images/product-pink.jpg';
// Components
import Placeholder from '@components/placeholder';
// Styles
import styles from './product.scss';

const Product: React.VFC<IProps> = (props) => {
  const { type = 'yellow', size = 'default', img = false } = props;

  const imgClass = `${styles.product} ${styles[`product--${size}`]}`;

  return img ? (
    <Placeholder
      className={imgClass}
      background="#ffffff"
      options={{
        src: type === 'yellow' ? product : productPink,
        alt: 'product'
      }}
    />
  ) : null;
};

interface IProps {
  type?: 'pink' | 'yellow';
  size?: 'default' | 'smaller';
  img?: boolean;
}

export default Product;

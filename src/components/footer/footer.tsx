import React from 'react';
// Assets
import instagram from '@assets/icons/instagram.svg';
import facebook from '@assets/icons/facebook.svg';
// Styles
import styles from './footer.scss';

const sc = (element: string) => styles[`footer__${element}`]; //* short-class

const Footer: React.VFC = () => (
  <div className={styles.footer}>
    <div className={sc('left')}>
      <div className={sc('uls')}>
        <ul className={sc('ul')}>
          <li>Company</li>
          <li>
            <a href="/">Terms & Conditions</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">FDA Disclaimer</a>
          </li>
          <li>
            <a href="/">COA/Lab results</a>
          </li>
        </ul>
        <ul className={sc('ul')}>
          <li>Support</li>
          <li>
            <a href="/">Shipping</a>
          </li>
          <li>
            <a href="/">Returns & Refunds</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <ul className={sc('ul')}>
          <li>Social</li>
          <li>
            <img src={instagram} alt="Instagram" />
            <a href="/">Instagram</a>
          </li>
          <li>
            <img src={facebook} alt="Instagram" />
            <a href="/">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
    <div className={sc('right')}>
      <p className={sc('logo')}>Sandland</p>
    </div>
  </div>
);

export default Footer;

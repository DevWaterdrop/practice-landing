import React, { useEffect, useState } from 'react';
// Components
import Nav from '@components/nav';
import Footer from '@components/footer';
import FirstSlide from '@components/first-slide';
import SecondSlide from '@components/second-slide';
import ThirdSlide from '@components/third-slide';
import FourthSlide from '@components/fourth-slide';
import FifthSlide from '@components/fifth-slide';
import SixthSlide from '@components/sixth-slide';
import SeventhSlide from '@components/seventh-slide';
import EightSlide from '@components/eight-slide';
// Styles
import styles from './app.scss';

const App: React.VFC = () => {
  const [windowDimension, setWindowDimension] = useState<number | null>(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);

    const handleResize = () => setWindowDimension(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimension ? windowDimension <= 1024 : false;
  const getMobileDimension = () => {
    if (windowDimension) {
      if (windowDimension <= 480) return '480';
      if (windowDimension <= 768) return '768';
      if (windowDimension <= 1024) return '1024';
    }
    return undefined;
  };

  return (
    <main className={styles.main}>
      <Nav isMobile={isMobile} />
      <FirstSlide />
      <SecondSlide isMobile={isMobile} />
      <ThirdSlide isMobile={isMobile} mobileDimension={getMobileDimension()} />
      <FourthSlide />
      <FifthSlide isMobile={isMobile} />
      <SixthSlide />
      <SeventhSlide isMobile={isMobile} />
      <EightSlide />
      <Footer />
    </main>
  );
};

export default App;

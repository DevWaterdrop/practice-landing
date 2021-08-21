import React, { useEffect, useRef, useState } from 'react';
import {
  animate,
  AnimationOptions,
  PanInfo,
  useMotionValue
} from 'framer-motion';
// Assets
import tzr from '@assets/images/r1.png';
import forbes from '@assets/images/r2.png';
import thingtesting from '@assets/images/r3.png';
//* Local-components
import Slide from './slide';
// Helpers
import { sc } from '../sixth-slide'; //* short-class

const Slider: React.FC<IProps> = ({ children }) => {
  const [index, setIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<any>(null);

  const quotes = [
    { id: 'TZR', img: tzr },
    { id: 'Forbes', img: forbes },
    { id: 'Thingtesting', img: thingtesting }
  ];

  const x = useMotionValue(0);
  const range = [-1, 0, 1];

  const transition: AnimationOptions<any> = {
    type: 'spring',
    bounce: 0
  };

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;
    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, calculateNewX(), transition);
      return;
    }

    if (offset.x > clientWidth / 4) {
      setIndex(index - 1);
    } else if (offset.x < -clientWidth / 4) {
      setIndex(index + 1);
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleInfinite = () => setIndex((prev) => prev + 1);

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    resetTimeout();
    timeoutRef.current = setTimeout(() => handleInfinite(), 3000);

    return () => {
      controls.stop();
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={sc('container')}>
      <div className={sc('block')} ref={containerRef}>
        {range.map((rangeValue) => (
          <Slide
            key={rangeValue + index}
            x={x}
            onDragEnd={handleEndDrag}
            i={rangeValue + index}
            renderPage={children}
          />
        ))}
      </div>
      <div className={sc('images')}>
        {quotes.map((quote, i) => {
          const modulo = index % quotes.length;
          const compareIndex = modulo < 0 ? quotes.length + modulo : modulo;

          const rangeForHover = () => {
            if (compareIndex === 2) return [index - 2, index - 1, index];
            if (compareIndex === 1) return [index - 1, index, index + 1];
            return [index, index + 1, index + 2];
          };

          return (
            <img
              key={quote.id}
              className={
                i === compareIndex
                  ? `${sc('img')} ${sc('img--active')}`
                  : sc('img')
              }
              src={quote.img}
              alt={quote.id}
              onMouseOver={() => setIndex(rangeForHover()[i])}
              onFocus={() => setIndex(rangeForHover()[i])}
              id={quote.id}
            />
          );
        })}
      </div>
    </div>
  );
};

interface IProps {
  children: (props: { i: number }) => JSX.Element;
}

export default Slider;

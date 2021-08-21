import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, HTMLMotionProps, motion as m } from 'framer-motion';
//* Animation
import placeholderAnimation from './placeholder.anim';

const Placeholder: React.FC<IProps> = ({
  className,
  background = 'none',
  options,
  absolute = false
}) => {
  const [loaded, setLoaded] = useState(false);

  const ref = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return (
    <div
      className={className}
      style={{ position: absolute ? 'absolute' : 'relative' }}
    >
      <AnimatePresence>
        {!loaded && (
          <m.div
            variants={placeholderAnimation}
            style={{
              zIndex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              background
            }}
            initial="initial"
            exit="exit"
            key={className}
          />
        )}
      </AnimatePresence>
      <m.img
        ref={ref}
        className={className}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        {...options}
        onLoad={onLoad}
        alt={options.alt}
      />
    </div>
  );
};

interface IProps {
  className: string;
  background?: string;
  options: HTMLMotionProps<'img'>;
  absolute?: boolean;
}

export default Placeholder;

import React from 'react';
import { motion as m } from 'framer-motion';
//* Animation
import plusVariants from './plus.anim';

const Plus: React.VFC<IProps> = ({ manualStagger }) => (
  <m.span variants={plusVariants(manualStagger)}>+</m.span>
);

interface IProps {
  manualStagger: number;
}

export default Plus;

// src/components/SplineBackground.js
import React from 'react';
import Spline from '@splinetool/react-spline';
import styles from './SplineBackground.module.css';

const SplineBackground = () => {
  return (
    <div className={styles.splineBackground}>
      <Spline scene="https://prod.spline.design/EDxYZL9fzAjCFVsr/scene.splinecode" />
    </div>
  );
};

export default SplineBackground;

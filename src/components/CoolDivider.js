// CoolDivider.js
import React from 'react';
import styles from '../../public/css/CoolDivider.module.css'; 

const CoolDivider = () => {
  return (
    <div className={styles.coolDivider}>
      <div className={styles.line}></div>
      <div className={styles.decorativeElement}>
        {/* Customize this element as needed */}
        <div className={styles.innerElement}></div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default CoolDivider;
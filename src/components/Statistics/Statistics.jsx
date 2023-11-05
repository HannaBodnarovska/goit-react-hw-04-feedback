import React, { useState, useEffect, useMemo } from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  const positivePercentage = useMemo(() => (total === 0 ? 0 : (good / total) * 100), [good, total]);

  return (
    <div className={styles.container}>
      <p className={styles.item}>Good: {good}</p>
      <p className={styles.item}>Neutral: {neutral}</p>
      <p className={styles.item}>Bad: {bad}</p>
      <p className={styles.item}>Total: {total}</p>
      <p className={styles.item}>Positive feedback: {positivePercentage.toFixed(2)}%</p>
    </div>
  );
};

export default Statistics;

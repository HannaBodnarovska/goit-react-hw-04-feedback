import React, { useState, useEffect } from 'react';
import styles from './Statistics.module.css';

const Statistics = () => {
  const [good] = useState(0);
  const [neutral] = useState(0);
  const [bad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    const updatedTotal = good + neutral + bad;
    const updatedPositivePercentage = updatedTotal === 0 ? 0 : (good / updatedTotal) * 100;
    setTotal(updatedTotal);
    setPositivePercentage(updatedPositivePercentage);
  }, [good, neutral, bad]);

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

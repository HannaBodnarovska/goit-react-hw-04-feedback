import React, { useState, useEffect } from 'react';
import styles from './Statistics.module.css';

const Statistics = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {
    const total = good + neutral + bad;
    const positivePercentage = total === 0 ? 0 : (good / total) * 100;
    setTotal(total);
    setPositivePercentage(positivePercentage);
  }, [good, neutral, bad]);

  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

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

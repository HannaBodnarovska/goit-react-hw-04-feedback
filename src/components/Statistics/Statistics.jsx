import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.container}>
    <p className={styles.item}>Good: {good}</p>
    <p className={styles.item}>Neutral: {neutral}</p>
    <p className={styles.item}>Bad: {bad}</p>
    <p className={styles.item}>Total: {total}</p>
    <p className={styles.item}>Positive feedback: {positivePercentage.toFixed(2)}%</p>
  </div>
);

export default Statistics;

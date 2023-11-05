import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.container}>
    {options.map((option) => (
      <button key={option} onClick={() => onLeaveFeedback(option)} className={styles.button}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

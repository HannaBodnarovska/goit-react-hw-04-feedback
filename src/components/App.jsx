import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import styles from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (this.state.good / total) * 100;
  };

  handleFeedback = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Feedback App</h1>

        <div className={styles.feedbackContainer}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>

          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Section title="Statistics">
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={totalFeedback}
                positivePercentage={positiveFeedbackPercentage}
              />
            </Section>
          )}
        </div>
      </div>
    );
  }
}

export default App;

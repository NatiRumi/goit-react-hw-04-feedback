import React from 'react';
import Section from './Section';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, neutral, bad };

  const handleClickBtn = ({ target }) => {
    switch (target.name) {
      case 'good':
        setGood(prev => {
          return good + 1;
        });
        break;
      case 'neutral':
        setNeutral(prev => {
          return neutral + 1;
        });
        break;
      case 'bad':
        setBad(prev => {
          return bad + 1;
        });
        break;
      default:
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good + neutral + bad !== 0) {
      return Math.round((good / (good + neutral + bad)) * 100);
    } else {
      return 0;
    }
  };

  return (
    <Section
      title="Please leave feedback"
      state={state}
      onClick={handleClickBtn}
      countTotalFeedback={countTotalFeedback}
      countPositiveFeedback={countPositiveFeedbackPercentage}
    />
  );
}

export default App;

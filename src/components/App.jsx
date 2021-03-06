import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  processClick = e => {
    this.setState(prevState => ({ [e.target.id]: prevState[e.target.id] + 1 }));
  };
  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    let { good } = this.state;
    let total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  render() {
    let stateProps = Object.keys(this.state);

    let { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback();
    let goodRevPercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={stateProps}
              onLeaveFeedback={this.processClick}
            />
          }
        />

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={goodRevPercentage}
            />
          ) : (
            <Notification message="No feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

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
    let { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  render() {
    let { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback();
    let goodRevPercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section
          title={'Please leave feedback'}
          children={<FeedbackOptions onLeaveFeedback={this.processClick} />}
        />

        {total >= 1 && (
          <Section
            title={'Statistics'}
            children={
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={goodRevPercentage}
              />
            }
          />
        )}
      </>
    );
  }
}

export default App;

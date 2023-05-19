import { useState } from 'react';

import {
  Container,
  Statistics,
  FeedbackOptions,
  Section,
  Notification,
} from 'components';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    if (option === 'good') setGood(prevGood => prevGood + 1);
    if (option === 'neutral') setNeutral(prevNeutral => prevNeutral + 1);
    if (option === 'bad') setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const array = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleClick}
          options={array}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

// import { Component } from 'react';

// import {
//   Container,
//   Statistics,
//   FeedbackOptions,
//   Section,
//   Notification,
// } from 'components';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = evt => {
//     const { name } = evt.target;

//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;

//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     const optionsKeys = Object.keys(this.state);

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={optionsKeys}
//             onLeaveFeedback={this.handleClick}
//           ></FeedbackOptions>
//         </Section>
//         <Section title={'Statistics'}>
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }

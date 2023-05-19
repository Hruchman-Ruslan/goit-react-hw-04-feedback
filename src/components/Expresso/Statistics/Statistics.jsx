import React from 'react';
import PropTypes from 'prop-types';

import { List, Item, Text } from './Statistics.styled';

export const Statistics = ({
  total,
  positivePercentage,
  good,
  neutral,
  bad,
}) => {
  return (
    <List>
      <Item>
        <Text>Good: {good}</Text>
      </Item>
      <Item>
        <Text>Neutral: {neutral}</Text>
      </Item>
      <Item>
        <Text>Bad: {bad}</Text>
      </Item>
      <Item>
        <Text>Total: {total}</Text>
        <Text>Positive feedback {positivePercentage}%</Text>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import { List, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button
            option={option}
            name={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

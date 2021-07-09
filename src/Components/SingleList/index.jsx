/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { StyledList } from './style.js'

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <StyledList isSelected={isSelected}>
      <a
        onClick={() => onClickHandler(index)}
        title={text}
      >
        {text}
      </a>
    </StyledList >
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

WrappedSingleListItem.defaultProps = {
  index: null,
  isSelected: false
}

const SingleListItem = memo(WrappedSingleListItem);

export default SingleListItem
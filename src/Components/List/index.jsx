import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

import SingleListItem from '../SingleList';
import hash from '../../utils/hash'
import './style.scss'

// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // no need of this hook

  // useEffect(() => {
  //   setSelectedIndex(items);
  // }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul className='alignTextLeft'>
      {items.map((item, index) => (
        <SingleListItem
          key={hash(index)}
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          isSelected={index === selectedIndex}
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;
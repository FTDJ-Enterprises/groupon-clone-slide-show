import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Chevron = styled.div`
  position: absolute;
  top: 0px;
  left: ${(props) => (props.direction === 'left' ? 0 : 635)}px;
  height: 100%;
  background-color: #404040;
  display: inline-block;
  width: 15px;
  border-radius: 3px;
  cursor: pointer;
`;

const Polyline = styled.polyline.attrs(({ direction }) => ({
  points: direction === 'left' ? '18 20 6 12 18 4' : '6 20 18 12 6 4'
}))`
  stroke: white;
  stroke-width: 2;
  fill: none;
`;

const Svg = styled.svg.attrs(() => ({
  viewBox: '0 0 24 24'
}))`
  height: 100%;
  width: 100%;
`;

const ThumbnailChevron = ({ direction, handleClick }) => (
  <Chevron direction={direction} onClick={handleClick}>
    <Svg>
      <Polyline direction={direction} />
    </Svg>
  </Chevron>
);

ThumbnailChevron.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ThumbnailChevron;

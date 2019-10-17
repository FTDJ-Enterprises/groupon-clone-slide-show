import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg.attrs(({ length }) => ({
  width: length,
  height: length,
  viewBox: '0 0 24 24'
}))`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  position: absolute;
  top: ${(props) => 200 - (props.length / 2)}px;
  left: ${(props) => (props.direction === 'left' ? 15 : 650 - (props.length))}px;
`;

const Circle = styled.circle`
  fill: ${(props) => (props.hover ? 'white' : '#404040')};
  cx: 12;
  cy: 12;
  r: 11;
`;

const G = styled.g`
  cursor: pointer;
`;

const Polyline = styled.polyline.attrs(({ direction }) => ({
  points: direction === 'left' ? '12 15 9 12 12 9' : '12 15 15 12 12 9'
}))`
  stroke: ${(props) => (props.hover ? '#404040' : 'white')};
  stroke-width: .5;
`;

const CircleChevron = ({ direction, handleClick, length }) => {
  const [hover, setHover] = useState(false);

  const handleMouseMove = () => {
    setHover(true);
  };

  return (
    <Svg length={length} direction={direction}>
      <G
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHover(false)}
        onClick={() => handleClick()}
      >
        <Circle hover={hover} />
        <Polyline direction={direction} hover={hover} />
      </G>
    </Svg>
  );
};

CircleChevron.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
};

export default CircleChevron;

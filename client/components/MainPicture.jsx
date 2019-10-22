import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CircleChevron from './CircleChevron';

const Mask = styled.div`
  overflow: hidden;
  height: 400px;
  width: 650px;
  cursor: zoom-in;
  user-select: none;
`;

const Img = styled.img`
  transition: transform .15s, transform-origin .15s;
  transform-origin: ${(props) => props.transformOrigin};
  transform: scale(${(props) => props.scale});
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const MainPicture = ({ pictureUrl, increaseSelectedImage, decreaseSelectedImage }) => {
  const [transformOrigin, setTransformOrigin] = useState('50% 50%');
  const [scale, setScale] = useState(1);
  const [chevronDisplay, setChevronDisplay] = useState(false);
  const maskElement = useRef(null);

  const handleMouseLeave = () => {
    setScale(1);
    setTransformOrigin('50% 50%');
  };

  const handleMouseMove = (e) => {
    const maskBoundaries = maskElement.current.getBoundingClientRect();
    const x = ((e.pageX - maskBoundaries.left) / maskBoundaries.width) * 100;
    const y = ((e.pageY - maskBoundaries.top) / maskBoundaries.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
    setScale(1.5);
  };

  return (
    <Wrapper
      onMouseEnter={() => setChevronDisplay(true)}
      onMouseLeave={() => setChevronDisplay(false)}
      className="wrapper"
    >
      <Mask
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={maskElement}
        className="mask"
      >
        <Img
          src={pictureUrl}
          alt="Main product"
          scale={scale}
          transformOrigin={transformOrigin}
          className="main-picture"
        />
      </Mask>
      {chevronDisplay ? <CircleChevron direction="left" handleClick={decreaseSelectedImage} length={60} /> : null}
      {chevronDisplay ? <CircleChevron direction="right" handleClick={increaseSelectedImage} length={60} /> : null}
    </Wrapper>
  );
};

MainPicture.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  increaseSelectedImage: PropTypes.func.isRequired,
  decreaseSelectedImage: PropTypes.func.isRequired,
};

Img.propTypes = {
  scale: PropTypes.number.isRequired,
  transformOrigin: PropTypes.string.isRequired
};

export default MainPicture;

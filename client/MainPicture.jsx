import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Mask = styled.div`
  overflow: hidden;
  height: 400px;
  width: 650px;
`;

const Img = styled.img`
  transition: transform .15s, transform-origin .15s;
  transform-origin: ${(props) => props.transformOrigin};
  transform: scale(${(props) => props.scale});
`;

const MainPicture = ({ pictureUrl }) => {
  const [transformOrigin, setTransformOrigin] = useState('50% 50%');
  const [scale, setScale] = useState(1);

  const handleMouseLeave = () => {
    setScale(1);
    setTransformOrigin('50% 50%');
  };

  const handleMouseMove = (e) => {
    const x = ((e.pageX - e.target.offsetLeft) / e.target.offsetWidth) * 100;
    const y = ((e.pageY - e.target.offsetTop) / e.target.offsetHeight) * 100;
    setTransformOrigin(`${x}% ${y}%`);
    setScale(1.5);
  };

  return (
    <Mask
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
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
  );
};

MainPicture.propTypes = {
  pictureUrl: PropTypes.string.isRequired
};

Img.propTypes = {
  scale: PropTypes.number.isRequired,
  transformOrigin: PropTypes.string.isRequired
};

export default MainPicture;

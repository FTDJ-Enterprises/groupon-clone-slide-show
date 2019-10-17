import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.div`
  height: 57px;
  width: 57px;
  background-image: url(${(props) => props.productImage});
  background-size: cover;
  border: ${(props) => (props.selected ? '3px solid teal;' : 'none;')}
  border-radius: 5px;
  cursor: pointer;
  margin: 0px 5px;
  &:first-child {
    margin: 0px 5px 0px 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  margin: 10px 0px;
`;

const ImageSelection = ({ productImages, selectedImageIndex, selectImage }) => (
  <Wrapper>
    {productImages.map((productImage, i) => (
      <Thumbnail
        productImage={productImage}
        selected={selectedImageIndex === i}
        key={productImage}
        onClick={() => selectImage(i)}
        id={`thumbnail-${i}`}
      />
    ))}
  </Wrapper>
);

ImageSelection.propTypes = {
  productImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  selectImage: PropTypes.func.isRequired
};

export default ImageSelection;

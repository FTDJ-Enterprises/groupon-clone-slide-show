import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThumbnailChevron from './ThumbnailChevron';
import calculatePages from '../helpers/calculatePages';

const Thumbnail = styled.div`
  height: 57px;
  width: 57px;
  background-image: url(${(props) => props.productImage});
  background-size: cover;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  margin: 0px 5px;
  &:first-child {
    margin: 0px 5px 0px 0px;
  }
  display: inline-block;
  flex-shrink: 0;
  box-sizing: border-box;
  ${(props) => {
    if (props.selected) {
      return `
        &:after {
          content: '';
          position: absolute;
          top: 4px;
          left: 4px;
          right: 4px;
          bottom: 4px;
          z-index: 1;
          border-radius:1px
          box-shadow:
            0 0 0 2px #fff,
            0 0 0 4px #0076d6;
        }
      `;
    }
    return null;
  }}
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  transition: transform .25s;
  transform: translate(${(props) => props.translate}px, 0px);
  padding: ${(props) => (props.cursors ? '0px 20px' : '0px 0px')};
`;

const Mask = styled.div`
  overflow: hidden;
  margin: 10px 0px;
  width: 650px;
  position: relative;
`;

const ImageSelection = ({ productImages, selectedImageIndex, selectImage }) => {
  const translations = calculatePages(productImages.length);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(Math.floor(selectedImageIndex / 9));
  }, [selectedImageIndex]);

  const handleLeftClick = () => {
    if (page === 0) {
      setPage(translations.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  const handleRightClick = () => {
    if (page === translations.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Mask>
        <ImageContainer
          cursors={productImages.length > 9}
          translate={translations[page]}
          className="image-container"
        >
          {productImages.map((productImage, i) => (
            <Thumbnail
              productImage={productImage}
              selected={selectedImageIndex === i}
              key={productImage}
              onClick={() => selectImage(i)}
              id={`thumbnail-${i}`}
            />
          ))}
        </ImageContainer>
        {productImages.length <= 9
          ? null
          : <ThumbnailChevron direction="left" handleClick={handleLeftClick} />}
        {productImages.length <= 9
          ? null
          : <ThumbnailChevron direction="right" handleClick={handleRightClick} />}
      </Mask>
    </>
  );
};

ImageSelection.propTypes = {
  productImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  selectImage: PropTypes.func.isRequired
};

export default ImageSelection;

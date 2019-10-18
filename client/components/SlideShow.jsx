import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainPicture from './MainPicture';
import ImageSelection from './ImageSelection';

const SlideShow = ({ productImages }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // This function is for decrementing the selected image, which will be in a future PR
  const increaseSelectedImage = () => {
    if (selectedImageIndex === productImages.length - 1) {
      setSelectedImageIndex(0);
    } else {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // This function is for decrementing the selected image, which will be in a future PR
  const decreaseSelectedImage = () => {
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(productImages.length - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <div>
      <MainPicture
        pictureUrl={productImages[selectedImageIndex] || 'https://via.placeholder.com/650x400'}
        increaseSelectedImage={increaseSelectedImage}
        decreaseSelectedImage={decreaseSelectedImage}
      />
      <ImageSelection
        productImages={productImages}
        selectedImageIndex={selectedImageIndex}
        selectImage={setSelectedImageIndex}
      />
    </div>
  );
};

SlideShow.propTypes = {
  productImages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SlideShow;

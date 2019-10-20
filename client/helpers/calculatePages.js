// One full page = 603px, 9 images

// Each image is 67px

const calculatePages = (productImagesNum) => {
  const out = [];

  const fullPages = Math.floor(productImagesNum / 9);
  for (let i = 0; i < fullPages; i++) {
    if (i === 0) {
      out.push(0);
    } else {
      out.push(i * -603);
    }
  }

  const remainingImages = productImagesNum % 9;
  out.push(out[out.length - 1] - (remainingImages * 63) + 5);

  return out;
};

export default calculatePages;

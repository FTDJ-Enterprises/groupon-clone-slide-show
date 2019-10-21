export default () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('productId');

  return fetch(`http://localhost:3002/api/images/${productId}`)
    .then((res) => res.json())
    .then((data) => data[0].imageUrls)
    .catch((err) => console.error(err));
};

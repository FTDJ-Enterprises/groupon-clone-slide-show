export default () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('productId');

  return fetch(`/api/images/${productId}`)
    .then((res) => res.json())
    .then((data) => data[0].imageUrls);
};

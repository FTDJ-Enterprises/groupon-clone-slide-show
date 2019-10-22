import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SlideShow from './components/SlideShow';
import getImages from './api/getImages';

const App = () => {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    getImages().then(setProductImages);
  }, []);

  return <SlideShow productImages={productImages} />;
};

ReactDOM.render(
  <App />,
  document.getElementById('slide-show')
);

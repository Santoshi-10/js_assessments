import React, { useState } from 'react';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <div>
      <button onClick={prev}>Previous</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={next}>Next</button>
    </div>
  );
}

export default Carousel;

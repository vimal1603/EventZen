
import React, { useState, useEffect } from 'react';
import a1 from "../Images/a2.avif"
import a2 from "../Images/a1.jpg"
import a3 from "../Images/a2.jpg"
import a4 from "../Images/a3.jpg"
import a5 from "../Images/a5.webp"
const SlideShow = () => {
    const interval=3500;
    const images=[a1,a2,a3,a4,a5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, interval);

    return () => clearInterval(intervalId);
  }, [5, interval]);

  return (
    <div className="slideshow">
      <img style={{borderRadius:'30px'}} height={"450vh"} width={"900vw"} src={images[currentIndex]}  />
    </div>
  );
};

export default SlideShow;


import React, { useState, useEffect } from 'react';
import a1 from "../Images/officeparty.jpg"
import a2 from "../Images/baboutus.jpeg"
import a3 from "../Images/marrege.jpg"
import a4 from "../Images/off.jpg"
// import a5 from "../Images/a5.webp"
const SlideShow = () => {
    const interval=2000;
    const images=[a1,a2,a3,a4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, interval);

    return () => clearInterval(intervalId);
  }, [5, interval]);

  return (
    <div>
      <center>
      <img style={{borderRadius:'30px'}} height={"500vh"} width={"1100vw"} src={images[currentIndex]}  />
    </center>
    </div>
  );
};

export default SlideShow;

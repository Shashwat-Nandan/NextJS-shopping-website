import React, { useState, useEffect } from "react";

import styles from "../styles/Carousel.module.css";

const Carousel = ({ carouselItems, ...rest }) => {
  const [active, setActive] = useState(0);
  //   let scrollInterval = null;

  useEffect(() => {
    let scrollInterval = setTimeout(() => {
      setActive((active + 1) % carouselItems.length);
    }, 2000);
    return () => clearTimeout(scrollInterval);
  });

  return (
    <div className={styles.carousel}>
      {carouselItems.map((item, index) => {
        const activeClass = active === index ? "visible" : "";
        return React.cloneElement(item, {
          ...rest,
          className: `carousel-item ${activeClass}`,
        });
      })}
    </div>
  );
};

export default Carousel;

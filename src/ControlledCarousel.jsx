import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carouse1 from "./assets/images/Carouse1.jpg";
import Carouse2 from "./assets/images/Carouse2.jpg";
import Carouse3 from "./assets/images/Carouse3.jpg";
// SCSS
import style from "./Carousel.module.scss";





function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className={style.carousel} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="img-container">
          <img className={style.carousel_img} src={Carouse2} alt="Carousel" text="First slide" />
        </div>
        <Carousel.Caption>
          <h1>حجم صغير وبقوة مضاعفة.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img className={style.carousel_img} src={Carouse1} alt="Carousel" text="Second slide" />
        </div>
        <Carousel.Caption>
        <h1>جودة عالية وكفالة لمدة ثلاث سنوات.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img className={style.carousel_img} src={Carouse3} alt="Carousel" text="Third slide" />
        </div>
        <Carousel.Caption>
        <h1>صديقة للبيئة استهلاك منخفض للطاقة والمياه.</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

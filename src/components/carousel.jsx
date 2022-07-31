import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../pages/img/image2.JPG'
import img3 from '../pages/img/image3.JPG'
import img4 from '../pages/img/image4.JPG'
import img6 from '../pages/img/image6.jpg'

function CarouselCasamento() {
  return (
    <Carousel variant="ligth">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{borderRadius: '5px'}}
          src={img6}
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{borderRadius: '5px'}}
          src={img2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{borderRadius: '5px'}}
          src={img3}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{borderRadius: '5px'}}
          src={img4}
          alt="First slide"
        />
        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselCasamento;
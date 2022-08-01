import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../pages/img/image2.2.jpg'
import img3 from '../pages/img/image3.3.jpg'
import img4 from '../pages/img/image4.4.jpg'
import img6 from '../pages/img/image6.6.jpg'
import img7 from '../pages/img/image7.JPG'
import img8 from '../pages/img/imgCapa.1.jpg'

function CarouselCasamento() {
  return (
    <Carousel variant="ligth" style={{ 
      width:'100%',
      height:"420px",
      borderRadius: '5px'
                                     
    }} >
      <Carousel.Item>        
        <div
          style={{ 
                width:'100%',
                height:'420px',
                borderRadius: '5px',
                backgroundImage: `url('${img6}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',                                
          }} 
        />
      </Carousel.Item>

      <Carousel.Item>        
        <div
          style={{ 
                width:'100%',
                height:'420px',
                borderRadius: '5px',
                backgroundImage: `url('${img2}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',                                
          }} 
        />
      </Carousel.Item>
      <Carousel.Item>        
        <div
          style={{ 
                width:'100%',
                height:'420px',
                borderRadius: '5px',
                backgroundImage: `url('${img3}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',                                
          }} 
        />
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{ 
                width:'100%',
                height:'420px',
                borderRadius: '5px',
                backgroundImage: `url('${img4}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',                                
          }} 
        />
      </Carousel.Item>
      <Carousel.Item>        
        <div
          style={{ 
                width:'100%',
                height:'420px',
                borderRadius: '5px',
                backgroundImage: `url('${img7}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',                                
          }} 
        />        
      </Carousel.Item>
      <Carousel.Item>        
        <div
          style={{ 
                width:'100%',
                height:'420px',
                borderRadius: '5px',
                backgroundImage: `url('${img8}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',                                
          }} 
        />        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselCasamento;
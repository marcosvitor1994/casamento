import React, { useEffect } from "react";
import ApiBase from "../services/ApiBase";
import { Col, Container, Row } from "react-bootstrap";
import save from './img/Save the date.png';
import CarouselCasamento from '../components/carousel';
import foto from './img/image1.1.jpg'


const Home = () => {

  const center = {
    background : 'rgba(255,255,255, 0.95)',
    borderRadius: '15px'
  }

  useEffect(() => {
    ApiBase.get("/item").then((result) => {
        console.log('ok')        
      }).catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <>
      
      <Container>
        <Row style={center} >
          
          <Col md={12}>
              <br />
              <h1 style={{fontFamily: "Great Vibes"}}>Ana Júlia e Marcos Vitor</h1>
              
          </Col>
          
          <Col md={12}>
            <div
              style={{ 
                width:'100%',
                height:"420px",
                borderRadius: '5px',
                backgroundImage: `url('${foto}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',                                
              }} 
            />
          </Col>
          
          <Col md={12}>
              <br />              
              <p className='lead' align="justify">
                Aqui vamos compartilhar com vocês, queridos amigos e familiares, o momento mais marcante da nossa história de amor. A contagem regressiva começa, o frio na barriga e toda a ansiedade do dia mais esperado de nossas vidas nos enche de alegria em tê-los ao nosso lado. Vamos juntos nesse grande sonho, o dia em que uniremos nossas almas e corpos para sempre, o dia do nosso casamento.
              </p>
              <span>&nbsp;</span>
          </Col>
          
          <Col md={6}> 
            <h3 style={{fontFamily: "Great Vibes"}}>Nossas Fotos</h3>
            <CarouselCasamento />
            <span>&nbsp;</span>

          </Col>
          
          <Col className='responsive' md={6}>
            <h3 style={{fontFamily: "Great Vibes"}}>Guarde a Data</h3>
            <img
              src={save}
              className="img-fluid"
              style={{borderRadius: '5px'}}
              width='646'
              height="auto"
              alt="Save"
            /> 
          <span>&nbsp;</span>
                        
          </Col>
        
         
        </Row>
      </Container>
      <br />

    </>
  )
}

export default Home
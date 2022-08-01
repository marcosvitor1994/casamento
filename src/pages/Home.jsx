import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import ApiBase from "../services/ApiBase";
import { Button, Col, Container, Row } from "react-bootstrap";
import CarouselCasamento from '../components/carousel';
import save from './img/Save the date.png';
import foto from './img/image1.1.webp';


const Home = () => {

  const center = {
    background : 'rgba(255,255,255, 0.95)',
    borderRadius: '15px'
  }

  useEffect(() => {
    ApiBase.get("/item").then((result) => {
        console.log('Marcos Vitor Desenvolvedor')        
      }).catch((error) => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate();
  const presenca = () => {
    navigate('/confirmacao', window.scrollTo(0, 0))
  }
  const presentes = () => {
    navigate('/lista', window.scrollTo(0, 0))
  }

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
          
          <Col md={6}>
            <h3 style={{fontFamily: "Great Vibes"}}>Guarde a Data</h3>
            <img
              src={save}
              className="img-fluid"
              style={{
                borderRadius: '5px',
                width:'auto',
                height:"420px"
              }}
              
              alt="Save"
            /> 
          <span>&nbsp;</span>
                        
          </Col>
          <Col md={12}> 
              <br />              
                         
              <h3 style={{fontFamily: "Great Vibes"}}>Confirme Presença</h3>
              <p className='lead' align="center">
                Faça parte da nossa história de amor, confirme sua presença
              </p>
              <Button variant="outline-danger" onClick={presenca}>
                  Confirmar Presença
              </Button>


          </Col>
          <span>&nbsp;</span>

          <Col md={12}>     
              <br />              
                     
              <h3 style={{fontFamily: "Great Vibes"}}>Lista de presentes</h3>
              <p className='lead' align="center">
                Caso queira nos presentear fizemos uma lista de sugestões
              </p>
              <Button variant="outline-danger" onClick={presentes}>
                  Nossa lista de presentes
              </Button>
          </Col>
          <span>&nbsp;</span>
        
         
        </Row>
      </Container>
      <br />

    </>
  )
}

export default Home
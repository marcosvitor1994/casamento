import React from 'react'
import { useNavigate } from "react-router";
import { Button, Col, Container, Row } from 'react-bootstrap';

const Gerente = () => {

    const center = {
        background : 'rgba(255,255,255, 0.95)',
        borderRadius: '15px'
    };
    const navigate = useNavigate();


  return (
    <>
    
    <Container>
        <Row style={center}>
          <Col md={12}>
            
          <br />
            
            <h1 style={{fontFamily: "Great vibes"}}>Gerente Noivos</h1>
            
            
         </Col>

         <Col md={12}>     
              <br />              
                     
              <h3 style={{fontFamily: "Great Vibes"}}>Lista de confirmados</h3>
              
              <Button variant="outline-danger" onClick={() => navigate('/confirmacao/lista', window.scrollTo(0, 0))}>
                  Confirmados
              </Button>
          </Col>
          <span>&nbsp;</span>
          <Col md={12}>     
              <br />              
                     
              <h3 style={{fontFamily: "Great Vibes"}}>Presentes selecionados</h3>
              
              <Button variant="outline-danger" onClick={() => navigate('/lista/escolhas', window.scrollTo(0, 0))}>
                  Presentes
              </Button>
          </Col>
          <span>&nbsp;</span>
          <Col md={12}>     
              <br />              
                     
              <h3 style={{fontFamily: "Great Vibes"}}>Adicionar presente</h3>
              
              <Button variant="outline-danger" onClick={() => navigate('/lista/add', window.scrollTo(0, 0))}>
                  Adicionar
              </Button>
          </Col>
          <span>&nbsp;</span>

        </Row>  
    </Container>
    </>
  )
}

export default Gerente
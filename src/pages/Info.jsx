import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cartao from '../components/card'


const Info = () => {

  const center = {
    background : 'rgba(255,255,255, 0.95)',
    borderRadius: '15px'
  }

  return (
    <>
       <Container>
        <Row style={center}>
          <Col md={12}>            
          <br />
            
            <h1 style={{fontFamily: "Great vibes"}}>Informações</h1>
          <br />
                       
         </Col>

         <Col md={4}>
          <Cartao 
            titulo='Local' 
            src='https://cdn0.casamentos.com.br/vendor/7407/3_2/960/jpg/salo-a-noite_13_87407-164337396961881.jpeg' 
            texto='Mansão Varandas Park'
          />
         <span>&nbsp;</span>

         </Col>


         <Col md={4}>
          <Cartao 
            titulo='Data' 
            src='https://cdn0.casamentos.com.br/vendor/7407/3_2/960/jpg/2a607465-6277-42ec-b592-cf8fb3ffede7_13_87407-164337946835111.jpeg' 
            texto='21 de Janeiro de 2023'
          />
         <span>&nbsp;</span>

         </Col>
         
         <Col md={4}>
          <Cartao 
            titulo='Hora' 
            src='https://cdn0.casamentos.com.br/real-wedding-photo/119/original/960/jpg/150737.webp'
            texto='16:30'
          />
         <span>&nbsp;</span>

         </Col>

         <Col md={12}>            
            
            <h5 style={{fontFamily: "Cinzel"}}>Mapa</h5>
                                 
         </Col>
            
          <iframe title='localização' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7676.5289906940425!2d-47.998836!3d-15.842689999999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d83963bf65ae561!2sVarandas%20Park!5e0!3m2!1spt-BR!2sus!4v1658975718733!5m2!1spt-BR!2sus" width="auto" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
          <span>&nbsp;</span>
                                 
         

        </Row>
      </Container>
      <br />
    </>
  )
}

export default Info

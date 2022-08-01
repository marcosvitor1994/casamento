import React from 'react'
import { Button, Card, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from "react-router";
import ApiBase from '../services/ApiBase';
import { mask, unMask } from 'remask';
import { useForm } from 'react-hook-form';
import imgContato from './img/img_contato.1.webp'


const Contato = () => {

  const center = {
    background : 'rgba(255,255,255, 0.95)',
    borderRadius: '15px'
  }

  const { register, setValue, handleSubmit } = useForm()

  const navigate = useNavigate();

  function handleSubmit2(event) {
      novoEvento(event)
  }

  function novoEvento (props){
      const contato = props
      ApiBase.post(`/contato`, {contato})
      .then((response) => alert('Contato enviado! Aguarde e entraremos em contato.', navigate('/home')))
      .catch((error)=>{
          console.error('Error: ', error)
      })  

  }
  
  //mask + add value 
  function handleChange(event) {
      const name = event.target.name
      const mascara = event.target.getAttribute('mask')

      let valor = unMask(event.target.value)
      valor = mask(valor, mascara)

      setValue(name, valor)
  }
  

  return (
    <>
      <Container>
        <Row style={center} className='responsive'>
            <Col md={12}>
            
            <br />
              
              <h1 style={{fontFamily: "Great vibes"}}>Deixe uma Mensagem</h1>
              <p style={{fontFamily: "Cinzel"}}>
                Entre em contato para qualquer dúvida
              </p>
              
           </Col>
          
          <Col md={6} className='resonsive' > 
          <br />
          
          <div
          style={{ 
                width:'100%',
                height:'620px',
                borderRadius: '5px',
                backgroundImage: `url('${imgContato}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',                                
          }} 
          />
          <span>&nbsp;</span>

          </Col>
          <Col md={6} className='responsive lead' align='left'>
          <br />
            <Row>
              <Col md={12} className='responsive'>
                Contato dos noivos:
              </Col>
              <Col md={12} className='responsive'>
                E-mail: casamentoanajuliaemarcos@gmail.com
              </Col>
              <Col md={12}>
                Telefone: (61) 98557-6437
              </Col>
            </Row>
                    <br />    
            <Card border="danger" >
                <Card.Header>
                  <Container>
                    <Row>
                      <Col>
                        Deixe uma mensagem para os noivos    
                      </Col>
                    </Row>
                  </Container>
                  
                </Card.Header>
                <Card.Body>
                    <Card.Text align="left">
                        <Form onSubmit={handleSubmit(handleSubmit2)} >
                        <Container>
                        <Row>                                    
                            <Col md={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" {...register("email")} placeholder="exemplo@email.com" required/>                       
                            </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Label>Telefone:</Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type="text" 
                                            {...register("telefone")} 
                                            mask="(99) 99999-9999" 
                                            onChange={handleChange}
                                            placeholder="(00) 00000-0000"
                                            required
                                        />
                                    </InputGroup>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <FloatingLabel label="Mensagem">
                                                    
                                    <Form.Control 
                                        as="textarea" 
                                        placeholder="Texto" 
                                        {...register("message")} 
                                        style={{ height: '100px' }}
                                        required
                                    />
                                                
                                </FloatingLabel>
                                                
                                </Form.Group>
                                </Col >
                                <Col align="right">
                                     <Button variant="outline-danger"   type="submit" className="w-50">
                                         Enviar mensagem
                                     </Button>
                                </Col>

                                </Row>
                                </Container>

                                </Form>

                            </Card.Text>
                </Card.Body>
            </Card>
            <br />
                        
         </Col>
         
         

        </Row>
      </Container>
      <br />
    </>
  )
}

export default Contato
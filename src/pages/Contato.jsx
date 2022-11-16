import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import ApiBase from '../services/ApiBase';
import { mask, unMask } from 'remask';
import { useForm } from 'react-hook-form';
import imgContato from './img/img_contato.1.webp'
import Data from "../components/Data";


const Contato = () => {

  const center = {
    background : 'rgba(255,255,255, 0.95)',
    borderRadius: '15px'
  }

  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    ApiBase.get("/contato").then((result) => {
      setResponseData(result.data.contatos)        
      }).catch((error) => {
        console.error(error);
      });
  }, []);


  const { register, setValue, handleSubmit } = useForm()

  function handleSubmit2(event) {
      novoEvento(event)
  }

  function novoEvento (props){
      const contato = props
      ApiBase.post(`/contato`, {contato})
      .then((response) => alert('Mensagem enviada! Agradecemos pelo carinho.', window.location.reload(false)))
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
        <Row style={center}>
            <Col md={12}>            
            <br />              
              <h1 style={{fontFamily: "Great vibes"}}>Deixe uma Mensagem</h1>              
            <br /> 
           </Col>
          
          <Col md={6}> 
          
          <div
          style={{ 
                width:'100%',
                height:'520px',
                borderRadius: '5px',
                backgroundImage: `url('${imgContato}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',                                
          }} 
          />          

          </Col>
          <Col md={6} className='lead' align='left' >
            <Card border="danger" style={{height: '100%'}}>
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
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text" {...register("nome")} placeholder="Nome completo" required/>                       
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
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <FloatingLabel label="Mensagem">
                                                    
                                    <Form.Control 
                                        as="textarea" 
                                        placeholder="Texto" 
                                        {...register("message")} 
                                        style={{ height: '150px' }}
                                        required
                                    />
                                                
                                </FloatingLabel>
                                                
                                </Form.Group>
                                </Col >
                                <Col align="right">
                                    <br />
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
                        
         </Col>
         <Col md={12}>
         <span>&nbsp;</span>           

           <h3 style={{fontFamily: "Great Vibes"}}>Mensagens</h3>
           

         </Col>
         <Col md={12}>
            {responseData.map((files) => (
              <>
                <Alert key={files.id} variant='danger' style={{fontFamily: "Cinzel"}}>
                  <Row>
                    <Col>
                      <h4 align='left' style={{fontFamily: "Great Vibes"}}>{files.nome}:</h4>
                    </Col>
                    <Col>
                      <Data>{files.createdAt}</Data>
                    </Col>
                  </Row>                  
                  
                  {files.message}
                  <hr />
                </Alert>
                
              </>
            ))}
         </Col>
         
        <Col md={12}>
          <h3 style={{fontFamily: "Great Vibes"}}>Contato dos noivos:</h3> 
          <p style={{fontFamily: "Cinzel"}}>
                Entre em contato para qualquer dúvida
          </p>               
        </Col>
        <Col md={12} className='lead'>
                E-mail:
                <br />
                casamentoanajuliaemarcos@gmail.com
        </Col>
        <Col md={12} className='lead'>
                Telefones:
                  <br />
                (61) 98557-6437 Ana Júlia 
                  <br />
                (61) 98383-0910 Marcos Vitor
        </Col>
        <span>&nbsp;</span>           


        </Row>
      </Container>
      <br />
    </>
  )
}

export default Contato
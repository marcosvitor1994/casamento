import React from 'react'
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import ApiBase from '../services/ApiBase';
import { mask, unMask } from 'remask';
import { useForm } from 'react-hook-form';

const Confirmacao = () => {

  const center = {
    background : 'rgba(255,255,255, 0.95)',
    borderRadius: '15px'
  };

  const { register, setValue, handleSubmit } = useForm();

  function handleSubmit2(event) {
    novoEvento(event)
  };

  function novoEvento (props){
      const novoConvidado = props
      ApiBase.post(`/convidado`, {novoConvidado})
      .then((response) => alert('Confirmação enviada! Muito obrigado.', window.location.reload(false)))
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
            
            <h1 style={{fontFamily: "Great vibes"}}>Confirmação de presença</h1>
            <p style={{fontFamily: "Cinzel"}}>
              olá, convidado, sua presença é muito importante para nós!
            </p>            
            
         </Col>
         <Col md={12} className='lead'>

          <Card border='light'>
                <Card.Body >
                    <Card.Text align="left">
                        <Form onSubmit={handleSubmit(handleSubmit2)} >
                        <Container>
                        <Row>
                            <Col md={5}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Convidado:</Form.Label>
                                <Form.Control 
                                  type="text" 
                                  {...register("nome")} 
                                  placeholder="Nome completo" 
                                  required
                                />                       
                            </Form.Group>
                            </Col>
                            <Col md={4}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control 
                                  type="email" 
                                  {...register("email")} 
                                  placeholder="exemplo@email.com" 
                                  required
                                />                       
                            </Form.Group>
                            </Col>                            
                            <Col md={3}>
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
                            <Col md={8}>          
                              <Row>                 
                              <Col key={`inline-'radio'`} md={6}>
                                <span>Você irá ao evento?</span>
                              </Col>
                              <Col>
                                <Form.Check
                                    inline
                                    label="Sim"
                                    onClick={() => setValue('resposta', 'sim')}                                
                                    name="group1"
                                    type='radio'
                                    id={`inline-'radio'-1`}
                                  />
                              </Col>
                                <Col>
                                <Form.Check
                                  inline
                                  label="Não"
                                  onClick={() => setValue('resposta', 'não')}
                                  name="group1"
                                  type='radio'
                                  id={`inline-'radio'-2`}
                                />
                                </Col>  
                              </Row>
                            </Col>
                                <Col align="right">
                                  <br />
                                     <Button 
                                        variant="outline-danger" 
                                        type="submit"
                                        className='w-100'
                                      >
                                         Confirmar
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
          <Col md={12} align='left'>
            
            <h3 style={{fontFamily: "Great vibes"}}>Observações:</h3>

            <ul>
            <li><p >
              Os convites físicos serão enviados somente após confirmação de presença no site ou WhatsApp. 
            </p></li>
            <li><p >
              Os convites são restritos para os nomes citados durante o envio do Save The Date.
            </p></li> 
            <li><p >
              O convite não pode ser transferido a terceiros que não foram citados durante o envio do Save The Date.
            </p></li> 
            </ul> 
          </Col>
         
        </Row>
      </Container>
      <br />    
    </>
  )
}

export default Confirmacao
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ApiBase from "../../services/ApiBase";

const AddPresente = () => {

    const center = {
        background : 'rgba(255,255,255, 0.95)',
        borderRadius: '15px'
    };

    //alimentado os dados
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        ApiBase.get("/item").then((result) => {
        setResponseData(result.data.item)        
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    //enviando dados
    const { register, handleSubmit } = useForm();

    function handleSubmit2(event) {
        novoEvento(event)
      };
    
      function novoEvento (props){
        const envioItem = props
        ApiBase.post(`/item`, {envioItem})
        .then((response) => alert('Presente adicionado!', window.location.reload(false))
        ).catch((error)=>{
            console.error('Error: ', error)
        })
      }




  return (
    <>
    
    <Container>
        <Row style={center}>
          <Col md={12}>
            
          <br />
            <h1 style={{fontFamily: "Great vibes"}}>Adicionar Presente</h1>
          <br />

         </Col>

         <Col md={12}>
            <Form onSubmit={handleSubmit(handleSubmit2)} align='left'>
                <Container>
                    <Row>
                        <Col md={6}>
            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nome do Item:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    {...register("item")} 
                                    placeholder="Nome do item" 
                                    required
                                />                       
                            </Form.Group>
                        </Col>
                        <Col md={6}>
            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Descrição:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    {...register("descricao")} 
                                    placeholder="Descrição" 
                                    required
                                />                       
                            </Form.Group>
                        </Col>
                        <Col md={8}>
            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Imagem:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    {...register("src")} 
                                    placeholder="link" 
                                    required
                                />                       
                            </Form.Group>
                        </Col>
                        <Col md={4}>
            
                            <Form.Label><span>&nbsp;</span></Form.Label>
                            <Button variant="primary" type="submit" className="w-100" style={{}}>Adicionar presente</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
                        
         </Col>
         <Col md={12}>
            
          <br />
            <h4 style={{fontFamily: "Cinzel"}}>Lista:</h4>
          

         </Col>
        {responseData.map((data) => (
              <Col md={3} >

                <Card bg='light' border="danger" style={{height: '100%'}}>
                  
                  <Card.Img 
                    key={data._id} 
                    style={{ height:'100%', width:'100%' }}
                    variant="top" 
                    src={data.src} 
                  />
                    <Card.Body align='left'> 
                      <Card.Title>{data.item}</Card.Title>
                      <Card.Text style={{height: '4rem'}}>
                          {data.descricao}
                      </Card.Text>

                    </Card.Body>
                    <Button variant="danger">Presentear</Button>
                                
                </Card>
              </Col>

        ))}
        <span>&nbsp;</span>
        </Row>
    </Container>
    
    
    </>
  )
}

export default AddPresente
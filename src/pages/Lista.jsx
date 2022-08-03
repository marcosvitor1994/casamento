import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { mask, unMask } from 'remask';
import ApiBase from "../services/ApiBase";

const Lista = () => {

  const center = {
    background : 'rgba(255,255,255, 0.95)',
    borderRadius: '15px'
  }

  //resgatando dados 
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    ApiBase.get("/item").then((result) => {
      setResponseData(result.data.item)        
      }).catch((error) => {
        console.error(error);
      });
  }, []);

  //enviar presente
  const [item, setItem] = useState({});

  const { register, setValue, handleSubmit } = useForm();
  function handleSubmit2(event) {
    
    setValue("item", item.item)
    setValue("descricao", item.descricao)
    novoEvento(event)
  };

  function novoEvento (props){
    const envioEscolha = props
    ApiBase.post(`/escolha`, {envioEscolha})
    .then((response) => alert('Presente escolhido! Muito obrigado.', window.location.reload(false), excluirItem())
    ).catch((error)=>{
        console.error('Error: ', error)
    })
  }

  //excluindo item da lista
  const [id, setId] = useState({});

  function excluirItem() {
    ApiBase.delete(`/item/${id}`).then((response) => console.log('sucesso')).catch((err) => console.log(err));
  }
  //mask + add value 
  function handleChange(event) {
    const name = event.target.name
    const mascara = event.target.getAttribute('mask')

    let valor = unMask(event.target.value)
    valor = mask(valor, mascara)

    setValue(name, valor)

  }

  //modal
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setId(id);
    ApiBase.get(`/item/${id}`)
      .then((data) => {
        setItem(data.data.item);
        setShow(true);           
      }).catch((error) => {
        console.error(error)
      });
  };

  //pix
  const [show2, setShow2] = useState(false);
  
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
    setValue("item", 'Pix')
  }; 

  return (
    <>
       <Container>
        <Row style={center}>
          <Col md={12}>
            
          <br />
            <h1 style={{fontFamily: "Great vibes"}}>Lista de Presentes</h1>
            <p style={{fontFamily: "Cinzel"}}>
              Sua presença já é nosso maior presente,
            </p>
            <p style={{fontFamily: "Cinzel"}}>
              mas caso queira nos presentear segue uma lista com alguns itens
            </p>
            
          <br />

         </Col>
         <Col md={12} align='left'>
            
            <h3 style={{fontFamily: "Great vibes"}}>Observações:</h3>

            <ul>
            <li><p >
              Fotos meramente ilustrativas. Fique à vontade para escolher a marca, o valor e onde comprar.
            </p></li>
            <li><p >
              Reserve um presente para não haver repetições.
            </p></li> 
            </ul> 
          </Col>
         <Col md={3} style={{marginBottom: '15px'}}>

            <Card bg='light' border="danger" style={{height: '100%'}}>
              <Link onClick={() => handleShow2()} to={() => handleShow2()}> 
              <Card.Img 
                key='pix' 
                style={{ height:'100%', width:'100%' }} 
                variant="top" 
                src="https://www.safra.com.br/data/files/44/42/0B/06/781B4710A3C9E327E03EF9C2/smartphone-logotipopix.png"
              /></Link>
                <Card.Body align='left'> 
                  <Card.Title>Envie um Pix</Card.Title>
                  <Card.Text style={{maxHeight: '4rem'}}>
                    Nos ajude com qualquer valor.
                  </Card.Text>

                </Card.Body>
                <Button variant="danger" onClick={() => handleShow2()}>Presentear</Button>
                            
            </Card>
          </Col>



            {responseData.map((data) => (
              <Col md={3} style={{marginBottom: '15px'}}>

                <Card bg='light' border="danger" style={{ height: '100%' }}>
                  <Link onClick={() => handleShow(data._id)} to={() => handleShow(data._id)}> 
                  <Card.Img 
                    key={data._id} 
                    style={{ height:'100%', width:'100%' }}
                    variant="top" 
                    src={data.src} 
                  /></Link>
                    <Card.Body align='left'> 
                      <Card.Title>{data.item}</Card.Title>
                      <Card.Text style={{height: '4rem'}}>
                          {data.descricao}
                      </Card.Text>

                    </Card.Body>
                    <Button variant="danger" onClick={() => handleShow(data._id)}>Presentear</Button>
                </Card>
              </Col>
              

            ))}

        <span>&nbsp;</span>

        </Row>
      </Container>
      <br />

      {item._id && (
        <>
          <Modal
            show={show} 
            onHide={handleClose}
            size="lg" aria-labelledby="contained-modal-title-vcenter"
            centered 
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {item.item}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col md={2}>
                    <img 
                      alt="item" 
                      src={item.src} 
                      style={{borderRadius: '5px'}}
                      className="img-fluid"
                      width='auto'
                      height="auto"
                    />
                  </Col>
                  <Col md={10}>
                    <h4>{item.descricao}</h4>    
                  </Col>
                </Row>
              </Container>
              <hr />
              
                <Form onSubmit={handleSubmit(handleSubmit2)} >
                  <Container>
                  <Row>
                      <Col md={5}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Nome:</Form.Label>
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
                            placeholder="examplo@email.com" 
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
                      <Col md={12}>
                        <Button variant="primary" type="submit" className="w-100">Confirmar presente</Button>
                      </Col>
                      

                      
                          </Row>
                  </Container>

                </Form>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>Cancelar</Button>

            </Modal.Footer>
          </Modal>
        </>
      )}

          <Modal
            show={show2} 
            onHide={handleClose2}
            size="lg" aria-labelledby="contained-modal-title-vcenter"
            centered 
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Envie um Pix
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col md={4}>
                    <img 
                      alt="pix" 
                      src='https://i.ibb.co/xYL9V5B/Whats-App-Image-2022-07-29-at-19-23-54.jpg'
                      className="img-fluid"
                      width='auto'
                      height="auto"
                    />
                  </Col>
                  <Col md={8}>
                    <br />
                    <h4>Nos ajude com qualquer valor.</h4>
                    <br />
                    <h5>Chave Pix: (61) 98373-0910</h5>
                    
                  </Col>
                </Row>
              </Container>
              <hr />
              
                <Form onSubmit={handleSubmit(handleSubmit2)} >
                  <Container>
                  <Row>
                      <Col md={5}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Nome:</Form.Label>
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
                            placeholder="examplo@email.com" 
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
                      <Col md={5}>
                      <Form.Label htmlFor="basic-url">Valor: </Form.Label>
                      <InputGroup  className="mb-3">
                          
                          <br />
                          <InputGroup.Text>R$</InputGroup.Text>
                          <FormControl 
                            type="money" 
                            dir="rtl"
                            {...register("descricao")} 
                            mask="999.999"
                            onChange={handleChange}
                            required
                          /> 
                          <InputGroup.Text>,00</InputGroup.Text>

                      </InputGroup >

                      </Col>
                      <Col md={7}>
                        <Form.Label><span>&nbsp;</span></Form.Label>

                        <Button variant="primary" type="submit" className="w-100" style={{}}>Confirmar presente</Button>
                      </Col>
                      

                      
                    </Row>
                  </Container>

                </Form>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose2}>Cancelar</Button>

            </Modal.Footer>
          </Modal>
      
    </>
  )
}

export default Lista
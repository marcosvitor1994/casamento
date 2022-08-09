import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import ApiBase from '../../services/ApiBase'

const ListaConvidados = () => {

  const center = {
    background : 'rgba(255,255,255, 0.95)',
    borderRadius: '15px'
  };

  const [confirmados, setConfirmados] = useState([]);
  const [len, setLen] = useState([]);
  
  useEffect(() => {
    ApiBase.get('/convidado').then((result) => {
        setConfirmados(result.data.users)
        setLen(result.data.users.length)
    }).catch((error) => {      
      console.error(error)
    })
    },[])    
  
  return (
    <>
       <Container>
        <Row style={center}>
          <Col md={12}>
            
          <br />
            
            <h1 style={{fontFamily: "Great vibes"}}>Confirmados</h1>
            <p style={{fontFamily: "Cinzel"}}>
              Número de confirmados: {len}
            </p>
            
         </Col>
         <Col md={12} className='lead'>
            <Table responsive striped bordered hover>
                        
                        <thead align='left'>
                            <tr>
                                <th>Nome</th>
                                <th>e-mail</th>
                                <th>Telefone</th>
                                <th>Resposta</th>
                                
                            </tr>
                        </thead>
                        <tbody align='left'>
                        
                        {confirmados.map((files) => (
                            <tr key={files.id}>
                                <td>{files.nome}</td>    
                                <td>{files.email}</td>    
                                <td>{files.telefone}</td>    
                                <td>{files.resposta}</td> 
                            </tr>       
                                                                            
                        ))}
                       

                    
                        </tbody>
            </Table>

          
        </Col>
         
        </Row>
      </Container>
      <br />    
    </>
  )
}

export default ListaConvidados
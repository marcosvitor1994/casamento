import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import ApiBase from '../../services/ApiBase'

const EscolhaPresentes = () => {

  const center = {
    background : 'rgba(255,255,255, 0.95)',
    borderRadius: '15px'
  };

  const [confirmados, setConfirmados] = useState([]);
  
  useEffect(() => {
    ApiBase.get('/escolha').then((result) => {
        setConfirmados(result.data.item)
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
            
            <h1 style={{fontFamily: "Great vibes"}}>Presentes escolhidos</h1>
            
            
         </Col>
         <Col md={12} className='lead'>
            <Table responsive striped bordered hover>
                        
                        <thead align='left'>
                            <tr>
                                <th>Nome</th>                                
                                <th>Telefone</th>
                                <th>Item</th>
                                
                            </tr>
                        </thead>
                        <tbody align='left'>
                        
                        {confirmados.map((files) => (
                            <tr key={files.id}>
                                <td>{files.nome}</td>    
                                <td>{files.telefone}</td>    
                                <td>{files.item}</td>    
                                
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

export default EscolhaPresentes
import React from 'react';
import { Card } from 'react-bootstrap';


const Cartao = (props) => {
  return (
    <>
        <h5 style={{fontFamily: "Cinzel"}}>{props.titulo}</h5>
          
          <Card>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
              <Card.Text style={{fontFamily: "Cinzel"}}>
                {props.texto}
              </Card.Text>
            </Card.Body>
          </Card>
    </>
  )
}

export default Cartao
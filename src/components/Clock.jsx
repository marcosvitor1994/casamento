import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from 'react-bootstrap';


class Clock extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil("January, 21, 2023");
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil("January, 21, 2023"), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes });
    }
  }
  render() {

    return (
      <div>
        <Container>
            <Row>
                <Col >
                    
                    
                        <Card className="text-center" bg={'Danger'.toLowerCase()} text='white'>                        
                            <Card.Body>                            
                                <Card.Text>
                                    <h1>{this.leading0(this.state.days)}</h1>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>DIAS</Card.Footer>
                        </Card>                       
                    
                </Col>
                <Col>

                    <Card className="text-center" bg={'Danger'.toLowerCase()} text='white'>                        
                        <Card.Body>                            
                            <Card.Text>
                                <h1>{this.leading0(this.state.hours)}</h1>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>HORAS</Card.Footer>
                    </Card> 
                    
                </Col>
                <Col>
                    <Card className="text-center" bg={'Danger'.toLowerCase()} text='white'>                        
                        <Card.Body>                            
                            <Card.Text>
                                <h1>{this.leading0(this.state.minutes)}</h1>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>MINUTOS</Card.Footer>
                    </Card>                     
                </Col>
            </Row>
        </Container>
        
       
        
      </div>
    );
  }
}
export default Clock;

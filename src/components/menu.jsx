import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../pages/img/logo-horizontal.png';


const Menu = () => {

    const detalhes = ['md'];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
       {detalhes.map((expand) => (
            <Navbar 
            key={expand} 
            bg="white" 
            expand={expand} 
            className="mb-3" 
            style={{ opacity: 0.93 }} 
            sticky="top" 
            collapseOnSelect 
            >
            <Container fluid>
                <Navbar.Brand href="/home" style={{marginLeft: 20, marginTop: 9}}>
                    <img
                        src={logo}
                        className="img-fluid"
                        width="242,47"
                        height="auto"
                        alt="Logo"
                    />
                                    
                </Navbar.Brand>
                    
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => handleShow()} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                show={false}
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <img
                            src={logo}
                            width="242,47"
                            height="40"
                            alt="Logo"
                            style={{marginLeft: 20, marginTop: 9.5}}
                        />
                  
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3 lead">

                    
                    <Link className="nav-link" to="/home" onClick={() => setShow(false)}>Home</Link>
                    <Link className="nav-link" to="/info" onClick={() => setShow(false)}>Informações</Link>
                    <Link className="nav-link" to="/confirmacao" onClick={() => setShow(false)}>Confirme Presença</Link>
                    <Link className="nav-link" to="/lista" onClick={() => setShow(false)}>Lista de Presentes</Link>
                    <Link className="nav-link" to="/contato" onClick={() => setShow(false)}>Contato</Link>

                                                
                    </Nav>
                    
                </Offcanvas.Body>
                </Navbar.Offcanvas>

                <Offcanvas show={show} onHide={handleClose} responsive="md" placement='end'>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Ana Júlia & Marcos Vitor</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <Link className="nav-link lead" to="/home" onClick={() => setShow(false)}>Home</Link>
                        <Link className="nav-link lead" to="/info" onClick={() => setShow(false)}>Informações</Link>
                        <Link className="nav-link lead" to="/confirmacao" onClick={() => setShow(false)}>Confirme Presença</Link>
                        <Link className="nav-link lead" to="/lista" onClick={() => setShow(false)}>Lista de Presentes</Link>
                        <Link className="nav-link lead" to="/contato" onClick={() => setShow(false)}>Contato</Link>

                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
            </Navbar>
        ))}
    </>
  )
}

export default Menu
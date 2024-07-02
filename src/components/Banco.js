// src/components/Banco.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banco.css'; // Asegúrate de crear y estilizar este archivo CSS según sea necesario

function Banco() {
    return (
        <div className="banco-container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Sistema de Gestión de Libros</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/banco">Banco</Nav.Link>
                        <Nav.Link as={Link} to="/asignacion">Asignación</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/configuracion">Configuración</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="content">
                <div className="sidebar">
                    <button>Primero</button>
                    <button>Segundo</button>
                    <button>Tercero</button>
                    <button>Cuarto</button>
                    <button>Quinto</button>
                </div>
                <div className="main-content">
                    {/* Aquí puedes agregar el contenido principal que desees mostrar */}
                </div>
            </div>
        </div>
    );
}

export default Banco;

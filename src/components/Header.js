import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AddDetails from './AddDetails';
import { Navbar, Container, Nav } from 'react-bootstrap';
import UpdateDetails from './UpdateDetails';
function Header() {
    return (
        <BrowserRouter>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/addDetails">Add Details</Nav.Link>
                        {/* <Nav.Link as={Link} to="/editDetails">Update Details</Nav.Link> */}

                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addDetails" element={<AddDetails />} />
                <Route path="/editDetails/:id" element={<UpdateDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Header

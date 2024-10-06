
import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {logOut,user} = useAuth();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to ="/"> Gym <span className="gym-name">Heroes</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="d-lg-flex justify-content-end">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/classes">Classes</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                    <span className="displayName">{user.displayName}</span>
                    {user.email &&<Button onClick={logOut} variant="warning" className="log-out">Log Out</Button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
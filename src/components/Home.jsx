import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">User</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/users" className='text-decoration-none text-info me-3'>User</Link>
            <Link to="/add_user" className='text-decoration-none text-info'>Add_User</Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Home